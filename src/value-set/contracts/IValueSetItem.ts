import { IBaasicModel } from '../../contracts';

export interface IValueSetItem extends IBaasicModel {
    setId?: string,
    setName?: string,
    value: string
}