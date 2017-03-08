/* globals module */
/**  
 * @module baasicLoginClient  
 * @description Baasic Login Client provides an easy way to consume Baasic Application Registration REST API end-points. In order to obtain needed routes `baasicLoginClient` uses `baasicLoginRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { Utility } from 'common';
import { IToken, ITokenHandler, TYPES as coreTYPES } from 'core/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTYPES } from 'httpApi';
import { BaasicLoginRouteDefinition, BaasicLoginSocialClient, TYPES as membershipTypes } from 'modules/membership';
import { IUserInfo } from 'modules/membership/contracts';

@injectable()
export class BaasicLoginClient {

    get routeDefinition(): BaasicLoginRouteDefinition {
        return this.baasicLoginRouteDefinition;
    }

    private utility: Utility = new Utility();

    constructor(
        @inject(membershipTypes.BaasicLoginRouteDefinition) protected baasicLoginRouteDefinition: BaasicLoginRouteDefinition,
        @inject(coreTYPES.ITokenHandler) protected tokenHandler: ITokenHandler,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the login action has been performed. This action logs user into the application and success response returns the token resource.                  
     * @method                         
     * @example baasicLoginClient.login({   
                    username : '<username>',   
                    password : '<password>',   
                    options : ['session', 'sliding'] 
                })
                .then(function (data) {   
                    // perform success actions here 
                },
                 function (data, status) {   
                     // perform error handling here 
                })
                .finally (function () {});                        
     **/
    login(data: any): PromiseLike<any> {
        let settings = this.utility.extend({}, data);
        if (settings.options) {
            let options = settings.options;
            if (options instanceof Array) {
                settings.options = options.join();
            }
        }
        let loginData = this.transformData({
            grant_type: 'password', // jshint ignore:line
            username: settings.username,
            password: settings.password
        });
        var self = this;
        var promise = this.baasicApiClient.post<any>(this.baasicLoginRouteDefinition.login(settings), loginData, { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
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
     * Returns a promise that is resolved once the loadUserData action has been performed. This action retrieves the account information of the currently logged in user. Retrieved account information will contain permission collection which identifies access policies assigned to the user and application sections. 				
     * @method 				
     * @example baasicLoginClient.loadUserData()
                    .then(function (data) {   
                        // perform success actions here 
                    },
                     function (data) {   
                         // perform error handling here 
                    })
                    .finally (function () {});							
     */
    loadUserData(data: any): IUserInfo {
        data = data || {};
        return this.baasicApiClient.get<IUserInfo>(this.baasicLoginRouteDefinition.login(data), { 'Accept': 'application/json; charset=UTF-8' });
    }

    /** 				
     * Returns a promise that is resolved once the logout action has been performed. This action invalidates user token logging the user out of the system. 				
     * @method
     * @param token Authentication token which uniquely identifies user that needs to be logged out from the system.
     * @param type Token type.
     * @returns A promise that is resolved once the logout action has been performed.  				
     * @example let token = baasicAuthorizationService.getAccessToken(); 
                baasicLoginClient.logout(token.access_token, token.token_type)
                .then(function (data) {   
                    // perform success handling here 
                }, function() {
                    // perform error handling here
                }) 
                .finally (function () {});								
     */
    logout(token: string, type: string): PromiseLike<void> {
        let data = {
            token: token,
            type: type
        };
        var self = this;
        return this.baasicApiClient.delete(this.baasicLoginRouteDefinition.login({}), data)
            .then(function () {
                self.tokenHandler.store(null);
            });
    }

    /**              
     * Returns url encoded form data.              
     */
    private transformData(data: Object): any {
        let items = [];
        for (let key in data) {
            items.push([encodeURIComponent(key), encodeURIComponent(data[key])].join('='))
        }
        return items.join('&');
    }
}

/**  
 * @overview 
  ***Notes:**  
  - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
  - All end-point objects are transformed by the associated route definition. 
  */