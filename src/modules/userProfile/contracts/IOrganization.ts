import { IBaasicModel } from 'common/contracts';

export interface IOrganization extends IBaasicModel {
    description?: string,
    name: string
}