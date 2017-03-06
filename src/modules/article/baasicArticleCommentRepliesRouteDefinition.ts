/* globals module */
/**  
 * @module baasicArticleCommentRepliesRouteDefinition  
 * @description Baasic Article Comment Replies Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Comment Replies Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition } from 'common';
import { IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IArticleCommentReply } from 'modules/article/contracts';

@injectable()
export class BaasicArticleCommentRepliesRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }

    /**
     * Parses find route which can be expanded with additional options. Supported items are:
     * - `searchQuery` - A string value used to identify article comment reply resources using the phrase search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain article comment reply subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the article comment reply property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `statuses` - Comma separated list of article comment reply states that specify where search should be done (Allowed states: Approved, Spam, Reported, Flagged and UnApproved).
     * @method 
     * @param options Query resource options object.
     * @example baasicArticleCommentRepliesRouteDefinition.find({ searchQuery: '<search-phrase>' });
     **/
    find(options: IOptions): any {
        return super.baseFind('article-comment-replies/{?searchQuery,statuses,page,rpp,sort,embed,fields}', options);
    }

    /**
     * Parses get route which can be expanded with additional options. Supported items are:
     * - `id` - Id which uniquely identifies article comment reply resource that needs to be retrieved.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method 
     * @example baasicArticleCommentRepliesRouteDefinition.get({ id: '<comment-reply-id>' });
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('article-comment-replies/{id}/{?embed,fields}', id, options)
    }

    /**
     * Parses create article comment reply route; this URI template does not support any additional items.
     * @method
     * @example baasicArticleCommentRepliesRouteDefinition.create(data);
     **/
    create(data: IArticleCommentReply): any {
        return super.baseCreate('article-comment-replies', data);
    }

    update(data: IArticleCommentReply): any {
        return super.baseUpdate('article-comment-replies/{id}', data);
    }

    approve(data: IArticleCommentReply): any {
        return super.baseUpdate('article-comment-replies/{id}/approve', data, undefined, 'comment-approve');
    }

    unapprove(data: IArticleCommentReply): any {
        return super.baseUpdate('article-comment-replies/{id}/unapprove', data, undefined, 'comment-unapprove');
    }

    flag(data: IArticleCommentReply): any {
        return super.baseUpdate('article-comment-replies/{id}/flag', data, undefined, 'comment-flag');
    }

    unflag(data: IArticleCommentReply): any {
        return super.baseUpdate('article-comment-replies/{id}/unflag', data, undefined, 'comment-unflag');
    }

    report(data: IArticleCommentReply): any {
        return super.baseUpdate('article-comment-replies/{id}/report', data, undefined, 'comment-report');
    }

    delete(data: IArticleCommentReply): any {
        return super.baseDelete('article-comment-replies/{id}', data);
    }

    unreport(data: IArticleCommentReply): any {
        return super.baseUpdate('article-comment-replies/{id}/unreport', data, undefined, 'comment-unreport');
    }

    spam(data: IArticleCommentReply): any {
        return super.baseUpdate('article-comment-replies/{id}/spam', data, undefined, 'comment-spam');
    }

    unspam(data: IArticleCommentReply): any {
        return super.baseUpdate('article-comment-replies/{id}/unspam', data, undefined, 'comment-unspam');
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/