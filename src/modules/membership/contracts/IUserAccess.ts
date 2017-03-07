import { IRole } from 'common/contracts';

export interface IUserAccess {
    isApproved?: boolean,
    isLockedOut?: boolean,
    roles?: IRole[]
}