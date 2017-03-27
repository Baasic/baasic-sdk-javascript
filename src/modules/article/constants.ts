import { IArticleStatus, ICommentStatus } from './contracts';

let ArticleStatus: IArticleStatus = {
    none: 0,
    published: 2,
    draft: 1,
    archive: 4
};

let CommentStatus: ICommentStatus = {
    approved: 1,
    spam: 2,
    reported: 4,
    flagged: 8,
    unapproved: 16
};

export { ArticleStatus, CommentStatus };