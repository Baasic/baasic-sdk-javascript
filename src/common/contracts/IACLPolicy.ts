import { IACL, IACLAction, IACLRole, IACLUser } from './';

export interface IACLPolicy extends IACL {
    action: IACLAction,
    role: IACLRole,
    user: IACLUser,
    embed?: string[]
}