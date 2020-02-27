/* globals module */
/**
 * @module blogPostRoute
 * @description Baasic Blog Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic blogPost Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IGetRequestOptions } from '../../common/contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';
import { IBlogPost, IBlogPostOptions } from './contracts';

@injectable()
export class BlogPostRoute extends BaseRoute {

    public readonly findRoute: string = 'blog/blog-posts/{?searchQuery,ids,from,to,publishedFrom,publishedTo,url,template,blogPostPostStatusIds,languageIds,blogPostSlugs,tagSlugs,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'blog/blog-posts/{id}/{?embed,fields}';

    public readonly purgeRoute: string = 'blog/blog-posts/purge';

    public readonly createRoute: string = 'blog/blog-posts';

    public readonly updateRoute: string = 'blog/blog-posts/{id}';

    public readonly publishRoute: string = 'blog/blog-posts/{id}/publish';

    public readonly rejectRoute: string = 'blog/blog-posts/{id}/reject';

    public readonly reviewPendingRoute: string = 'blog/blog-posts/{id}/review-pending';

    public readonly unpublishRoute: string = 'blog/blog-posts/{id}/unpublish';

    public readonly archiveRoute: string = 'blog/blog-posts/{id}/archive';

    public readonly draftRoute: string = 'blog/blog-posts/{id}/draft';

    public readonly deleteRoute: string = 'blog/blog-posts/{id}';    

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
     * @example blogPostRoute.find.expand({searchQuery: '<search-phrase>'});
     **/
    find(options?: IBlogPostOptions): string {
        var opt = options || {};
        return super.baseFind(this.findRoute, opt);
    }

    /**
     * Parses get blogPost route which must be expanded with the Id of the previously created blogPost resource in the system. Additional expand supported items are:
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param id blogPost slug or id which uniquely identifies blogPost resource that needs to be retrieved.
     * @param options Options object that contains embed items.
     * @example blogPostRoute.get({id: '<blogPost-id>'});
     **/
    get(id: string, options?: IGetRequestOptions): string {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses publish blog post route which must be expanded with the Id of the previously created blog post resource in the system.
     * @method
     * @param data An blog post object.
     * @example blogPostRoute.publish.expand({id: '<blog-post-id>'});
     **/
    publish(data: IBlogPost): string {
        return super.baseUpdate(this.publishRoute, data);
    }

    /**
     * Parses unpublish blog post route which must be expanded with the Id of the previously created blog post resource in the system.
     * @method
     * @param data An blog post object.
     * @example blogPostRoute.unpublish.expand({id: '<blog-post-id>'});
     **/
    unPublish(data: IBlogPost): string {
        return super.baseUpdate(this.unpublishRoute, data);
    }

    /**
     * Parses draft blog post route which must be expanded with the Id of the previously created blog post resource in the system.
     * @method
     * @param data An blog post object.
     * @example blogPostRoute.draft.expand({id: '<blog-post-id>'});
     **/
    draft(data: IBlogPost): string {
        return super.baseUpdate(this.draftRoute, data);
    }

    /**
     * Parses reject blog post route which must be expanded with the Id of the previously created blog post resource in the system.
     * @method
     * @param data An blog post object.
     * @example blogPostRoute.reject.expand({id: '<blog-post-id>'});
     **/
    reject(data: IBlogPost): string {
        return super.baseUpdate(this.rejectRoute, data);
    }

    /**
     * Parses archive blog post route which must be expanded with the Id of the previously created blog post resource in the system.
     * @method
     * @param data An blog post object.
     * @example blogPostRoute.archive.expand({id: '<blog-post-id>'});
     **/
    archive(data: IBlogPost): string {
        return super.baseUpdate(this.archiveRoute, data);
    }

    /**
     * Parses review pending blog post route which must be expanded with the Id of the previously created blog post resource in the system.
     * @method
     * @param data An blog post object.
     * @example blogPostRoute.reviewPending.expand({id: '<blog-post-id>'});
     **/
    reviewPending(data: IBlogPost): string {
        return super.baseUpdate(this.reviewPendingRoute, data);
    }

    /**
     * Parses purge blogPost route, this URI template doesn't expose any additional properties.
     * @method
     * @example blogPostRoute.purge();
     **/
    purge(): string {
        return super.baseDelete(this.purgeRoute, {});
    }

    /**
     * Parses create blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @example blogPostRoute.create();
     **/
    create(): string {
        return super.baseCreate(this.createRoute, {});
    }

    /**
     * Parses update blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blogPost object that needs to be updated into the system.
     * @example blogPostRoute.update(data);
     **/
    update(data: IBlogPost): string {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delete blogPost route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blogPost object that needs to be removed from the system.
     * @example blogPostRoute.delete(data);
     **/
    delete(data: IBlogPost): string {
        return super.baseDelete(this.deleteRoute, data);
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
