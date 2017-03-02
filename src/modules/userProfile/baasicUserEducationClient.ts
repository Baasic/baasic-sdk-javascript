/* globals module */
/**  
 * @module baasicUserEducationClient  * @description Baasic User Education Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Education Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { injectable, inject } from "inversify";
import { BaasicUserEducationRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';
import { IUserEducation } from 'modules/userProfile/contracts';

@injectable()
export class BaasicUserEducationClient {

    get routeDefinition(): BaasicUserEducationRouteDefinition {
        return this.baasicUserEducationRouteDefinition;
    }

    constructor(
        @inject(userProfileTypes.BaasicUserEducationRouteDefinition) protected baasicUserEducationRouteDefinition: BaasicUserEducationRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user education resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example baasicUserEducationClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserEducation>>> {
        return this.baasicApiClient.get(this.baasicUserEducationRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the user education resource.                 
     * @method                        
     * @example baasicUserEducationClient.get(id)
                    .then(function (data) {   
                        // perform success action here 
                    }, 
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IOptions): PromiseLike<IHttpResponse<IUserEducation>> {
        return this.baasicApiClient.get(this.baasicUserEducationRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create user education action has been performed; this action creates a new user education resource.                  
     * @method 
     * @param data An user education object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create user education action has been performed.
     * @example baasicUserEducationClient.create({   
                    organizationName : '<organization-name>',   
                    summary: '<summary>',   
                    userId: '<user-id>' 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                 
     **/
    create(data: IUserEducation): PromiseLike<IHttpResponse<IUserEducation>> {
        return this.baasicApiClient.post(this.baasicUserEducationRouteDefinition.create(data), this.baasicUserEducationRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update user education action has been performed; this action updates a user education resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserEducationRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(education); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method 
     * @param data An user education object used to update specified user education resource.
     * @returns A promise that is resolved once the update user education action has been performed.                       
     * @example // education is a resource previously fetched using get action. 
                    education.degree = '<degree>'; 
                    baasicUserEducationClient.update(education)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				        
     **/
    update(data: IUserEducation): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.put(this.baasicUserEducationRouteDefinition.update(data), this.baasicUserEducationRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a user education resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserEducationRoutDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(education); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // education is a resource previously fetched using get action.				 
                    baasicUserEducationClient.remove(education)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						        
     **/
    remove(data: IUserEducation): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.delete(this.baasicUserEducationRouteDefinition.delete(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */