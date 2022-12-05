import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo = {
    nombre: 'Beerus sama',
    poder: 0
  };

 /* get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }

  agregarPersonaje(args: Personaje){
    //debugger;
    //this.personajes.push(args);
  }*/

  constructor(){}
  
  
}
