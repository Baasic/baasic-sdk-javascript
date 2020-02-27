import { IOptions } from '../../../common/contracts';

export interface IBlogPostOptions extends IOptions {
    ids?: string;
    from?: string;
    to?: string;
    publishedFrom?: string;
    publishedTo?: string;
    url?: string;
    template?: string;
    blogPostStatusIds?: string;    
    languageIds?: string;
    blogSlugs?: string;
    tagSlugs?: string;    
}