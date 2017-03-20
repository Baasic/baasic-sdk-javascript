/* globals module */
/**  
 * @module userEducationClient  * @description  User Education Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Education Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { UserEducationRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';
import { IUserEducation } from 'modules/userProfile/contracts';

@injectable()
export class UserEducationClient {

    get routeDefinition(): UserEducationRouteDefinition {
        return this.userEducationRouteDefinition;
    }

    constructor(
        @inject(userProfileTypes.UserEducationRouteDefinition) protected userEducationRouteDefinition: UserEducationRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user education resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example userEducationClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IUserEducation>>> {
        return this.apiClient.get<IQueryModel<IUserEducation>>(this.userEducationRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the user education resource.                 
     * @method                        
     * @example userEducationClient.get(id)
                    .then(function (data) {   
                        // perform success action here 
                    }, 
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserEducation>> {
        return this.apiClient.get<IUserEducation>(this.userEducationRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create user education action has been performed; this action creates a new user education resource.                  
     * @method 
     * @param data An user education object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create user education action has been performed.
     * @example userEducationClient.create({   
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
        return this.apiClient.post<IUserEducation>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update user education action has been performed; this action updates a user education resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `userEducationRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(education); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method 
     * @param data An user education object used to update specified user education resource.
     * @returns A promise that is resolved once the update user education action has been performed.                       
     * @example // education is a resource previously fetched using get action. 
                    education.degree = '<degree>'; 
                    userEducationClient.update(education)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				        
     **/
    update(data: IUserEducation): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a user education resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserEducationRoutDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(education); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method                         
     * @example // education is a resource previously fetched using get action.				 
                    userEducationClient.remove(education)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						        
     **/
    remove(data: IUserEducation): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.userEducationRouteDefinition.delete(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */