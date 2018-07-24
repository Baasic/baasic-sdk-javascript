import { IModel } from 'common/contracts';

export interface IFileUserInfo extends IModel {
    displayName?: string,
    id: string
}