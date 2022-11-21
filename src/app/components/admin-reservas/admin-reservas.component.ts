import { Config } from 'src/app/models/config';
import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { adminReservaService } from 'src/app/services/admin-reservas';


@Component({
  selector: 'app-admin-reservas',
  templateUrl: './admin-reservas.component.html',
  styleUrls: ['./admin-reservas.component.css'],
  providers: [adminReservaService]
})
export class AdminReservasComponent implements OnInit {
  public titulo:string = "Componente Reserva"
  public listaReservas:Array<Reserva> = Array<Reserva>();
  public reserva:Reserva = new Reserva("","","","","",false);
  public reservaSeleccionado:Reserva = new Reserva("","","","","",false);
  public modo:string = Config.insertar;

  constructor(private _adminReservaService : adminReservaService) {
   }

  ngOnInit(): void {
    this.listaReservas = this._adminReservaService.retornarReservas();
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