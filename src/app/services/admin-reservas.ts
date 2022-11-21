import { Injectable } from "@angular/core";
import { Reserva } from "../models/reserva";

@Injectable()

export class adminReservaService {

    public listaReservas:Array<Reserva> = Array<Reserva>();


constructor(){
    this.listaReservas = [
        new Reserva("1111111","P1","P1-001", "22", "22", false),
        new Reserva("1122222", "P1","P1-002", "22", "22", true),
        new Reserva("13333111", "P1","P1-003", "22", "22", true)
      ]
}

    retornarReservas():Array<Reserva>{
        return this.listaReservas;
    }

}