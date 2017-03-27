import { IValueSetItem } from 'modules/valueSet/contracts';
import { IModel } from '../../../common/contracts';;

export interface IValueSet extends IModel {
    values?: IValueSetItem[],
    description?: string,
    name: string
}