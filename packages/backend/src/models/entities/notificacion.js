class CambioEstadoPedido {
    /** @type string */
    id;
    /** @type Usuario */
    usuarioDestino;
    /** @type string */
    mesnaje;
    /** @type date */
    fechaAlta;
    /** @type boolean */
    leida;
    /** @type date */
    fechaLeida;

    //------- methods -------//

    constructor(id, usuarioDestino, mensaje) {
        this.id = id;
        this.usuarioDestino = usuarioDestino;
        this.mensaje = mensaje;
        this.fechaAlta = new Date.now();
        this.leida = false;
        this.fechaLeida = null;
    }

    marcarComoLeida(){
        this.leida = true
        this.fechaLeida = Date.now()
    }
}