import { Config } from 'src/app/models/config';
import { Component, OnInit } from '@angular/core';
import { Parqueo } from 'src/app/models/parqueo';
import { adminParqueoService } from 'src/app/services/admin-parqueo';

@Component({
  selector: 'app-admin-parqueos',
  templateUrl: './admin-parqueos.component.html',
  styleUrls: ['./admin-parqueos.component.css'],
  providers: [adminParqueoService]
})
export class AdminParqueosComponent implements OnInit {
  public listaParqueos:Array<Parqueo> = Array<Parqueo>();
  public parqueo:Parqueo = new Parqueo("","","");
  public parqueoSeleccionado:Parqueo = new Parqueo("","","");
  public modo:string = Config.insertar;

  constructor(private _adminParqueoService : adminParqueoService) {

   }

  ngOnInit(): void {
    this.listaParqueos = this._adminParqueoService.retornarParqueos();
  }

  borrarParqueo(codigo:any){
    this.listaParqueos.splice(codigo,1)
  }

  agregarParqueo(){
    console.log(this.parqueo)

     if (this.modo === Config.insertar){
        this.listaParqueos.push(this.parqueo);
     }else{
        /**/
     } 

    
    this.limpiar();
  }

  actualizarParqueo(indice:any, parqueoSeccionado:Parqueo){
    console.log(parqueoSeccionado);
    this.parqueo = parqueoSeccionado;
    this.modo = Config.modificar;
  }

  limpiar(){
    this.parqueo = new Parqueo("","","");
    this.modo = Config.insertar;
  }

}