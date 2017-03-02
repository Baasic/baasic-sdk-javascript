/* globals module */
/**  
 * @module baasicRegisterClient  
 * @description Baasic Register Client provides an easy way to consume Baasic Application Registration REST API end-points. In order to obtain needed routes `baasicRegisterClient` uses `baasicRegisterRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { IToken, ITokenHandler, TYPES as coreTYPES } from 'core/contracts';
import { BaasicRegisterRouteDefinition, TYPES as membershipTypes } from 'modules/membership';
import { IAppUser, IRegisterUser } from 'modules/membership/contracts';

@injectable()
export class BaasicRegisterClient {

    /**                 
     * Provides direct access to `baasicRegisterRouteDefinition`.                 
     * @method                        
     * @example baasicRegisterClient.routeDefinition.get();                 
     **/
    get routeDefinition(): BaasicRegisterRouteDefinition {
        return this.baasicRegisterRouteDefinition;
    }

    constructor(
        @inject(membershipTypes.BaasicRegisterRouteDefinition) protected baasicRegisterRouteDefinition: BaasicRegisterRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient,
        @inject(coreTYPES.ITokenHandler) protected tokenHandler: ITokenHandler,
    ) { }

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
    create(data: IRegisterUser): PromiseLike<IHttpResponse<IAppUser>> {
        return this.baasicApiClient.post(this.baasicRegisterRouteDefinition.create(), this.baasicRegisterRouteDefinition.createParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the account activation action has been performed; this action activates a user account and success response returns the token resource.      
     * @param data Security code which uniquely identifies user account that needs to be activated.
     * @returns A promise that is resolved once the account activation action has been performed.           
     * @method                        
     * @example baasicRegisterClient.activate({   
                   activationToken : '<activation-token>' 
               })
               .then(function (data) {   
                   // perform success actions here 
               },
                function (data, status) {   
                   // perform error handling here 
               })
               .finally (function () {});                 
    **/
    activate(data: string): PromiseLike<void> {
        var self = this;
        return this.baasicApiClient.put<any>(this.baasicRegisterRouteDefinition.activate(data), data)
            .then<any>(function (data) {
                let token: IToken = {
                    token: data.body.access_token,
                    expires_in: data.body.expires_in,
                    sliding_window: data.body.sliding_window,
                    tokenUrl: data.body.access_url_token,
                    type: data.body.token_type
                };
                self.tokenHandler.store(token);
                return data;
            });
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route definition. 
*/