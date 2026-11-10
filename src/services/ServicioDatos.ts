export class ServicioDatos{
    constructor(
        public endpoint: string
    ){}

    public conectar(): void {
       console.log("Conectando a " + this.endpoint);
    }
}