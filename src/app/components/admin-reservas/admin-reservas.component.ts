import { Config } from 'src/app/models/config';
import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';


@Component({
  selector: 'app-admin-reservas',
  templateUrl: './admin-reservas.component.html',
  styleUrls: ['./admin-reservas.component.css']
})
export class AdminReservasComponent implements OnInit {
  public titulo:string = "Componente Reserva"
  public listaReservas:Array<Reserva> = Array<Reserva>();
  public reserva:Reserva = new Reserva("","","","","",false);
  public reservaSeleccionado:Reserva = new Reserva("","","","","",false);
  public modo:string = Config.insertar;

  constructor() {
    this.listaReservas = [
      new Reserva("1111111","P1","P1-001", "22", "22", false),
      new Reserva("1122222", "P1","P1-002", "22", "22", true),
      new Reserva("13333111", "P1","P1-003", "22", "22", true)
    ]
   }

  ngOnInit(): void {
    this.listaReservas.forEach((valor, indice) => {
      console.log(indice, valor)
    });
  }

  borrarReserva(codigo:any){
    this.listaReservas.splice(codigo,1)
  }

  agregarReserva(){
    console.log(this.reserva)

     if (this.modo === Config.insertar){
        this.listaReservas.push(this.reserva);
     }else{
        /**/
     } 

    
    this.limpiar();
  }

  actualizarReserva(indice:any, reservaSeccionado:Reserva){
    console.log(reservaSeccionado);
    this.reserva = reservaSeccionado;
    this.modo = Config.modificar;
  }

  limpiar(){
    this.reserva = new Reserva("","","","","",false);
    this.modo = Config.insertar;
  }

}