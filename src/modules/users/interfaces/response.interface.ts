import { UserModelList } from '../models/user.model';

export interface UserResponseInterface {
  ok: boolean;
  msg: string;
  data?: UserModelList[];
}
