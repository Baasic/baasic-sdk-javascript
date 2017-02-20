import { IBaasicModel } from 'common/contracts';

export interface IKeyValue extends IBaasicModel {
    key: string,
    value: string
}