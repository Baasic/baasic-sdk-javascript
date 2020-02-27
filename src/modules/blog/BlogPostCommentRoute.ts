/* globals module */
/**
 * @module blogPostCommentRoute
 * @description Baasic Blog Comment Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic blogPost Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IGetRequestOptions } from '../../common/contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';
import { IBlogPostComment, IBlogPostCommentOptions } from './contracts';

@injectable()
export class BlogPostCommentRoute extends BaseRoute {

    public readonly findRoute: string = 'blog/blog-post-comments/{?searchQuery,ids,from,to,publishedFrom,publishedTo,url,template,blogPostPostStatusIds,languageIds,blogPostSlugs,tagSlugs,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'blog/blog-post-comments/{id}/{?embed,fields}';

    public readonly purgeRoute: string = 'blog/blog-post-comments/purge';

    public readonly createRoute: string = 'blog/blog-post-comments';

    public readonly updateRoute: string = 'blog/blog-post-comments/{id}';

    public readonly deleteRoute: string = 'blog/blog-post-comments/{id}';
    
    public readonly approveRoute: string = 'blog/blog-post-comments/{id}/approve';

    public readonly flagRoute: string = 'blog/blog-post-comments/{id}/flag';

    public readonly spamRoute: string = 'blog/blog-post-comments/{id}/spam';

    public readonly reportRoute: string = 'blog/blog-post-comments/{id}/report';

    public readonly unapproveRoute: string = 'blog/blog-post-comments/{id}/unapprove';

    public readonly unflagRoute: string = 'blog/blog-post-comments/{id}/unflag';

    public readonly unspamRoute: string = 'blog/blog-post-comments/{id}/unspam';

    public readonly unreportRoute: string = 'blog/blog-post-comments/{id}/unreport';

    constructor(        
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }


    /**
     * Parses find blogPost route which can be expanded with additional options. Supported items are:
     * - `searchQuery` - A string referencing blogPost properties using the phrase or BQL (Baasic Query Language) search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain blogPost subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the blogPost property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `startDate` - A value used to specify the blogPost creation, publish or archive date date starting from which blogPost resource collection should be returned.
     * - `endDate` - A value used to specify the blogPost creation, publish or archive date until (and including) which blogPost resource collection should be returned.
     * - `statuses` - Comma separated list of blogPost statuses that specify where search should be done (Allowed statuses: Published, Draft and Archived).
     * - `tags` - A value used to restrict the search to blogPost resources with these tags. Multiple tags should be comma separated.
     * @method
     * @param options A promise that is resolved once the find action has been performed.
     * @example blogPostCommentRoute.find.expand({searchQuery: '<search-phrase>'});
     **/
    find(options?: IBlogPostCommentOptions): string {
        var opt = options || {};
        return super.baseFind(this.findRoute, opt);
    }

    /**
     * Parses get blogPost route which must be expanded with the Id of the previously created blogPost resource in the system. Additional expand supported items are:
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param id blogPost slug or id which uniquely identifies blogPost resource that needs to be retrieved.
     * @param options Options object that contains embed items.
     * @example blogPostCommentRoute.get({id: '<blogPost-id>'});
     **/
    get(id: string, options?: IGetRequestOptions): string {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses purge blogPost route, this URI template doesn't expose any additional properties.
     * @method
     * @example blogPostCommentRoute.purge();
     **/
    purge(): string {
        return super.baseDelete(this.purgeRoute, {});
    }

    /**
     * Parses create blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @example blogPostCommentRoute.create();
     **/
    create(): string {
        return super.baseCreate(this.createRoute, {});
    }

    /**
     * Parses update blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blogPost object that needs to be updated into the system.
     * @example blogPostCommentRoute.update(data);
     **/
    update(data: IBlogPostComment): string {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delete blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blogPost object that needs to be removed from the system.
     * @example blogPostCommentRoute.delete(data);
     **/
    delete(data: IBlogPostComment): string {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
     * Parses approve blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blogPost object that needs to be approved into the system.
     * @example blogPostCommentRoute.approve(data);
     **/
    approve(data: IBlogPostComment): string {
        return super.baseUpdate(this.approveRoute, data);
    }

    /**
     * Parses flag blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blogPost object that needs to be flaged into the system.
     * @example blogPostCommentRoute.flag(data);
     **/
    flag(data: IBlogPostComment): string {
        return super.baseUpdate(this.flagRoute, data);
    }

    /**
     * Parses spam blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blogPost object that needs to be marked as spam into the system.
     * @example blogPostCommentRoute.spam(data);
     **/
    spam(data: IBlogPostComment): string {
        return super.baseUpdate(this.spamRoute, data);
    }

    /**
     * Parses report blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blogPost object that needs to be reported into the system.
     * @example blogPostCommentRoute.report(data);
     **/
    report(data: IBlogPostComment): string {
        return super.baseUpdate(this.reportRoute, data);
    }

    /**
     * Parses unapprove blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blogPost object that needs to be unapproved into the system.
     * @example blogPostCommentRoute.unapprove(data);
     **/
    unapprove(data: IBlogPostComment): string {
        return super.baseUpdate(this.unapproveRoute, data);
    }

    /**
     * Parses unflag blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blogPost object that needs to be unflaged into the system.
     * @example blogPostCommentRoute.unflag(data);
     **/
    unflag(data: IBlogPostComment): string {
        return super.baseUpdate(this.unflagRoute, data);
    }

    /**
     * Parses unspam blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blogPost object that needs to be unspamed into the system.
     * @example blogPostCommentRoute.unspam(data);
     **/
    unspam(data: IBlogPostComment): string {
        return super.baseUpdate(this.unspamRoute, data);
    }

    /**
     * Parses unreport blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blogPost object that needs to be unreported into the system.
     * @example blogPostCommentRoute.unreport(data);
     **/
    unreport(data: IBlogPostComment): string {
        return super.baseUpdate(this.unreportRoute, data);
    }
}

/**
 * @copyright (c) 2017 Mono Ltd
 * @license MIT
 * @author Mono Ltd
 * @overview
 ***Notes:**
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
 - All end-point objects are transformed by the associated route service.
*/
