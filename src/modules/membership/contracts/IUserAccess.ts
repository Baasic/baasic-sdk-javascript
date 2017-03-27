import { IRole } from './';

export interface IUserAccess {
    isApproved?: boolean,
    isLockedOut?: boolean,
    roles?: IRole[]
}