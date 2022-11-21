import { Config } from 'src/app/models/config';
import { Component, OnInit } from '@angular/core';
import { Parqueo } from 'src/app/models/parqueo';

@Component({
  selector: 'app-vista-reservas',
  templateUrl: './vista-reservas.component.html',
  styleUrls: ['./vista-reservas.component.css']
})
export class VistaReservasComponent implements OnInit {
  public listaParqueos:Array<Parqueo> = Array<Parqueo>();
  public parqueo:Parqueo = new Parqueo("","","");
  public parqueoSeleccionado:Parqueo = new Parqueo("","","");
  public modo:string = Config.insertar;
  public cantidad: number = 30;

  constructor() {
    this.listaParqueos = [
      new Parqueo("160360","Diseño Web I", "Diseño We I Angular & Node"),
      new Parqueo("160361","Desarrollo Software", "Desarrollo Software"),
      new Parqueo("160362","Xamarin", "Xamarin")
    ]
   }

  ngOnInit(): void {
    this.listaParqueos.forEach((valor, indice) => {
      console.log(indice, valor)

    });
  }

}