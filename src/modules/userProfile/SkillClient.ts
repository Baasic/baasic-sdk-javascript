/* globals module */
/**  
 * @module skillClient  
 * @description  Skill Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Skill Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { SkillBatchClient, SkillRoute, TYPES as userProfileTypes } from 'modules/userProfile';
import { ISkill } from 'modules/userProfile/contracts';

@injectable()
export class SkillClient {

    get routeDefinition(): SkillRoute {
        return this.skillRoute;
    }

    get batch(): SkillBatchClient {
        return this.skillBatchClient;
    }

    constructor(
        @inject(userProfileTypes.SkillRoute) protected skillRoute: SkillRoute,
        @inject(userProfileTypes.SkillBatchClient) protected skillBatchClient: SkillBatchClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of skill resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example skillClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<ISkill>>> {
        return this.apiClient.get<IQueryModel<ISkill>>(this.routeDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the skill resource.                 
     * @method
     * @param id Skill id which uniquely identifies skill resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example skillClient.get(id, options)
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ISkill>> {
        return this.apiClient.get<ISkill>(this.skillRoute.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create skill action has been performed; this action creates a new skill resource.                  
     * @method
     * @param data A skill object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create skill action has been performed.                         
     * @example skillClient.create({   
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
    create(data: ISkill): PromiseLike<IHttpResponse<ISkill>> {
        return this.apiClient.post<ISkill>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update skill action has been performed; this action updates a skill resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `skillRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(skill); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data A skill object used to update specified skill resource.
     * @returns A promise that is resolved once the update skill action has been performed.                          
     * @example // skill is a resource previously fetched using get action. 
                    skill.description = '<description>'; 
                    skillClient.update(skill)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				       
     **/
    update(data: ISkill): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a skill resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `skillRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(skill); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method
     * @param A skill object used to delete specified skill resource.
     * @returns A promise that is resolved once the remove action has been performed.                          
     * @example // skill is a resource previously fetched using get action.				 
                       skillClient.remove(skill)
                           .then(function (data) {   
                               // perform success action here 
                           }, 
                            function (response, status, headers, config) {   
                                // perform error handling here 
                           });						        
    **/
    remove(data: ISkill): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }
}