import { IModel } from '../../../common/contracts';;
import { IAccessAction, IAccessSection, IRole, ISnProvider } from 'modules/membership/contracts';

export interface ILookup extends IModel {
    accessAction?: IAccessAction[],
    accessSection?: IAccessSection[],
    role?: IRole[],
    snProvider?: ISnProvider[]
}