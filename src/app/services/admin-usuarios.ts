import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario";

@Injectable()

export class adminUsuarioService {

    public listaUsuarios:Array<Usuario> = Array<Usuario>();


constructor(){
    this.listaUsuarios = [
        new Usuario("1111111","Marco", "Martinez", "Alvarado", "Informatica", "123456"),
        new Usuario("1111111","Marco1", "Martinez", "Alvarado", "Informatica", "123456"),
        new Usuario("1111111","Marco2", "Martinez", "Alvarado", "Informatica", "123456")
      ]
}

    retornarUsuarios():Array<Usuario>{
        return this.listaUsuarios;
    }

}