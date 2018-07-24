import { IModel } from '../../../common/contracts';;
import { ISNProvider } from './';

export interface IApplicationSettings extends IModel {
    snProvider: ISNProvider[]
}