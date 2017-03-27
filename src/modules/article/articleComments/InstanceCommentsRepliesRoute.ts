/* globals module */
/**  
 * @module articleInstanceCommentRepliesRoute  
 * @description Baasic Article Instance Comment Replies Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Instance Comment Replies Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../../common';
import { IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IArticle, IArticleCommentReply } from '../contracts';

@injectable()
export class ArticleInstanceCommentRepliesRoute extends BaseRoute {

    public readonly findRoute: string = 'articles/{articleId}/comments/{commentId}/replies/{?searchQuery,statuses,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'articles/{articleId}/comments/{commentId}/replies/{id}/{?embed,fields}';

    public readonly createRoute: string = 'articles/{articleId}/comments/{commentId}/replies';

    public readonly updateRoute: string = 'articles/{articleId}/comments/{id}';

    public readonly approveRoute: string = 'articles/{articleId}/comments/{commentId}/replies/{id}/approve';

    public readonly unapproveRoute: string = '/articles/{articleId}/comments/{commentId}/replies/{id}/unapprove';

    public readonly flagRoute: string = 'articles/{articleId}/comments/{commentId}/replies/{id}/flag';

    public readonly unflagRoute: string = 'articles/{articleId}/comments/{commentId}/replies/{id}/unflag';

    public readonly reportRoute: string = 'articles/{articleId}/comments/{commentId}/replies/{id}/report';

    public readonly deleteRoute: string = 'articles/{articleId}/comments/{id}';

    public readonly deleteAllRoute: string = 'articles/{articleId}/comments';

    public readonly unreportRoute: string = 'articles/{articleId}/comments/{commentId}/replies/{id}/unreport';

    public readonly spamRoute: string = 'articles/{articleId}/comments/{commentId}/replies/{id}/spam';

    public readonly unspamRoute: string = '/articles/{articleId}/comments/{commentId}/replies/{id}/unspam';

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
     * @param articleId Article id which uniquely identifies article whose comment reply resources need to be retrieved.
     * @param commentId Comment id which uniquely identifies comment whose reply resources need to be retrieved.
     * @param options Query resource options.
     * @example articleCommentRepliesRoute.find({ searchQuery: '<search-phrase>' });
     **/
    find(articleId: string, commentId: string, options?: IOptions): any {
        let params = this.modelMapper.findParams(options);
        params.articleId = articleId;
        params.commentId = commentId;
        return super.baseFind(this.findRoute, options);
    }

    /**
     * Parses get route which can be expanded with additional options. Supported items are:
     * - `id` - Id which uniquely identifies article comment reply resource that needs to be retrieved.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method 
     * @example articleCommentRepliesRoute.get({ id: '<comment-reply-id>' });
     **/
    get(articleId: string, commentId: string, replyId: string, options?: IGetRequestOptions): any {
        let params = this.utility.extend({}, options);
        params.articleId = articleId;
        params.commentId = commentId;
        return super.baseGet(this.getRoute, replyId, params);
    }

    /**
     * Parses create article comment reply route; this URI template does not support any additional items.
     * @method
     * @example articleCommentRepliesRoute.create(data);
     **/
    create(articleId: string, data: IArticleCommentReply): any {
        let params = this.utility.extend({}, data);
        params.articleId = articleId;
        return super.baseCreate(this.createRoute, params);
    }

    update(data: IArticleCommentReply): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    approve(data: IArticleCommentReply): any {
        return super.baseUpdate(this.approveRoute, data, undefined, 'comment-approve');
    }

    unapprove(data: IArticleCommentReply): any {
        return super.baseUpdate(this.unapproveRoute, data, undefined, 'comment-unapprove');
    }

    flag(data: IArticleCommentReply): any {
        return super.baseUpdate(this.flagRoute, data, undefined, 'comment-flag');
    }

    unflag(data: IArticleCommentReply): any {
        return super.baseUpdate(this.unflagRoute, data, undefined, 'comment-unflag');
    }

    report(data: IArticleCommentReply): any {
        return super.baseUpdate(this.reportRoute, data, undefined, 'comment-report');
    }

    delete(data: IArticleCommentReply): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    deleteAll(data: IArticle): any {
        return super.baseUpdate(this.deleteAllRoute, data, undefined, 'delete-comments-by-article');
    }

    unreport(data: IArticleCommentReply): any {
        return super.baseUpdate(this.unreportRoute, data, undefined, 'comment-unreport');
    }

    spam(data: IArticleCommentReply): any {
        return super.baseUpdate(this.spamRoute, data, undefined, 'comment-spam');
    }

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