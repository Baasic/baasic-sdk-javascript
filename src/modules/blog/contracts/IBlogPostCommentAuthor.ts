import { IModel } from '../../../common/contracts';;

export interface IBlogPostCommentAuthor extends IModel {
    displayName: string;
    firstName: string;
    lastName: string;
    userName: string;
}