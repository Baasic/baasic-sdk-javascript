/* globals module */
/**
 * @module articleRoute
 * @description Baasic Article Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IGetRequestOptions } from '../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';
import {
    ArticleACLRoute,
    ArticleSubscriptionsRoute,
    ArticleInstanceCommentsRoute,
    ArticleInstanceFilesRoute,
    ArticleInstanceRatingsRoute,
    ArticleInstanceTagsRoute,
    TYPES as articleTypes
} from './';
import { IArticle, IArticleOptions } from './contracts';

@injectable()
export class ArticleRoute extends BaseRoute {

    public readonly findRoute: string = 'articles/{?searchQuery,page,rpp,sort,embed,fields,statuses,tags,startDate,endDate}';

    public readonly getRoute: string = 'articles/{id}/{?embed,fields}';

    public readonly publishRoute: string = 'articles/{id}/publish/';

    public readonly purgeRoute: string = 'articles/purge/';

    public readonly createRoute: string = 'articles';

    public readonly updateRoute: string = 'articles/{id}';

    public readonly deleteRoute: string = 'articles/{id}';

    public readonly archiveRoute: string = 'articles/{id}/archive';

    public readonly restoreRoute: string = 'articles/{id}/restore';

    public readonly unpublishRoute: string = 'articles/{id}/unpublish';

    get subscriptions(): ArticleSubscriptionsRoute {
        return this.articleSubscriptionsRoute;
    }

    get comments(): ArticleInstanceCommentsRoute {
        return this.articleInstanceCommentsRoute;
    }

    get files(): ArticleInstanceFilesRoute {
        return this.articleInstanceFilesRoute;
    }

    get ratings(): ArticleInstanceRatingsRoute {
        return this.articleInstanceRatingsRoute;
    }

    get tags(): ArticleInstanceTagsRoute {
        return this.articleInstanceTagsRoute;
    }

    get acl(): ArticleACLRoute {
        return this.articleACLRoute;
    }

    constructor(
        @inject(articleTypes.ArticleSubscriptionsRoute) protected articleSubscriptionsRoute: ArticleSubscriptionsRoute,
        @inject(articleTypes.ArticleInstanceCommentsRoute) protected articleInstanceCommentsRoute: ArticleInstanceCommentsRoute,
        @inject(articleTypes.ArticleInstanceFilesRoute) protected articleInstanceFilesRoute: ArticleInstanceFilesRoute,
        @inject(articleTypes.ArticleInstanceRatingsRoute) protected articleInstanceRatingsRoute: ArticleInstanceRatingsRoute,
        @inject(articleTypes.ArticleInstanceTagsRoute) protected articleInstanceTagsRoute: ArticleInstanceTagsRoute,
        @inject(articleTypes.ArticleACLRoute) protected articleACLRoute: ArticleACLRoute,
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }


    /**
     * Parses find article route which can be expanded with additional options. Supported items are:
     * - `searchQuery` - A string referencing article properties using the phrase or BQL (Baasic Query Language) search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain article subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the article property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `startDate` - A value used to specify the article creation, publish or archive date date starting from which article resource collection should be returned.
     * - `endDate` - A value used to specify the article creation, publish or archive date until (and including) which article resource collection should be returned.
     * - `statuses` - Comma separated list of article statuses that specify where search should be done (Allowed statuses: Published, Draft and Archived).
     * - `tags` - A value used to restrict the search to article resources with these tags. Multiple tags should be comma separated.
     * @method
     * @param options A promise that is resolved once the find action has been performed.
     * @example articleRoute.find.expand({searchQuery: '<search-phrase>'});
     **/
    find(options?: IArticleOptions): any {
        var opt = options || {};
        (<any>opt).startDate = this.getStartDate(opt);
        (<any>opt).endDate = this.getEndDate(opt);
        return super.baseFind(this.findRoute, opt);
    }

    /**
     * Parses get article route which must be expanded with the Id of the previously created article resource in the system. Additional expand supported items are:
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param id Article slug or id which uniquely identifies article resource that needs to be retrieved.
     * @param options Options object that contains embed items.
     * @example articleRoute.get({id: '<article-id>'});
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses publish article route which must be expanded with the Id of the previously created article resource in the system.
     * @method
     * @param data An article object.
     * @example articleRoute.publish.expand({id: '<article-id>'});
     **/
    publish(data: IArticle): any {
        return super.baseGet(this.publishRoute, data);
    }

    /**
     * Parses purge article route, this URI template doesn't expose any additional properties.
     * @method
     * @example articleRoute.purge();
     **/
    purge(options: Object): any {
        return super.baseCreate(this.purgeRoute, options);
    }

    /**
     * Parses create article route; this URI template doesn't expose any additional properties.
     * @method
     * @example articleRoute.create();
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**
     * Parses update article route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An article object that needs to be updated into the system.
     * @example articleRoute.update(data);
     **/
    update(data: IArticle): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delete article route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An article object that needs to be removed from the system.
     * @example articleRoute.delete(data);
     **/
    delete(data: IArticle): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
     * Parses archive article route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An article object.
     * @example articleRoute.archive(data);
     **/
    archive(data: IArticle): any {
        return super.baseUpdate(this.archiveRoute, data, undefined, 'archive');
    }

    /**
     * Parses restore article route; this URI template doesn't expose any additional properties.
     * @method
     * @example articleRoute.restore(data);
     **/
    restore(data: IArticle): any {
        return super.baseUpdate(this.restoreRoute, data, undefined, 'restore');
    }

    /**
     * Returns a promise that is resolved once the unpublish article action has been performed. This action sets the status of an article from "published" to "draft". This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `articleRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.updateParams(article);
     * let uri = params['model'].links('unpublish').href;
     * ```
     * @method
     * @example // article is a resource previously fetched using get action.
                    articleClient.unpublish(article)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    unpublish(data: IArticle): any {
        return super.baseUpdate(this.unpublishRoute, data, undefined, 'unpublish');
    }

    protected getStartDate(options: any) {
        if (!this.utility.isUndefined(options.startDate) && options.startDate !== null) {
            return options.startDate.toISOString();
        }
        return undefined;
    }

    protected getEndDate(options: any) {
        if (!this.utility.isUndefined(options.endDate) && options.endDate !== null) {
            return options.endDate.toISOString();
        }
        return undefined;
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
