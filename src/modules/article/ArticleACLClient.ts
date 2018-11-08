/* globals module */
/**  
 * @module articleACLClient  
 * @description  Article ACL Client provides an easy way to consume  Articles REST API end-points. In order to obtain needed routes `articleACLClient` uses `articleACLRoute`. 
 */

import { injectable, inject } from "inversify";
import { IACLPolicy, IACLOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { ArticleACLRoute, TYPES as articleTypes } from './';

@injectable()
export class ArticleACLClient {

    get routeDefinition(): ArticleACLRoute {
        return this.articleACLRoute;
    }

    constructor(
        @inject(articleTypes.ArticleACLRoute) protected articleACLRoute: ArticleACLRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified article resource.                     
     * @method                         
     * @example articleACLClient.get({id: '<article-id>'})
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                     
     **/
    get(options: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.apiClient.get<IACLPolicy[]>(this.routeDefinition.get(options));
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
                articleACLClient.update(options)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    update(options: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.apiClient.put<IACLPolicy[]>(this.routeDefinition.update(options), this.routeDefinition.updateParams(options));
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
     * @example articleACLClient.removeByUser('<article-id>', '<access-action>', '<username>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    removeByUser(articleId: string, action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.articleACLRoute.deleteByUser(articleId, action, user, data));
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
     * @example articleACLClient.removeByRole('<article-id>', '<access-action>', '<role-name>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    }); 				    
     **/
    removeByRole(articleId: string, action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.articleACLRoute.deleteByRole(articleId, action, role, data));
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