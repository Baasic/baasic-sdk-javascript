import { IBaasicModel } from 'contracts';

export interface IRole extends IBaasicModel {
    description?: string,
    name: string
}