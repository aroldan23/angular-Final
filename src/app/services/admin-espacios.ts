import { Injectable } from "@angular/core";
import { Espacio } from "../models/espacio";

@Injectable()

export class adminEspacioService {

    public listaEspacios:Array<Espacio> = Array<Espacio>();


constructor(){
    this.listaEspacios = [
        new Espacio("P1","P1-001", "Administrativo", "Carro"),
        new Espacio("P1","P1-002", "Visita", "Carro"),
        new Espacio("P1","P1-003", "Visita", "Carro")
      ]
}

    retornarEspacios():Array<Espacio>{
        return this.listaEspacios;
    }

}