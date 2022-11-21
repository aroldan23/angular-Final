import { Espacio } from 'src/app/models/espacio';
import { Component, OnInit } from '@angular/core';
import { adminEspacioService } from 'src/app/services/admin-espacios';
import { Config } from 'src/app/models/config';

@Component({
  selector: 'app-admin-espacios',
  templateUrl: './admin-espacios.component.html',
  styleUrls: ['./admin-espacios.component.css'],
  providers: [adminEspacioService]
})

export class AdminEspaciosComponent implements OnInit {

  public listaEspacios:Array<Espacio> = Array<Espacio>();
  public listaParqueos: string[] = ['P1', 'P2'];
  public listaTipos: string[] = ['Estudiante', 'Administrativo','Visita','Discapacitado'];
  public listaVehiculos: string[] = ['Carro', 'Motocicleta'];
  public espacio:Espacio = new Espacio("","","","");
  public espacioSeleccionado:Espacio = new Espacio("","","","");
  public modo:string = Config.insertar;

  constructor(private _adminEspacioService : adminEspacioService) {
   }

  ngOnInit(): void {
    this.listaEspacios = this._adminEspacioService.retornarEspacios();
  }

  borrarEspacio(codigo:any){
    this.listaEspacios.splice(codigo,1)
  }

  agregarEspacio(){
    console.log(this.espacio)

     if (this.modo === Config.insertar){
        this.listaEspacios.push(this.espacio);
     }else{
        /**/
     } 

    this.limpiar();
  }

  actualizarEspacio(indice:any, espacioSeccionado:Espacio){
    console.log(espacioSeccionado);
    this.espacio = espacioSeccionado;
    this.modo = Config.modificar;
  }

  limpiar(){
    this.espacio = new Espacio("","","","");
    this.modo = Config.insertar;
  }
}