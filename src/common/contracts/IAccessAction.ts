import { IBaasicModel } from 'common/contracts';

export interface IAccessAction extends IBaasicModel {
    abrv?: string,
    description?: string,
    name?: string
}