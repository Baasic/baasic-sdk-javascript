import { IModel } from 'common/contracts';

export interface IPolicy extends IModel {
    action: string,
    roleId?: string,
    roleName?: string,
    userId?: string,
    userName?: string
}