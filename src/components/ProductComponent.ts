export class ProductComponent {
    private iva: number = 0.21;
    
    constructor(
        private precioBase: number,
        public nombreProducto: string
    ){}

    public obtenerPrecioFinal(): number {
       return this.precioBase * (1 + this.iva);
    }
}