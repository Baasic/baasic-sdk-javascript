import { IBaasicModel } from 'common/contracts';

export interface IAccessSection extends IBaasicModel {
    abrv?: string,
    description?: string,
    name?: string
}