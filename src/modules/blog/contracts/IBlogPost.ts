import { IModel } from '../../../common/contracts';
import { IBlogPostAuthor, IBlogPostStatus, IBlogTag } from '.';

export interface IBlogPost extends IModel {
    author?: IBlogPostAuthor;
    authorId: string;
    blogId: string;
    blogPostStatus?: IBlogPostStatus;
    blogPostStatusId: string;
    blogTags?: IBlogTag;
    commentsAllowed: boolean;
    content: string;
    description?: string;
    featuredImageId?: string;
    publishOn?: string;
    title: string;    
    url: string;
    template?: string;
}