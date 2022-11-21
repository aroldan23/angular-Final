import { Injectable } from "@angular/core";
import { Parqueo } from "../models/parqueo";

@Injectable()

export class adminParqueoService {

    public listaParqueos:Array<Parqueo> = Array<Parqueo>();


constructor(){
    this.listaParqueos = [
        new Parqueo("P1","P1-001", "Administrativo"),
        new Parqueo("P1","P1-002", "Visita"),
        new Parqueo("P1","P1-003", "Visita")
      ]
}

    retornarParqueos():Array<Parqueo>{
        return this.listaParqueos;
    }

}