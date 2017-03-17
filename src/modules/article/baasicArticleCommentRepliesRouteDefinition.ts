/* globals module */
/**  
 * @module baasicArticleCommentRepliesRouteDefinition  
 * @description Baasic Article Comment Replies Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Comment Replies Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRouteDefinition } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IArticleCommentReply } from 'modules/article/contracts';

@injectable()
export class ArticleCommentRepliesRouteDefinition extends BaseRouteDefinition {

    public readonly findRoute: string = 'article-comment-replies/{?searchQuery,statuses,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'article-comment-replies/{id}/{?embed,fields}';

    public readonly createRoute: string = 'article-comment-replies';

    public readonly updateRoute: string = 'article-comment-replies/{id}';

    public readonly deleteRoute: string = 'article-comment-replies/{id}';

    public readonly approveRoute: string = 'article-comment-replies/{id}/approve';

    public readonly unapproveRoute: string  = 'article-comment-replies/{id}/unapprove';

    public readonly flagRoute: string = 'article-comment-replies/{id}/flag';

    public readonly unflagRoute: string = 'article-comment-replies/{id}/unflag';

    public readonly reportRoute: string  = 'article-comment-replies/{id}/report';

    public readonly unreportRoute: string = 'article-comment-replies/{id}/unreport';

    public readonly spamRoute: string = 'article-comment-replies/{id}/spam';

    public readonly unspamRoute: string = 'article-comment-replies/{id}/unspam';
    
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
        return super.baseFind(this.findRoute, options);
    }

    /**
     * Parses get route which can be expanded with additional options. Supported items are:
     * - `id` - Id which uniquely identifies article comment reply resource that needs to be retrieved.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param id Id which uniquely identifies article comment reply resource that needs to be retrieved.
     * @param options Options object that contains embed data. 
     * @example baasicArticleCommentRepliesRouteDefinition.get({ id: '<comment-reply-id>' });
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options)
    }

    /**
     * Parses create article comment reply route; this URI template does not support any additional items.
     * @method
     * @param data An article comment reply object that needs to be inserted into the system.
     * @example baasicArticleCommentRepliesRouteDefinition.create(data);
     **/
    create(data: IArticleCommentReply): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**
     * Parses update article comment reply route; this URI template does not support any additional items.
     * @method
     * @param data An Article Comments Reply object used to update specified article comment reply resource.
     * @example baasicArticleCommentRepliesRouteDefinition.update(data);
     **/
    update(data: IArticleCommentReply): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
    * Parses delete article comment reply route; this URI template does not support any additional items.
    * @method
    * @param data Article Comment Reply object.
    * @example baasicArticleCommentRepliesRouteDefinition.delete(data);
    **/
    delete(data: IArticleCommentReply): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
     * Parses approve article comment reply route; this URI template does not support any additional items.
     * @method
     * @param data Article Comment Reply object.
     * @example baasicArticleCommentRepliesRouteDefinition.approve(data);
     **/
    approve(data: IArticleCommentReply): any {
        return super.baseUpdate(this.approveRoute, data, undefined, 'comment-approve');
    }

    /**
    * Parses unapprove article comment reply route; this URI template does not support any additional items.
    * @method
    * @param data Article Comment Reply object.
    * @example baasicArticleCommentRepliesRouteDefinition.unapprove(data);
    **/
    unapprove(data: IArticleCommentReply): any {
        return super.baseUpdate(this.unapproveRoute, data, undefined, 'comment-unapprove');
    }

    /**
    * Parses flag article comment reply route; this URI template does not support any additional items.
    * @method
    * @param data Article Comment Reply object.
    * @example baasicArticleCommentRepliesRouteDefinition.flag(data);
    **/
    flag(data: IArticleCommentReply): any {
        return super.baseUpdate(this.flagRoute, data, undefined, 'comment-flag');
    }

    /**
    * Parses unflag article comment reply route; this URI template does not support any additional items.
    * @method
    * @param data Article Comment Reply object.
    * @example baasicArticleCommentRepliesRouteDefinition.unflag(data);
    **/
    unflag(data: IArticleCommentReply): any {
        return super.baseUpdate(this.unflagRoute, data, undefined, 'comment-unflag');
    }

    /**
    * Parses report article comment reply route; this URI template does not support any additional items.
    * @method
    * @param data Article Comment Reply object.
    * @example baasicArticleCommentRepliesRouteDefinition.report(data);
    **/
    report(data: IArticleCommentReply): any {
        return super.baseUpdate(this.reportRoute, data, undefined, 'comment-report');
    }

    /**
    * Parses unreport article comment reply route; this URI template does not support any additional items.
    * @method
    * @param data Article Comment Reply object.
    * @example baasicArticleCommentRepliesRouteDefinition.unreport(data);
    **/
    unreport(data: IArticleCommentReply): any {
        return super.baseUpdate(this.unreportRoute, data, undefined, 'comment-unreport');
    }

    /**
    * Parses spam article comment reply route; this URI template does not support any additional items.
    * @method
    * @param data Article Comment Reply object.
    * @example baasicArticleCommentRepliesRouteDefinition.spam(data);
    **/
    spam(data: IArticleCommentReply): any {
        return super.baseUpdate(this.spamRoute, data, undefined, 'comment-spam');
    }

    /**
    * Parses unspam article comment reply route; this URI template does not support any additional items.
    * @method
    * @param data Article Comment Reply object.
    * @example baasicArticleCommentRepliesRouteDefinition.unspam(data);
    **/
    unspam(data: IArticleCommentReply): any {
        return super.baseUpdate(this.unspamRoute, data, undefined, 'comment-unspam');
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/