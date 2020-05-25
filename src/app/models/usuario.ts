import {PerfilUsuario} from './perfil-usuario';

export interface Usuario {
    id: number
    usuario: string
    perfil: PerfilUsuario;
    estado: boolean

}
