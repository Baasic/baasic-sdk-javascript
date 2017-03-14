/* globals module */
/**  
 * @module baasicArticleACLClient  
 * @description Baasic Article ACL Client provides an easy way to consume Baasic Articles REST API end-points. In order to obtain needed routes `baasicArticleACLClient` uses `baasicArticleACLRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IACLPolicy, IACLOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { BaasicArticleACLRouteDefinition, TYPES as articleTypes } from 'modules/article';

@injectable()
export class BaasicArticleACLClient {

    get routeDefinition(): BaasicArticleACLRouteDefinition {
        return this.baasicArticleACLRouteDefinition;
    }

    constructor(
        @inject(articleTypes.BaasicArticleACLRouteDefinition) protected baasicArticleACLRouteDefinition: BaasicArticleACLRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified article resource.                     
     * @method                         
     * @example baasicArticleACLClient.get({id: '<article-id>'})
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                     
     **/
    get(options: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.baasicApiClient.get(this.baasicArticleACLRouteDefinition.get(options));
    }

    /**                     
     * Returns a promise that is resolved once the update acl action has been performed, this action creates new ACL policy for the specified article resource.                     
     * @method
     * @param options An ACL policy object that needs to be updated in the system. This object specifies parameters necessary for establishing user and/or role set of rights.
     * @returns A promise that is resolved once the update acl action has been performed.
     * @example let options = {id : '<article-id>'}; 
                let aclObj =  {  
                    actionId: '<action-id'>,  
                    roleId: '<roleId>',  
                    userId: '<userId>' 
                }; 
                options[baasicConstants.modelPropertyName] = aclObj; 
                baasicArticleACLClient.update(options)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    update(options: IACLOptions): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicArticleACLRouteDefinition.get(options), this.baasicArticleACLRouteDefinition.updateParams(options));
    }

    /**                     
     * Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and article resource.                     
     * @method
     * @param articleId Article id which uniquely identifies article resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and article resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"
     * @param user A value that uniquely identifies user for which ACL policy needs to be removed.
     * @param data An ACL policy object that needs to be updated in the system. 
     * @returns A promise that is resolved once the removeByUser action has been performed.                        
     * @example baasicArticleACLClient.removeByUser('<article-id>', '<access-action>', '<username>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    removeByUser(articleId: string, action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleACLRouteDefinition.deleteByUser(articleId, action, user, data));
    }

    /**                     
     * Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and article resource.                     
     * @method 
     * @param articleId Article id which uniquely identifies article resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and article resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"
     * @param role A value that uniquely identifies role for which ACL policy needs to be removed.
     * @param data An ACL policy object that needs to be updated in the system. 
     * @returns A promise that is resolved once the removeByRole action has been performed.                     
     * @example baasicArticleACLClient.removeByRole('<article-id>', '<access-action>', '<role-name>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    removeByRole(articleId: string, action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicArticleACLRouteDefinition.deleteByRole(articleId, action, role, data));
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */