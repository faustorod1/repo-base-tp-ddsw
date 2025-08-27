class Pedido{
    /** @type string */
    id;
    /** @type Usuario */
    comprador;
    /** @type ItemPedido[] */
    items;
    /** @type number */
    total;
    /** @type Moneda */
    moneda;
    /** @type DireccionEntrega */
    direccionEntrega;
    /** @type EstadoPedido */
    estado;
    /** @type CambioEstadoPedido[] */
    fechaCreacion;
    /** @type CambioEstadoPedido[] */
    historialEstados;
    
    /**
     * @param {string} id
     * @param {Usuario} comprador
     * @param items itemsPedido[]
     * @param moneda Moneda
     * @param direccionEntrega DireccionEntrega
     * @param estado EstadoPedido
     * @param fechaCreacion Date
     * @param historialEstados CambioEstadoPedido[]
     */
    
    constructor(id, comprador, items, moneda, direccionEntrega, estado, fechaCreacion, historialEstados){
        //TODO
        this.items
    }

    //------- methods -------//

    /**
     * @returns number
     */
    calcularTotal(){
        this.total = this.items.reduce((acum, item) => acum + item.subtotal(), 0);
        return this.total;
    }

    actualizarEstado(nuevoEstado, usuario, motivo){
        this.estado = nuevoEstado;
        
        const unCambioEstadoPedido = new CambioEstadoPedido(new Date(), nuevoEstado, this, usuario, motivo);
        this.historialEstados.push(unCambioEstadoPedido);
    }

    /**
     * @returns boolean
     */
    validarStock(){
        return this.items.every(item => item.producto.estaDisponible(item.cantidad));
    }
}