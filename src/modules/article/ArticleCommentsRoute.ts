/* globals module */
/**  
 * @module articleCommentsRoute  
 * @description Baasic Article Comments Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Comments Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';
import { IArticleComment } from './contracts';

@injectable()
export class ArticleCommentsRoute extends BaseRoute {

    public readonly findRoute: string = 'article-comments/{?searchQuery,statuses,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'article-comments/{id}/{?embed,fields}';

    public readonly createRoute: string = 'article-comments/';

    public readonly updateRoute: string = 'article-comments/{id}';

    public readonly deleteRoute: string = 'article-comments/{id}';

    public readonly approveRoute: string = 'article-comments/{id}/approve';

    public readonly unapproveRoute: string = 'article-comments/{id}/unapprove';

    public readonly flagRoute: string = 'article-comments/{id}';

    public readonly unflagRoute: string = 'article-comments/{id}/unflag';

    public readonly reportRoute: string = 'article-comments/{id}/report';

    public readonly unreportRoute: string = 'article-comments/{id}/unreport';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }


    /**
     * Parses find route which can be expanded with additional options. Supported items are:
     * - `searchQuery` - A string value used to identify article comment resources using the phrase search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain article comment subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the article comment property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `statuses` - Comma separated list of article comment states that specify where search should be done (Allowed states: Approved, Spam, Reported, Flagged and UnApproved).
     * @method
     * @param options Query resource options object.
     * @example articleCommentsRoute.find({ searchQuery: '<search-phrase>' });
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**
     * Parses get route which can be expanded with additional options. Supported items are:
     * - `id` - Id which uniquely identifies article comment resource that needs to be retrieved.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param id Id which uniquely identifies article comment resource that needs to be retrieved.
     * @param options Options object that contains embed data.
     * @example articleCommentsRoute.get().expand({ id: '<comment-id>' }); 
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses create route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object that needs to be inserted into the system.
     * @example articleCommentsRoute.create(data);
     **/
    create(data: IArticleComment): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**
     * Parses update route; this URI template doesnt support any additional options.
     * @method An article comment object used to update specified article comment resource.
     * @example articleCommentsRoute.update(data);
     **/
    update(data: IArticleComment): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delete route; this URI template doesnt support any additional options.
     * @method An article comment object used to delete specified article comment resource.
     * @example articleCommentsRoute.delete(data);
     **/
    delete(data: IArticleComment): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
    * Parses approve route; this URI template doesnt support any additional options.
    * @method An article comment object.
    * @example articleCommentsRoute.approve(data);
    **/
    approve(data: IArticleComment): any {
        return super.baseUpdate(this.approveRoute, data, undefined, 'comment-approve');
    }

    /**
    * Parses unapprove route; this URI template doesnt support any additional options.
    * @method An article comment object.
    * @example articleCommentsRoute.unapprove(data);
    **/
    unapprove(data: IArticleComment): any {
        return super.baseUpdate(this.unapproveRoute, data, undefined, 'comment-unapprove');
    }

    /**
    * Parses flag route; this URI template doesnt support any additional options.
    * @method An article comment object.
    * @example articleCommentsRoute.flag(data);
    **/
    flag(data: IArticleComment): any {
        return super.baseUpdate(this.flagRoute, data, undefined, 'comment-flag');
    }

    /**
    * Parses unflag route; this URI template doesnt support any additional options.
    * @method An article comment object.
    * @example articleCommentsRoute.unflag(data);
    **/
    unflag(data: IArticleComment): any {
        return super.baseUpdate(this.unflagRoute, data, undefined, 'comment-unflag');
    }

    /**
    * Parses report route; this URI template doesnt support any additional options.
    * @method An article comment object.
    * @example articleCommentsRoute.report(data);
    **/
    report(data: IArticleComment): any {
        return super.baseUpdate(this.reportRoute, data, undefined, 'comment-report');
    }

    /**
    * Parses unreport route; this URI template doesnt support any additional options.
    * @method An article comment object.
    * @example articleCommentsRoute.unreport(data);
    **/
    unreport(data: IArticleComment): any {
        return super.baseUpdate(this.unreportRoute, data, undefined, 'comment-unreport')
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/