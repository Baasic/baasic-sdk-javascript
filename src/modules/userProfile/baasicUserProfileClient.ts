/* globals module */ 
/**  
 * @module baasicUserProfileClient  
 * @description Baasic User Profile Client provides an easy way to consume Baasic User Profile REST API end-points. In order to obtain needed routes `baasicUserProfileClient` uses `baasicUserProfileRouteDefinition`. 
 */

import { IOptions } from 'common/contracts';
import { BaasicUserProfileRouteDefinition } from 'modules/userProfile';
import { IUserProfile } from 'modules/userProfile/contracts';

export class BaasicUserProfileClient {

    constructor(protected baasicUserProfileRouteDefinition: BaasicUserProfileRouteDefinition) {}

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user profile resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                          
     * @example userProfileClient.find({   
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
    find(options?: IOptions): Promise<IUserProfile> {
        return this.baasicApiHttp.get(this.baasicUserProfileRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the user profile resource.                 
     * @method 
     * @param id User profile id which uniquely identifies user profile resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                       
     * @example baasicUserProfileClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/ 
    get(id: string, options?: IOptions): Promise<IUserProfile> {
        return this.baasicApiHttp.get(this.baasicUserProfileRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create user profile action has been performed; this action creates a new user profile resource.                  
     * @method
     * @param data An user profile object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create user profile action has been performed.                         
     * @example baasicUserProfileClient.create({   
                    firstName : '<first-name>',   
                    lastName : '<last-name>',   
                    displayName: '<nick-name>' 
                }.then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                  
     **/ 				
    create(data: IUserProfile): Promise<IUserProfile> {
        return this.baasicApiHttp.post(this.baasicUserProfileRouteDefinition.create(), this.baasicUserProfileRouteDefinition.createParams(data));
    }

     /**                  
      * Returns a promise that is resolved once the update user profile action has been performed; this action updates a user profile resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicUserProfileRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
      * ``` 
      * let params = modelMapper.removeParams(userProfile); 
      * let uri = params['model'].links('put').href; 
      * ```                  
      * @method 
      * @param data An user profile object used to update specified user profile resource.
      * @returns A promise that is resolved once the update user profile action has been performed.                         
      * @example // userProfile is a resource previously fetched using get action. 
                        userProfile.displayName = '<nick-name>'; 
                        baasicUserProfileClient.update(userProfile)
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            }); 				
     **/					
    update(data: IUserProfile): Promise<any> {
        return this.baasicApiHttp.put(this.baasicUserProfileRouteDefinition.update(data), this.baasicUserProfileRouteDefinition.updateParams(data));
    }
}