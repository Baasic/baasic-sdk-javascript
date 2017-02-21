import { IBaasicModel } from 'common/contracts';

export interface ICompany extends IBaasicModel {
    description?: string,
    name: string,
    slug?: string
}