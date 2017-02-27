import { IRole } from 'modules/membership/contracts';

export interface IUserAccess {
    isApproved?: boolean,
    isLockedOut?: boolean,
    roles?: IRole[]
}