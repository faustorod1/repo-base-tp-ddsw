class FactoryNotification {

    //------- methods -------//

    crearSegunEstadoPedido(estado){
        return estado
    }

    crearSegunPedido(pedido){
        const notificacion = new Notification(pedido.id, pedido.comprador, pedido.estado)
        return notificacion
    }
}
