/* globals module */
/**  
 * @module articleInstanceCommentsRoute  
 * @description Baasic Article Instance Comments Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Instance Comments Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../../common';
import { IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';
import { ArticleInstanceCommentRepliesRoute, TYPES as articleTypes } from '../';
import { IArticle, IArticleComment } from '../contracts';

@injectable()
export class ArticleInstanceCommentsRoute extends BaseRoute {

    public readonly findRoute: string = 'articles/{articleId}/comments/{?searchQuery,statuses,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'articles/{articleId}/comments/{id}/{?embed,fields}';

    public readonly createRoute: string = 'articles/{articleId}/comments/';

    public readonly updateRoute: string = 'articles/{articleId}/comments/{id}';

    public readonly deleteRoute: string = 'articles/{articleId}/comments/{id}';

    public readonly deleteAllRoute: string = 'articles/{articleId}/comments/{id}';

    public readonly approveRoute: string = 'articles/{articleId}/comments/{id}/approve';

    public readonly unapproveRoute: string = 'articles/{articleId}/comments/{id}/unapprove';

    public readonly flagRoute: string = 'articles/{articleId}/comments/{id}/flag';

    public readonly unflagRoute: string = 'articles/{articleId}/comments/{id}/unflag';

    public readonly reportRoute: string = 'articles/{articleId}/comments/{id}/report';

    public readonly unreportRoute: string = 'articles/{articleId}/comments/{id}/unreport';

    public readonly spamRoute: string = 'articles/{articleId}/comments/{id}/spam';

    public readonly unspamRoute: string = 'articles/{articleId}/comments/{id}/unspam';
    
    get replies(): ArticleInstanceCommentRepliesRoute {
        return this.articleInstanceCommentRepliesRoute;
    }

    constructor(
        @inject(articleTypes.ArticleInstanceCommentRepliesRoute) protected articleInstanceCommentRepliesRoute: ArticleInstanceCommentRepliesRoute,
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
     * @example articleInstanceCommentsRoute.find({ searchQuery: '<search-phrase>' });
     **/
    find(articleId: string, options?: IOptions): any {
        let params = this.modelMapper.findParams(options);
        params.articleId = articleId;
        return super.baseCreate(this.findRoute, params);
    }

    /**
     * Parses get route which can be expanded with additional options. Supported items are:
     * - `id` - Id which uniquely identifies article comment resource that needs to be retrieved.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param articleId Article slug or id which uniquely identifies article whose comment resource needs to be retrieved.
     * @param commentId Id which identifies article comment resource that needs to be retrieved.
     * @param options Options object that contains embed data.
     * @example articleInstanceCommentsRoute.get().expand({ id: '<comment-id>' }); 
     **/
    get(articleId: string, commentId?: string, options?: IGetRequestOptions): any {
        let params = this.utility.extend({}, options);
        params.articleId = articleId;
        params.id = commentId;
        return super.baseGet(this.getRoute, params);
    }

    /**
     * Parses create route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object that needs to be inserted into the system.
     * @example articleInstanceCommentsRoute.create(data);
     **/
    create(data: IArticleComment): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**
     * Parses update route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comments object used to update specified article comment resource.
     * @example articleInstanceCommentsRoute.update(data);
     **/
    update(data: IArticleComment): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delete route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comments object used to delete specified article comment resource.
     * @example articleInstanceCommentsRoute.delete(data);
     **/
    delete(data: IArticleComment): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
     * Parses delete all route; this URI template doesnt support any additional options.
     * @method
     * @param data An article object used to delete specified article comment resource.
     * @example articleInstanceCommentsRoute.deleteAll(data);
     **/
    deleteAll(data: IArticle): any {
        return super.baseDelete(this.deleteAllRoute, data, undefined, 'delete-comments-by-article');
    }

    /**
     * Parses approve route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example articleInstanceCommentsRoute.approve(data);
     **/
    approve(data: IArticleComment): any {
        return super.baseUpdate(this.approveRoute, data, undefined, 'comment-approve');
    }

    /**
     * Parses unapprove route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example articleInstanceCommentsRoute.unapprove(data);
     **/
    unapprove(data: IArticleComment): any {
        return super.baseUpdate(this.unapproveRoute, data, undefined, 'comment-unapprove');
    }

    /**
     * Parses flag route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example articleInstanceCommentsRoute.flag(data);
     **/
    flag(data: IArticleComment): any {
        return super.baseUpdate(this.flagRoute, data, undefined, 'comment-flag');
    }

    /**
     * Parses unflag route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example articleInstanceCommentsRoute.unflag(data);
     **/
    unflag(data: IArticleComment): any {
        return super.baseUpdate(this.unflagRoute, data, undefined, 'comment-unflag');
    }

    /**
     * Parses report route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example articleInstanceCommentsRoute.report(data);
     **/
    report(data: IArticleComment): any {
        return super.baseUpdate(this.reportRoute, data, undefined, 'comment-report');
    }

    /**
     * Parses unreport route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example articleInstanceCommentsRoute.unreport(data);
     **/
    unreport(data: IArticleComment): any {
        return super.baseUpdate(this.unreportRoute, data, undefined, 'comment-unreport')
    }

    /**
     * Parses spam route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example articleInstanceCommentsRoute.spam(data);
     **/
    spam(data: IArticleComment): any {
        return super.baseUpdate(this.spamRoute, data, undefined, 'comment-spam');
    }

    /**
     * Parses unspam route; this URI template doesnt support any additional options.
     * @method
     * @param data An article comment object.
     * @example articleInstanceCommentsRoute.unspam(data);
     **/
    unspam(data: IArticleComment): any {
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