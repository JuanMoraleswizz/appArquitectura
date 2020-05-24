import { Categoria } from "./categoria";
export interface Cliente {

    id: number
    noDocumento: string
    primerNombre: string
    segundoNombre: string
    primerApellido: string
    segundoApellido: string
    genero: Genero
    fechaNacimiento: string
    cuidad: string
    categoria: Categoria
    millas: number


}