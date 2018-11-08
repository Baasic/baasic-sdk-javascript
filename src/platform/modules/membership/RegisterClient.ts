/* globals module */
/**  
 * @module registerClient  
 * @description  Register Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `registerClient` uses `registerRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { IToken, ITokenHandler, TYPES as coreTYPES } from '../../../core/contracts';
import { RegisterRoute, TYPES as membershipTypes } from '.';
import { IRegisterUser, IResendActivation } from './contracts';

@injectable()
export class RegisterClient {

    /**                 
     * Provides direct access to `registerRoute`.                 
     * @method                                   
     **/
    get routeDefinition(): RegisterRoute {
        return this.registerRoute;
    }

    constructor(
        @inject(membershipTypes.RegisterRoute) protected registerRoute: RegisterRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
        @inject(coreTYPES.ITokenHandler) protected tokenHandler: ITokenHandler,
    ) { }

    /**                 
     * Returns a promise that is resolved once the register create has been performed. This action will create a new user if completed successfully. Created user is not approved immediately, instead an activation e-mail is sent to the user. 
     * @param data A user account object that needs to be inserted into the system.                
     * @method                        
     * @example registerClient.create({   
                    activationUrl : '<activation-url>',   
                    challengeIdentifier : '<challenge-identifier>',   
                    challengeResponse : '<challenge-response>',   
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
    create(data: IRegisterUser): PromiseLike<IHttpResponse<string>> {
        return this.apiClient.post(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                 
     * Returns a promise that is resolved once the account activation action has been performed; this action activates a user account and success response returns the token resource.      
     * @param data Security code which uniquely identifies user account that needs to be activated.
     * @returns A promise that is resolved once the account activation action has been performed.           
     * @method                        
     * @example registerClient.activate({   
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
    activate(data: string): PromiseLike<any> {
        var self = this;
        var promise = this.apiClient.put<any>(this.registerRoute.activate(data), data);
        promise.then<any>(function (data) {
            let token: IToken = {
                token: data.data.access_token,
                expires_in: data.data.expires_in,
                sliding_window: data.data.sliding_window,
                tokenUrl: data.data.access_url_token,
                type: data.data.token_type
            };
            self.tokenHandler.store(token);
            return data;
        });
        return promise;
    }

    /**                 
     * Returns a promise that is resolved once the account recovery action has been performed; this action resends password recovery to user.      
     * @param data Email which uniquely identifies user account that needs recovery email resent.
     * @returns A promise that is resolved once the recovery action has been performed.           
     * @method                        
     * @example registerClient.recovery({   
                   email : '<email>',
                   activationUrl: '<activation-url>',
                   challengeResponse: '<challenge-response>'
               })
               .then(function (data) {   
                   // perform success actions here 
               },
                function (data, status) {   
                   // perform error handling here 
               })
               .finally (function () {});                 
    **/
    recovery(data: IResendActivation): PromiseLike<any> {
        var self = this;
        return this.apiClient.put<any>(this.registerRoute.recovery(data.email), data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/