import { IOptions } from '../../../common/contracts';;

export interface IArticleOptions extends IOptions {
    articleUrl?: string,
    startDate?: any,
    endDate?: any,
    statuses?: string[],
    tags?: string[],
    fileName: string,
    minFileSize?: number,
    maxFileSize?: number,
    ids?: string,
    from?: string,
    to: string,
}