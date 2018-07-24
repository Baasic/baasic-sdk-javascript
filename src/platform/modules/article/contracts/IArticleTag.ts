import { IModel } from '../common/contracts';;

export interface IArticleTag extends IModel {
    slug?: string,
    sortOrder?: number,
    tag: string
}