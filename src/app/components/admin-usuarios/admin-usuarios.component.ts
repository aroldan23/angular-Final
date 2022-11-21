import { Usuario } from 'src/app/models/usuario';
import { Config } from 'src/app/models/config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {
  public listaUsuarios:Array<Usuario> = Array<Usuario>();
  public usuario:Usuario = new Usuario("","","","","","");
  public usuarioSeleccionado:Usuario = new Usuario("","","","","","");
  public modo:string = Config.insertar;

  constructor() {
    this.listaUsuarios = [
      new Usuario("1111111","Marco", "Martinez", "Alvarado", "Informatica", "123456"),
      new Usuario("1111111","Marco1", "Martinez", "Alvarado", "Informatica", "123456"),
      new Usuario("1111111","Marco2", "Martinez", "Alvarado", "Informatica", "123456")
    ]
   }

  ngOnInit(): void {
    this.listaUsuarios.forEach((valor, indice) => {
      console.log(indice, valor)
    });
  }

  borrarUsuario(codigo:any){
    this.listaUsuarios.splice(codigo,1)
  }

  agregarUsuario(){
    console.log(this.usuario)

     if (this.modo === Config.insertar){
        this.listaUsuarios.push(this.usuario);
     }else{
        /**/
     } 

    
    this.limpiar();
  }

  actualizarUsuario(indice:any, usuarioSeccionado:Usuario){
    console.log(usuarioSeccionado);
    this.usuario = usuarioSeccionado;
    this.modo = Config.modificar;
  }

  limpiar(){
    this.usuario = new Usuario("","","","","","");
    this.modo = Config.insertar;
  }

}