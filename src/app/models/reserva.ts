export class Reserva{

    constructor(
        public cedula:string,
        public parqueoID:string,
        public espacioID:string,
        public horaInicio:string,
        public horaFin:string,
        public estado:boolean,
    ){}
}
