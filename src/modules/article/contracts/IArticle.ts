import { IModel } from 'common/contracts';
import { IArticleComment, IArticleFile, IAuthor, IArticleTag, IRating } from 'modules/article/contracts';

export interface IArticle extends IModel {
    allowComments?: boolean,
    archiveDate?: string,
    author?: IAuthor,
    authorId?: string,
    comments?: IArticleComment,
    content?: string,
    fileEntries?: IArticleFile,
    publishDate?: string,
    ratings?: IRating[],
    slug?: string,
    status?: number,
    tags: IArticleTag[],
    title?: string
}