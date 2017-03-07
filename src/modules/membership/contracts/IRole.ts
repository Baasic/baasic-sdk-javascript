import { IBaasicModel } from 'common/contracts';

export interface IRole extends IBaasicModel {
    description?: string,
    name: string
}