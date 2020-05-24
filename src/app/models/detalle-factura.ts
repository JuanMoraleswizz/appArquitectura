export interface DetalleFactura {
    id: number
    encabezado: Encabezado
    item: item
    cantidad: number
    valorUnitario: number
    valorTotal: number
}