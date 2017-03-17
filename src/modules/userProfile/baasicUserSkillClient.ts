/* globals module */
/**  
 * @module baasicUserSkillClient  
 * @description  User Skill Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic User Skill Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicUserSkillRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';
import { IUserSkill } from 'modules/userProfile/contracts';

@injectable()
export class UserSkillClient {

    get routeDefinition(): BaasicUserSkillRouteDefinition {
        return this.baasicUserSkillRouteDefinition;
    }

    constructor(
        @inject(userProfileTypes.BaasicUserSkillRouteDefinition) protected baasicUserSkillRouteDefinition: BaasicUserSkillRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user skill resources matching the given criteria.                  
     * @method 
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example baasicUserSkillClient.find({   
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
    find(options: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IUserSkill>>> {
        return this.baasicApiClient.get<IBaasicQueryModel<IUserSkill>>(this.baasicUserSkillRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the user skill resource.                 
     * @method
     * @param id User profile id or display name which uniquely identifies user profile whose skill resources need to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                        
     * @example baasicUserSkillClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    }, 
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IUserSkill>> {
        return this.baasicApiClient.get<IUserSkill>(this.baasicUserSkillRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create user skill action has been performed; this action creates a new user skill resource.                  
     * @method 
     * @param data An user skill object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create user skill action has been performed.                       
     * @example baasicUserSkillClient.create({ skillName : '<skill-name>', userId: '<user-id>' })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    create(data: IUserSkill): PromiseLike<IHttpResponse<IUserSkill>> {
        return this.baasicApiClient.post<IUserSkill>(this.baasicUserSkillRouteDefinition.create(data), this.baasicUserSkillRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update user skill action has been performed; this action updates a user skill resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserSkillRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(skill); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data An user skill object used to update specified user skill resource.
     * @returns A promise that is resolved once the update user skill action has been performed.
     * @example // skill is a resource previously fetched using get action. 
                       skill.description = '<description>'; 
                       baasicUserSkillClient.update(skill)
                           .then(function (data) {   
                               // perform success action here 
                           },
                            function (response, status, headers, config) {   
                                // perform error handling here 
                           }); 				        
    **/
    update(data: IUserSkill): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicUserSkillRouteDefinition.update(data), this.baasicUserSkillRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a user skill resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserSkillRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(skill); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method
     * @param data An user skill object used to delete specific user skill resource in the system.
     * @returns A promise that is resolved once the remove action has been performed.                          
     * @example // skill is a resource previously fetched using get action.				 
                    baasicUserSkillClient.remove(skill)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        });						        
     **/
    remove(data: IUserSkill): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicUserSkillRouteDefinition.delete(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
 */