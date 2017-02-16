import { IBaasicModel } from 'common/contracts';

export interface IValueSetItem extends IBaasicModel {
    setId?: string,
    setName?: string,
    value: string
}