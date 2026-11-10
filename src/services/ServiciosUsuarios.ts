import { ServicioDatos } from './ServicioDatos.js';

export class ServiciosUsuarios extends ServicioDatos{
    constructor(
        endpoint: string,
        public entidad: string = 'usuarios'
    ){
        super(endpoint);
    }
}