import { IModel } from '../../../../common/contracts';;

export interface IPlatformUserInfo extends IModel {
    isApplicationUser?: boolean,
    displayName?: string,
    email?: string,
    permissions?: any,
    roles?: string[],
    userName?: string,
}