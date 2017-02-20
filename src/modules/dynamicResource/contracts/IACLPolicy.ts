import { IACLAction, IACLRole, IACLUser } from 'dynamicResource/contracts';

export interface IACLPolicy {
    action: IACLAction,
    role: IACLRole,
    user: IACLUser,
    actionId?: string,
    roleId?: string,
    userId?: string,
    embed?: string[]
}