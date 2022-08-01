import { NomiGiocatoriService } from './../utility/utility.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabellone',
  templateUrl: './tabellone.component.html',
  styleUrls: ['./tabellone.component.css'],
})
export class TabelloneComponent implements OnInit {
  private tabellone: Tile[] = [];
  numEstratto!: number;
  isWinner: boolean = false;
  isReset: boolean[] = [];
  isGameOn: boolean = false;
  matchCount: number = 1;
  numeriRimanenti: number = 90;
  numeroGiocatori: number = 8;
  winner!: number;
  record: Record[] = [];
  displayedColumns = ['player', 'numPartite', 'mosse'];
  nomi: string[] = [];

  constructor(private cdRef: ChangeDetectorRef, private route: ActivatedRoute, public nomiGiocatori: NomiGiocatoriService) {
    this.route.params.subscribe((params) => {
      this.numeroGiocatori = parseInt(params['numeroGiocatori']);
    });
    this.nomiGiocatori.nomi.subscribe({
      next: res => {
        this.nomi = res;
        console.log(res);
      },
      error: err =>{
        alert(err);
      }
    })
  }

  ngOnInit() {
    this.riempiTabellone();
    for (let i = 0; i < this.nomi.length; i++) {
      this.isReset.push(false);
    }
  }

  numSequence(): Array<number> {
    return Array(this.nomi.length);
  }

  riempiTabellone() {
    for (let i = 1; i < 91; i++) {
      this.tabellone.push({ numero: i, isLit: false });
    }
  }

  /*
  estrai() {
    let random: number = Math.floor(Math.random() * 89 + 1);
    this.tabellone[random].isLit == false
      ? (this.tabellone[random].isLit = true)
      : this.estrai();
  }
  */

  estrai() {
    let isAllTrue: boolean = this.tabellone.every((e) => e.isLit);
    let random: number = Math.floor(Math.random() * 90);
    while (this.tabellone[random].isLit == true && !isAllTrue) {
      random = Math.floor(Math.random() * 90);
    }
    this.tabellone[random].isLit = true;
    this.numEstratto = this.tabellone[random].numero;
    this.numeriRimanenti--;
  }

  checkWinner(event: { isAllTrue: boolean; num: number }) {
    console.log(event);
    this.isWinner = event.isAllTrue;
    this.winner = event.num;
    this.cdRef.detectChanges();
  }

  resetGioco() {
    let record: Record[] = Object.assign([], this.record);
    this.tabellone = [];
    this.isWinner = false;
    for (let i = 0; i < this.isReset.length; i++) {
      this.isReset[i] = true;
    }
    this.riempiTabellone();
    record.push({
      numPartite: this.matchCount,
      player: this.nomi[this.winner],
      mosse: 90 - this.numeriRimanenti,
    });
    this.record = record;
    this.winner = -1;
    this.numeriRimanenti = 90;
    this.matchCount++;
  }

  toResetScheda(event: number) {
    this.isReset[event] = false;
    this.cdRef.detectChanges();
  }

  get tabella() {
    return this.tabellone;
  }
}

export interface Tile {
  numero: number;
  isLit: boolean;
}

export interface Record {
  numPartite: number;
  player: string;
  mosse: number;
}
