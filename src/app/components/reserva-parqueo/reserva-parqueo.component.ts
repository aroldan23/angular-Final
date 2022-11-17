import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-reserva-parqueo',
  templateUrl: './reserva-parqueo.component.html',
  styleUrls: ['./reserva-parqueo.component.css']
})
export class ReservaParqueoComponent implements OnInit {

  public usuario:Usuario = new Usuario("","");

  constructor() { }

  ngOnInit(): void {
  }

  reservarParqueo(){
    console.log(this.usuario);
  }

}
