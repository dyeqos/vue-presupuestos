import { RolInterface } from '../interfaces/rol.interface';

export interface UserModel {
    nombre: string,
    paterno: string,
    materno: string,
    correo: string,
    rol: RolInterface,
    estado?: boolean,
    google?: boolean,
    password?: string,
    uid?: string
}