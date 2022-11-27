import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['superman', 'ever', 'yo'];
  borrado: string = '';

  borrarHeroe() {
    console.log('borrando heroe');
    this.borrado = this.heroes.shift() || '';
  }

}
