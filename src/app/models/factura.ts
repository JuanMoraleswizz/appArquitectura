export interface Factura{
    id: number
    noFactura: string
    cliente: Cliente
    fecha: string
    usuario: Usuario
    tipoPago: tipoPago
    estado: string
}