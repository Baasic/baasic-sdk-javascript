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
     * @param articleId Article slug or id which uniquely identifies article whose comment resources need to be retrieved.
     * @param options Query resource options object.
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
     * @param articleId Article slug or id which uniquely identifies article whose comment resource needs to be retrieved.
     * @param commentId Id which identifies article comment resource that needs to be retrieved.
     * @param options Options object that contains embed data.
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
     * @param data An article comment object that needs to be inserted into the system.
     * @example baasicArticleInstanceCommentsRouteDefinition.create(data);
     **/
    create(data: IArticleComment): any {
        return super.baseCreate('articles/{articleId}/comments/', data);
    }

    /**
     * Parses update route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comments object used to update specified article comment resource.
     * @example baasicArticleInstanceCommentsRouteDefinition.update(data);
     **/
    update(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}', data);
    }

    /**
     * Parses delete route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comments object used to delete specified article comment resource.
     * @example baasicArticleInstanceCommentsRouteDefinition.delete(data);
     **/
    delete(data: IArticleComment): any {
        return super.baseDelete('articles/{articleId}/comments/{id}', data);
    }

    /**
     * Parses delete all route; this URI template doesnt support any additional options.
     * @method
     * @param data An article object used to delete specified article comment resource.
     * @example baasicArticleInstanceCommentsRouteDefinition.deleteAll(data);
     **/
    deleteAll(data: IArticle): any {
        return super.baseDelete('articles/{articleId}/comments/{id}', data, undefined, 'delete-comments-by-article');
    }

    /**
     * Parses approve route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example baasicArticleInstanceCommentsRouteDefinition.approve(data);
     **/
    approve(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/approve', data, undefined, 'comment-approve');
    }

    /**
     * Parses unapprove route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example baasicArticleInstanceCommentsRouteDefinition.unapprove(data);
     **/
    unapprove(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/unapprove', data, undefined, 'comment-unapprove');
    }

    /**
     * Parses flag route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example baasicArticleInstanceCommentsRouteDefinition.flag(data);
     **/
    flag(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/flag', data, undefined, 'comment-flag');
    }

    /**
     * Parses unflag route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example baasicArticleInstanceCommentsRouteDefinition.unflag(data);
     **/
    unflag(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/unflag', data, undefined, 'comment-unflag');
    }

    /**
     * Parses report route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example baasicArticleInstanceCommentsRouteDefinition.report(data);
     **/
    report(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/report', data, undefined, 'comment-report');
    }

    /**
     * Parses unreport route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example baasicArticleInstanceCommentsRouteDefinition.unreport(data);
     **/
    unreport(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/unreport', data, undefined, 'comment-unreport')
    }

    /**
     * Parses spam route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example baasicArticleInstanceCommentsRouteDefinition.spam(data);
     **/
    spam(data: IArticleComment): any {
        return super.baseUpdate('articles/{articleId}/comments/{id}/spam', data, undefined, 'comment-spam');
    }

    /**
     * Parses unspam route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example baasicArticleInstanceCommentsRouteDefinition.unspam(data);
     **/
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