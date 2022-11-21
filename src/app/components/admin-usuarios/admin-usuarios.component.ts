import { Usuario } from 'src/app/models/usuario';
import { Config } from 'src/app/models/config';
import { Component, OnInit } from '@angular/core';
import { adminUsuarioService } from 'src/app/services/admin-usuarios';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css'],
  providers: [adminUsuarioService]
})
export class AdminUsuariosComponent implements OnInit {
  public listaUsuarios:Array<Usuario> = Array<Usuario>();
  public usuario:Usuario = new Usuario("","","","","","");
  public usuarioSeleccionado:Usuario = new Usuario("","","","","","");
  public modo:string = Config.insertar;

  constructor(private _adminUsuarioService : adminUsuarioService) {
   }

  ngOnInit(): void {
    this.listaUsuarios = this._adminUsuarioService.retornarUsuarios();
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