import { IValueSetItem } from 'modules/valueSet/contracts';
import { IBaasicModel } from 'common/contracts';

export interface IValueSet extends IBaasicModel {
    values?: IValueSetItem[],
    description?: string,
    name: string
}