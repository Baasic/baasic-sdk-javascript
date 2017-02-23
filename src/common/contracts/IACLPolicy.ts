import { IACL, IACLAction, IACLRole, IACLUser } from 'common/contracts';

export interface IACLPolicy extends IACL {
    action: IACLAction,
    role: IACLRole,
    user: IACLUser,
    embed?: string[]
}