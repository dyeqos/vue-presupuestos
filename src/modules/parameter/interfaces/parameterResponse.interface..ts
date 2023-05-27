import { ParameterModel } from '../models/parameter.model';

export interface ParameterResponseInterface {
    ok: boolean,
    msg: string,
    data?: ParameterModel[]
}