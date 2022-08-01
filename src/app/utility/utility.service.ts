
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';


@Injectable({providedIn: "root"})
export class NomiGiocatoriService {

  private nomiGiocatori = new BehaviorSubject<string[]>([]);
  data = this.nomiGiocatori.asObservable().pipe(
    map(
      res => res.map(e => e.toUpperCase())
    )
  );
  nomi = this.nomiGiocatori;

  constructor() { }

  updatedDataSelection(stringArray: string[]){
    this.nomiGiocatori.next(stringArray);
  }

}
