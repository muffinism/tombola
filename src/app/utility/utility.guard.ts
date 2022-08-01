import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { NomiGiocatoriService } from './utility.service';



@Injectable({providedIn: "root"})
export class UtilityGuard implements CanActivate{
  constructor(private nomiGiocatori: NomiGiocatoriService, private router: Router){

  }

  canActivate(){
    if(this.nomiGiocatori.nomi.value.length < 1)
      return this.router.navigateByUrl("/");
    else
      return true;
  }

}
