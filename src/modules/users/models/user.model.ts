import { RolInterface } from '../interfaces/rol.interface';

export interface UserModelList {
  nombre: string | null;
  paterno: string | null;
  materno: string | null;
  correo: string | null;
  rol: RolInterface;
  estado?: boolean | null;
  google?: boolean | null;
  password?: string | null;
  uid?: string | null;
}
export interface UserModel {
  nombre: string | null;
  paterno: string | null;
  materno: string | null;
  correo: string | null;
  rol: string | null;
  estado?: boolean | null;
  google?: boolean | null;
  password?: string | null;
  uid?: string | null;
}
