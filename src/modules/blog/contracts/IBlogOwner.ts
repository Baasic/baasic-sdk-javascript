import { IModel } from '../../../common/contracts';;

export interface IBlogOwner extends IModel {
    displayName: string;
    firstName: string;
    lastName: string;
    userName: string;
}