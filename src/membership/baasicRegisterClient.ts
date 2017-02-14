/* globals module */ 
/**  
 * @module baasicRegisterClient  
 * @description Baasic Register Client provides an easy way to consume Baasic Application Registration REST API end-points. In order to obtain needed routes `baasicRegisterClient` uses `baasicRegisterRouteDefinition`. 
 */

import { BaasicRegisterRouteDefinition } from 'membership';
import { IAppUser, IRegisterUser } from 'membership/contracts';
import { ModelMapper } from '..';

export class BaasicRegisterClient {

    /**                 
     * Provides direct access to `baasicRegisterRouteDefinition`.                 
     * @method                        
     * @example baasicRegisterClient.routeDefinition.get().expand(expandObject);                 
     **/                
    get routeDefinition(): BaasicRegisterRouteDefinition {
        return this.baasicRegisterRouteDefinition;
    }
    
    constructor(
        private modelMapper: ModelMapper,
        private baasicRegisterRouteDefinition: BaasicRegisterRouteDefinition) {}

    /**                 
     * Returns a promise that is resolved once the register create has been performed. This action will create a new user if completed successfully. Created user is not approved immediately, instead an activation e-mail is sent to the user. 
     * @param data A user account object that needs to be inserted into the system.                
     * @method                        
     * @example baasicRegisterClient.create({   
                    activationUrl : '<activation-url>',   
                    challengeIdentifier : '<challenge-identifier>',   
                    challengeResponse : '<challenge-response>',   
                    confirmPassword : '<confirm-password>',   
                    email : '<email>',   
                    password : '<password>',   
                    username : '<username>' 
                })
                .success(function (data) {   
                    // perform success actions here 
                }).error(function (data, status) {   
                    // perform error handling here 
                })
                .finally (function () {});                 
     **/ 
    create(data: IRegisterUser): Promise<IAppUser> {
        return this.baasicApiHttp.post(this.baasicRegisterRouteDefinition.create().expand({}), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }

     /**                 
      * Returns a promise that is resolved once the account activation action has been performed; this action activates a user account and success response returns the token resource.      
      * @param data Security code which uniquely identifies user account that needs to be activated.
      * @returns A promise that is resolved once the account activation action has been performed.           
      * @method                        
      * @example baasicRegisterClient.activate({   
                    activationToken : '<activation-token>' 
                })
                .success(function (data) {   
                    // perform success actions here 
                })
                .error(function (data, status) {   
                    // perform error handling here 
                })
                .finally (function () {});                 
     **/
    activate(data: string): Promise<any> {
        let params = this.modelMapper.getParams(data, 'activationToken');
        return this.baasicApiHttp({ 
            url: this.baasicRegisterRouteDefinition.activate().expand(params), 
            method: 'PUT' 
        }).success(function (data) { 
            this.authService.updateAccessToken(data); 
        });
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/