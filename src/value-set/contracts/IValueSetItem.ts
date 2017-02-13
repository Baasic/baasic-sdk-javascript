import { IBaasicModel } from '../..';

export interface IValueSetItem extends IBaasicModel {
    setId?: string,
    setName?: string,
    value: string
}