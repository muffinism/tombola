import { NomiGiocatoriService } from './../utility/utility.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formArray } from '../utility/formArray';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  playersIsFull: boolean = false;
  closeResult!: string;
  reactiveForm!: FormGroup;
  numeroGiocatori: number = 0;
  playerName!: FormControl;
  placeholder: string = "Nome Giocatore...";

  constructor(private router: Router, private arrayGiocatori: NomiGiocatoriService) {
    /* if(this.arrayGiocatori.nomi.value[0] !== ) */
  }

  ngOnInit() {
    this.reactiveForm = formArray();
  }

  insertPlayer() {
    let playerName = this.getFormArray();
    if(playerName.length <= 3 && this.arrayGiocatori.nomi.value[0] !== "" ){
      this.numeroGiocatori++;
      playerName.push(new FormControl("", Validators.required ));
      console.log(this.arrayGiocatori);
    }else {
       this.playersIsFull = true;
    }
  }
  checkErrors(){
    let message: string = "";
    let formArray = this.getFormArray()['controls'];
    formArray.forEach( e => {
      if(e.status == "INVALID" && e.dirty){
        message = "Campo Obbligatorio.";
      } else
        message = "Nome Giocatore...";
    });
    return message;
  }
  removePlayer(i: number){
    this.getFormArray().removeAt(i);
    this.numeroGiocatori--;
  }
  getFormArray(){
    return this.reactiveForm.get('playerName') as FormArray;
  }


  gioca() {
    this.arrayGiocatori.updatedDataSelection(this.getFormArray().value);
    this.router.navigateByUrl('tabellone/' + this.numeroGiocatori);
  }

}
