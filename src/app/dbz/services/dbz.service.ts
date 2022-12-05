import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';


@Injectable()
export class DbzService{

    private _personajes : Personaje[] = [
        {
          nombre: "Goku",
          poder:9000
        },
        {
          nombre: "Vegeta",
          poder:7000
        }
      ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor(){
        console.log("Servicio inicializado");
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

}