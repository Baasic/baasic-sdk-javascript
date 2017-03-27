import { IAuthor } from './';

export interface IArticleCommentMetadata {
    approveDate?: string,
    author?: string,
    email?: string,
    flagDate?: string,
    isApproved?: boolean,
    isFlagged?: boolean,
    isReported?: boolean,
    isSpam?: boolean,
    reportDate?: string,
    spamDate?: string,
    user?: IAuthor,
    userId: string,
    website: string
}