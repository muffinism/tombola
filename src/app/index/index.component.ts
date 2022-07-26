import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  playersIsSet: boolean = false;
  closeResult!: string;

  numeroGiocatori!: number;
  constructor(private router: Router) {}

  ngOnInit() {}

  insertPlayers() {
    this.playersIsSet = true;
  }
  gioca() {
    this.router.navigateByUrl('tabellone/' + this.numeroGiocatori);
  }
  /* openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  } */
}
