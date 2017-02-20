import { IRole } from 'membership/contracts';

export interface IUserAccess {
    isApproved?: boolean,
    isLockedOut?: boolean,
    roles?: IRole[]
}