import {
    BlogClient,
    BlogPostClient,
    BlogPostCommentClient,
    BlogPostFilesClient,
    BlogTagClient,
    TYPES
} from './';


import { injectable, inject } from "inversify";

@injectable()
export class Root {

    constructor(
        @inject(TYPES.BlogClient) public blogs: BlogClient,
        @inject(TYPES.BlogPostClient) public blogPosts: BlogPostClient,
        @inject(TYPES.BlogPostCommentClient) public comments: BlogPostCommentClient,
        @inject(TYPES.BlogPostFilesClient) public files: BlogPostFilesClient,
        @inject(TYPES.BlogTagClient) public tags: BlogTagClient,

    ) {
    }

}