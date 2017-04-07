import { IOptions } from '../../../common/contracts';;

export interface IArticleOptions extends IOptions {
    articleUrl?: string,
    startDate?: any,
    endDate?: any,
    statuses?: string[],
    tags?: string[]
}