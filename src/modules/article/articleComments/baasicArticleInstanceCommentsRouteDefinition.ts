/* globals module */
/**  
 * @module baasicArticleInstanceCommentsRouteDefinition  
 * @description Baasic Article Instance Comments Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Instance Comments Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { BaasicArticleInstanceCommentRepliesRouteDefinition, TYPES as articleTypes } from 'modules/article';
import { IArticle, IArticleComment } from 'modules/article/contracts';

@injectable()
export class BaasicArticleInstanceCommentsRouteDefinition extends BaasicBaseRouteDefinition {

    get replies(): BaasicArticleInstanceCommentRepliesRouteDefinition {
        return this.baasicArticleInstanceCommentRepliesRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleInstanceCommentRepliesRouteDefinition) protected baasicArticleInstanceCommentRepliesRouteDefinition: BaasicArticleInstanceCommentRepliesRouteDefinition,
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
     * @example baasicArticleInstanceCommentsRouteDefinition.find({ searchQuery: '<search-phrase>' });
     **/
    find(articleId: string, options?: IOptions): any {
        let params = this.modelMapper.findParams(options);
        params.articleId = articleId;
        return super.baseCreate('articles/{articleId}/comments/{?searchQuery,statuses,page,rpp,sort,embed,fields}', params);
    }

    /**
     * Parses get route which can be expanded with additional options. Supported items are:
     * - `id` - Id which uniquely identifies article comment resource that needs to be retrieved.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @example baasicArticleInstanceCommentsRouteDefinition.get().expand({ id: '<comment-id>' }); 
     **/
    get(articleId: string, commentId?: string, options?: IGetRequestOptions): any {
        let params = this.utility.extend({}, options);
        params.articleId = articleId;
        params.id = commentId;
        return super.baseGet('articles/{articleId}/comments/{id}/{?embed,fields}', params);
    }

    /**
     * Parses create route; this URI template doesnt support any additional options.
     * @method
     * @example baasicArticleInstanceCommentsRouteDefinition.create(data);
     **/
    create(data: IArticleComment): any {
        return super.baseCreate('articles/{articleId}/comments/', data);
    }

    /**
     * Parses update route; this URI template doesnt support any additional options.
     * @method
     * @example baasicArticleInstanceCommentsRouteDefinition.update(data);
     **/
    update(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}', data);
    }

    delete(data: IArticleComment): any {
        return super.baseDelete('articles/{articleId}/comments/{id}', data);
    }

    deleteAll(data: IArticle): any {
        return super.baseDelete('articles/{articleId}/comments/{id}', data, undefined, 'delete-comments-by-article');
    }

    approve(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/approve', data, undefined, 'comment-approve');
    }

    unapprove(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/unapprove', data, undefined, 'comment-unapprove');
    }

    flag(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/flag', data, undefined, 'comment-flag');
    }

    unflag(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/unflag', data, undefined, 'comment-unflag');
    }

    report(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/report', data, undefined, 'comment-report');
    }

    unreport(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/unreport', data, undefined, 'comment-unreport')
    }

    spam(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/spam', data, undefined, 'comment-spam');
    }

    unspam(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/unspam', data, undefined, 'comment-unspam');
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/