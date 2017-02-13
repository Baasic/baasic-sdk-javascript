/* globals module */ 
/**  
 * @module baasicArticleCommentsRouteDefinition  
 * @description Baasic Article Comments Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Comments Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { BaasicBaseRouteDefinition } from '../baasicBaseRouteDefinition';

export class BaasicArticleCommentsRouteDefinition extends BaasicBaseRouteDefinition {
    
    /**
     * Parses find route which can be expanded with additional options. Supported items are:
     * - `searchQuery` - A string value used to identify article comment resources using the phrase search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain article comment subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the article comment property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `statuses` - Comma separated list of article comment states that specify where search should be done (Allowed states: Approved, Spam, Reported, Flagged and UnApproved).
     * @method
     * @example baasicArticleCommentsRouteDefinition.find().expand({ searchQuery: '<search-phrase>' });
     **/ 
    find(): any {
        return this.baasicUriTemplateProcessor.parse('article-comments/{?searchQuery,statuses,page,rpp,sort,embed,fields}');
    }

     /**
      * Parses get route which can be expanded with additional options. Supported items are:
      * - `id` - Id which uniquely identifies article comment resource that needs to be retrieved.
      * - `embed` - Comma separated list of resources to be contained within the current representation.
      * @method
      * @example baasicArticleCommentsRouteDefinition.get().expand({ id: '<comment-id>' }); 
      **/ 
    get(): any {
        return this.baasicUriTemplateProcessor.parse('article-comments/{id}/{?embed,fields}');
    }

    /**
     * Parses create route; this URI template doesnt support any additional options.
     * @method
     * @example baasicArticleCommentsRouteDefinition.create().expand({});
     **/ 
    create(): any {
        return this.baasicUriTemplateProcessor.parse('article-comments/');
    }

    approve(params: any): any {
        if ('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('comment-approve').href;
        } else {
            // return json;
        }
    }

    unapprove(params: any): any {
        if ('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('comment-unapprove').href;
        } else {
            // return json;
        }
    }
    
    flag(params: any): any {
        if ('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('comment-flag').href;
        } else {
            // return json;
        }
    }

    unflag(params: any): any {
        if ('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('comment-unflag').href;
        } else {
            // return json;
        }
    }

    report(params: any): any {
        if ('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('comment-report').href;
        } else {
            // return json;
        }
    }

    unreport(params: any): any {
        if ('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('comment-unreport').href;
        } else {
            // return json;
        }
    }

    /**
     * Parses and expands URI templates based on [RFC6570](http://tools.ietf.org/html/rfc6570) specifications. For more information please visit the project [GitHub](https://github.com/Baasic/uritemplate-js) page.
     * @method 
     * @example baasicArticleCommentsRouteDefinition.parse('<route>/{?embed,fields,options}').expand({embed: '<embedded-resource>'} );
     **/				
    parse(link: string): any {
        return super.parse(link);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/