import { IModel } from '../../../common/contracts';;

export interface IBlogPostAuthor extends IModel {
    displayName: string;
    firstName: string;
    lastName: string;
    userName: string;
}