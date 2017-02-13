import { IBaasicModel } from '../../contracts';

export interface IKeyValue extends IBaasicModel {
    key: string,
    value: string
}