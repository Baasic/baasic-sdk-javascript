import { IValueSetItem } from '.';
import { IBaasicModel } from '../..';

export interface IValueSet extends IBaasicModel {
    values?: IValueSetItem[],
    description?: string,
    name: string
}