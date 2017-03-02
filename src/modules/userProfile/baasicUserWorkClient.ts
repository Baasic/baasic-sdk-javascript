/* globals module */
/**  
 * @module baasicUserWorkClient  
 * @description Baasic User Work Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Work Route Client to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { injectable, inject } from "inversify";
import { BaasicUserWorkRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';
import { IUserWork } from 'modules/userProfile/contracts';

@injectable()
export class BaasicUserWorkClient {

    routeDefinition(): BaasicUserWorkRouteDefinition {
        return this.baasicUserWorkRouteDefinition;
    }

    constructor(
        @inject(userProfileTypes.BaasicUserWorkRouteDefinition) protected baasicUserWorkRouteDefinition: BaasicUserWorkRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user work resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example baasicUserWorkClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserWork>>> {
        return this.baasicApiClient.get(this.baasicUserWorkRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the user work resource.                 
     * @method
     * @param id User work id which uniquely identifies resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example baasicUserWorkClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    }, 
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IOptions): PromiseLike<IHttpResponse<IUserWork>> {
        return this.baasicApiClient.get(this.baasicUserWorkRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create user work action has been performed; this action creates a new user work resource.                  
     * @method
     * @param data An user work object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create user work action has been performed.
     * @example baasicUserWorkClient.create({ companyName : '<company-name>', userId: '<user-id>' })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    create(data: IUserWork): PromiseLike<IHttpResponse<IUserWork>> {
        return this.baasicApiClient.post(this.baasicUserWorkRouteDefinition.create(data), this.baasicUserWorkRouteDefinition.createParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the update user work action has been performed; this action updates a user work resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserWorkRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(work); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data An user work object used to update specified user work resource.
     * @returns A promise that is resolved once the update user work action has been performed.                         
     * @example // work is a resource previously fetched using get action. 
                    work.companyName = '<company-name>'; 
                    baasicUserWorkClient.update(work)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				        
     **/
    update(data: IUserWork): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.put(this.baasicUserWorkRouteDefinition.update(data), this.baasicUserWorkRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a user work resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserWorkRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(work); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // work is a resource previously fetched using get action.				 
                       baasicUserWorkClient.remove(work)
                           .then(function (data) {   
                               // perform success action here 
                           },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                           });						        
    **/
    remove(data: IUserWork): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.delete(this.baasicUserWorkRouteDefinition.delete(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
 */