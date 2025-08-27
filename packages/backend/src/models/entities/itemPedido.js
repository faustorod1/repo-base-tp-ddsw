class itemPedido{
    producto;
    cantidad;
    precioUnitario;

    //------- methods -------//

    subtotal() {
        return this.cantidad * this.precioUnitario;
    }
}