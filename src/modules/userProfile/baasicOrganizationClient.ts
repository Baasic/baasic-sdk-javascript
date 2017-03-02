/* globals module */
/**  
 * @module baasicOrganizationClient  
 * @description Baasic Organization Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Organization Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { injectable, inject } from "inversify";
import { BaasicOrganizationBatchClient, BaasicOrganizationRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';
import { IOrganization } from 'modules/userProfile/contracts';

@injectable()
export class BaasicOrganizationClient {

    get routeDefinition(): BaasicOrganizationRouteDefinition {
        return this.baasicOrganizationRouteDefinition;
    }

    get batch(): BaasicOrganizationBatchClient {
        return this.baasicOrganizationBatchClient;
    }

    constructor(
        @inject(userProfileTypes.BaasicOrganizationRouteDefinition) protected baasicOrganizationRouteDefinition: BaasicOrganizationRouteDefinition,
        @inject(userProfileTypes.BaasicOrganizationBatchClient) protected baasicOrganizationBatchClient: BaasicOrganizationBatchClient,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of organization resources matching the given criteria.                  
     * @method
     * @param options Query resource options object. 
     * @returns A promise that is resolved once the find action has been performed.                      
     * @example baasicOrganizationClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IOrganization>>> {
        return this.baasicApiClient.get(this.baasicOrganizationRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the organization resource.                 
     * @method
     * @param id Organization id which uniquely identifies resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                       
     * @example baasicOrganizationClient.get(id, options)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IOptions): PromiseLike<IHttpResponse<IOrganization>> {
        return this.baasicApiClient.get(this.baasicOrganizationRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create organization action has been performed; this action creates a new organization resource.                  
     * @method
     * @param data An organization object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create organization action has been performed.                          
     * @example baasicOrganizationClient.create({   
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
        return this.baasicApiClient.post(this.baasicOrganizationRouteDefinition.create(), this.baasicOrganizationRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update organization action has been performed; this action updates an organization resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicOrganizationRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(organization); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data An organization object used to update specified organization resource.
     * @returns A promise that is resolved once the update organization action has been performed.                         
     * @example // organization is a resource previously fetched using get action. 
                    organization.description = '<description>'; 
                    baasicOrganizationClient.update(organization)
                        .then(function (data) {   
                            // perform success action here 
                        }, 
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				        
     **/
    update(data: IOrganization): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.put(this.baasicOrganizationRouteDefinition.update(data), this.baasicOrganizationRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove an organization resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicOrganizationRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(organization); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method
     * @param data An organization object used to delete specified organization resource.
     * @returns A promise that is resolved once the remove action has been performed.                         
     * @example // organization is a resource previously fetched using get action.				 
                       baasicOrganizationClient.remove(organization)
                           .then(function (data) {   
                               // perform success action here 
                           },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                           });						        
    **/
    remove(data: IOrganization): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.delete(this.baasicOrganizationRouteDefinition.delete(data));
    }
}