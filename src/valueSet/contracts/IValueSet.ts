import { IValueSetItem } from '.';
import { IBaasicModel } from '../../contracts';

export interface IValueSet extends IBaasicModel {
    values?: IValueSetItem[],
    description?: string,
    name: string
}