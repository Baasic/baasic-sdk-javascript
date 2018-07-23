import { IModel } from '../../../../common/contracts';;

export interface INewPlatformApplication extends IModel {
    email: string,
    identifier: string,
    name: string,
    password: string
}