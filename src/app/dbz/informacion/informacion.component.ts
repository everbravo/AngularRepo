import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html'
})
export class InformacionComponent {

  @Input('default') nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //@Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return }

    //this.onNewCharacter.emit(this.nuevo);
    console.log(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
   
  }

  constructor(private dbzService: DbzService){

  }

}
