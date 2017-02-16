import { IBaasicModel } from 'common/contracts';

export interface IOwner extends IBaasicModel {
    displayName?: string,
    id: string
}