/* globals module */
/**  
 * @module organizationClient  
 * @description  Organization Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Organization Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { OrganizationBatchClient, OrganizationRoute, TYPES as userProfileTypes } from './';
import { IOrganization } from './contracts';

@injectable()
export class OrganizationClient {

    get routeDefinition(): OrganizationRoute {
        return this.organizationRoute;
    }

    get batch(): OrganizationBatchClient {
        return this.organizationBatchClient;
    }

    constructor(
        @inject(userProfileTypes.OrganizationRoute) protected organizationRoute: OrganizationRoute,
        @inject(userProfileTypes.OrganizationBatchClient) protected organizationBatchClient: OrganizationBatchClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of organization resources matching the given criteria.                  
     * @method
     * @param options Query resource options object. 
     * @returns A promise that is resolved once the find action has been performed.                      
     * @example organizationClient.find({   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',   
                    search : '<search-phrase>' 
                })
                .then(function (collection) {   
                    // perform success action here 
                }, 
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                    
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IOrganization>>> {
        return this.apiClient.get<IQueryModel<IOrganization>>(this.routeDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the organization resource.                 
     * @method
     * @param id Organization id which uniquely identifies resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                       
     * @example organizationClient.get(id, options)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IOrganization>> {
        return this.apiClient.get<IOrganization>(this.organizationRoute.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create organization action has been performed; this action creates a new organization resource.                  
     * @method
     * @param data An organization object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create organization action has been performed.                          
     * @example organizationClient.create({   
                    description : '<description>',   
                    name : '<name>',   
                    slug: '<slug>' 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                 
     **/
    create(data: IOrganization): PromiseLike<IHttpResponse<IOrganization>> {
        return this.apiClient.post<IOrganization>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update organization action has been performed; this action updates an organization resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `organizationRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(organization); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data An organization object used to update specified organization resource.
     * @returns A promise that is resolved once the update organization action has been performed.                         
     * @example // organization is a resource previously fetched using get action. 
                    organization.description = '<description>'; 
                    organizationClient.update(organization)
                        .then(function (data) {   
                            // perform success action here 
                        }, 
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				        
     **/
    update(data: IOrganization): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove an organization resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `organizationRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(organization); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method
     * @param data An organization object used to delete specified organization resource.
     * @returns A promise that is resolved once the remove action has been performed.                         
     * @example // organization is a resource previously fetched using get action.				 
                       organizationClient.remove(organization)
                           .then(function (data) {   
                               // perform success action here 
                           },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                           });						        
    **/
    remove(data: IOrganization): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }
}