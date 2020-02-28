import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    BlogClient,
    BlogRoute,
    BlogPostRoute,
    BlogPostClient,
    BlogTagRoute,
    BlogTagClient,
    BlogPostCommentRoute,
    BlogPostCommentClient,
    BlogPostFilesStreamsRoute,
    BlogPostFilesStreamsClient,
    BlogPostFilesBatchRoute,
    BlogPostFilesBatchClient,
    BlogPostFilesRoute,
    BlogPostFilesClient,
    BlogPostStatusRoute,
    BlogPostStatusClient,
    Root
} from './';

const TYPES = {
    BlogClient: Symbol("BlogClient"),
    BlogRoute: Symbol("BlogRoute"),
    BlogPostRoute: Symbol("BlogPostRoute"),
    BlogPostClient: Symbol("BlogPostClient"),
    BlogTagClient: Symbol("BlogTagClient"),
    BlogTagRoute: Symbol("BlogTagRoute"),
    BlogPostCommentRoute: Symbol("BlogPostCommentRoute"),
    BlogPostCommentClient: Symbol("BlogPostCommentClient"),
    BlogPostFilesStreamsRoute: Symbol("BlogPostFilesStreamsRoute"),
    BlogPostFilesStreamsClient: Symbol("BlogPostFilesStreamsClient"),
    BlogPostFilesBatchRoute: Symbol("BlogPostFilesBatchRoute"),
    BlogPostFilesBatchClient: Symbol("BlogPostFilesBatchClient"),
    BlogPostFilesRoute: Symbol("BlogPostFilesRoute"),
    BlogPostFilesClient: Symbol("BlogPostFilesClient"),
    BlogPostStatusRoute: Symbol("BlogPostStatusRoute"),
    BlogPostStatusClient: Symbol("BlogPostStatusClient"),
    Root: Symbol("Root")    
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BlogClient>(TYPES.BlogClient).to(BlogClient);
    bind<BlogRoute>(TYPES.BlogRoute).to(BlogRoute);
    bind<BlogPostRoute>(TYPES.BlogPostRoute).to(BlogPostRoute);
    bind<BlogPostClient>(TYPES.BlogPostClient).to(BlogPostClient);
    bind<BlogTagRoute>(TYPES.BlogTagRoute).to(BlogTagRoute);
    bind<BlogTagClient>(TYPES.BlogTagClient).to(BlogTagClient);
    bind<BlogPostCommentRoute>(TYPES.BlogPostCommentRoute).to(BlogPostCommentRoute);
    bind<BlogPostCommentClient>(TYPES.BlogPostCommentClient).to(BlogPostCommentClient);
    bind<BlogPostFilesStreamsRoute>(TYPES.BlogPostFilesStreamsRoute).to(BlogPostFilesStreamsRoute);
    bind<BlogPostFilesStreamsClient>(TYPES.BlogPostFilesStreamsClient).to(BlogPostFilesStreamsClient);
    bind<BlogPostFilesBatchRoute>(TYPES.BlogPostFilesBatchRoute).to(BlogPostFilesBatchRoute);
    bind<BlogPostFilesBatchClient>(TYPES.BlogPostFilesBatchClient).to(BlogPostFilesBatchClient);
    bind<BlogPostFilesRoute>(TYPES.BlogPostFilesRoute).to(BlogPostFilesRoute);
    bind<BlogPostFilesClient>(TYPES.BlogPostFilesClient).to(BlogPostFilesClient);
    bind<BlogPostStatusRoute>(TYPES.BlogPostStatusRoute).to(BlogPostStatusRoute);
    bind<BlogPostStatusClient>(TYPES.BlogPostStatusClient).to(BlogPostStatusClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };