import { UserModel } from '../models/user.model';

export interface UserResponseInterface {
  ok: boolean;
  msg: string;
  data?: UserModel[];
}
