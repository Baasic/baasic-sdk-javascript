import { IOptions } from 'common/contracts';;

export interface IUserOptions extends IOptions {
    userIds?: string,
    roleIds?: string,
    roleNames?: string,
    isApproved?: boolean,
    isLocked?: boolean
}