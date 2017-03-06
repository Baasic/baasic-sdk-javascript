import { IAccessAction } from 'modules/membership/contracts/IAccessAction';

export interface IAccessPolicy {
    id: string,
    actions: IAccessAction[],
    section: string,
    name: string,
    role: string,
    userName: string
}