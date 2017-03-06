/* globals module */
/**  
 * @module baasicArticleCommentsRouteDefinition  
 * @description Baasic Article Comments Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Comments Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IArticleComment } from 'modules/article/contracts';

@injectable()
export class BaasicArticleCommentsRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }


    /**
     * Parses find route which can be expanded with additional options. Supported items are:
     * - `searchQuery` - A string value used to identify article comment resources using the phrase search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain article comment subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the article comment property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `statuses` - Comma separated list of article comment states that specify where search should be done (Allowed states: Approved, Spam, Reported, Flagged and UnApproved).
     * @method
     * @example baasicArticleCommentsRouteDefinition.find({ searchQuery: '<search-phrase>' });
     **/
    find(options?: IOptions): any {
        return super.baseFind('article-comments/{?searchQuery,statuses,page,rpp,sort,embed,fields}', options);
    }

    /**
     * Parses get route which can be expanded with additional options. Supported items are:
     * - `id` - Id which uniquely identifies article comment resource that needs to be retrieved.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @example baasicArticleCommentsRouteDefinition.get().expand({ id: '<comment-id>' }); 
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('article-comments/{id}/{?embed,fields}', id, options);
    }

    /**
     * Parses create route; this URI template doesnt support any additional options.
     * @method
     * @example baasicArticleCommentsRouteDefinition.create(data);
     **/
    create(data: IArticleComment): any {
        return super.baseCreate('article-comments/', data);
    }

    /**
     * Parses update route; this URI template doesnt support any additional options.
     * @method
     * @example baasicArticleCommentsRouteDefinition.update(data);
     **/
    update(data: IArticleComment): any {
        return super.baseUpdate('article-comments/{id}', data);
    }

    delete(data: IArticleComment): any {
        return super.baseDelete('article-comments/{id}', data);
    }

    approve(data: IArticleComment): any {
        return super.baseUpdate('article-comments/{id}/approve', data, undefined, 'comment-approve');
    }

    unapprove(data: IArticleComment): any {
        return super.baseUpdate('article-comments/{id}/unapprove', data, undefined, 'comment-unapprove');
    }

    flag(data: IArticleComment): any {
        return super.baseUpdate('article-comments/{id}', data, undefined, 'comment-flag');
    }

    unflag(data: IArticleComment): any {
        return super.baseUpdate('article-comments/{id}/unflag', data, undefined, 'comment-unflag');
    }

    report(data: IArticleComment): any {
        return super.baseUpdate('article-comments/{id}/report', data, undefined, 'comment-report');
    }

    unreport(data: IArticleComment): any {
        return super.baseUpdate('article-comments/{id}/unreport', data, undefined, 'comment-unreport')
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/