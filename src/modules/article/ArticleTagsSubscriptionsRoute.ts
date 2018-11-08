/* globals module */
/**  
 * @module articleTagsSubscriptionsRoute  
 * @description Baasic Article Tags Subscriptions Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Tags Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';
import { IArticleTag } from './contracts';

@injectable()
export class ArticleTagsSubscriptionsRoute extends BaseRoute {

    public readonly subscribeRoute: string = 'article-tags/{id}/subscriptions';

    public readonly isSubscribedRoute: string = 'article-tags/{id}/subscriptions/{subscriberId}';

    public readonly unSubscribeRoute: string = 'article-tags/{id}/subscriptions';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                     
     * Parses subscribe route which must be expanded with id of the tag.                     
     * @method
     * @param tag article tag object.
     * @param data The subscribe information.              
     * @example articleTagsSubscriptionsRoute.subscribe( {id: '<tag-id>'} );                       
     **/
    subscribe(tag: IArticleTag, data: any): any {
        let params = this.utility.extend(tag, data);
        return super.baseCreate(this.subscribeRoute, params);
    }

    /**                      
     * Parses isSubscribed route which must be expanded with subscriber id and the id of the tag.                      
     * @method
     * @param tag Article tag object.
     * @param data The subscriber identifier.                     
     * @example articleSubscriptionsRoute.isSubscribed({ id: '<tag-id>', subscriberId: '<subscriber-id>' });                       
     **/
    isSubscribed(tag: IArticleTag, data: any): any {
        let params = this.utility.extend(tag, data);
        return super.baseCreate(this.isSubscribedRoute, params);
    }

    /**  
     * Parses unSubscribe route which must be expanded with the id of the article.                     
     * @method
     * @param tag Article tag object.
     * @param data The unsubscribe information.                    
     * @example articleUnSubscribeRoute.unSubscribe({id: '<tag-id>'});                                                 
     **/
    unSubscribe(tag: IArticleTag, data: any): any {
        let params = this.utility.extend(tag, data);
        return super.baseCreate(this.unSubscribeRoute, params);
    }

    subscribeParams(tag: IArticleTag, data: any): any {
        return this.utility.extend(tag, data);
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
- All end-point objects are transformed by the associated route service. 
*/