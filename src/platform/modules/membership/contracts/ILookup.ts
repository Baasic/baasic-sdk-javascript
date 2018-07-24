import { IModel } from 'common/contracts';;
import { IAccessAction, IAccessSection, IRole, ISnProvider } from './';

export interface ILookup extends IModel {
    accessAction?: IAccessAction[],
    accessSection?: IAccessSection[],
    role?: IRole[],
    snProvider?: ISnProvider[]
}