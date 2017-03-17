/* globals module */
/**  
 * @module loginSocialClient  
 * @description  Login Social Client provides an easy way to consume  Application Registration REST API end-points. In order to obtain needed routes `loginSocialClient` uses `loginSocialRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { IToken, ITokenHandler, TYPES as coreTYPES } from 'core/contracts';
import { LoginSocialRouteDefinition, TYPES as membershipTYPES } from 'modules/membership';
import { ISocialLogin } from 'modules/membership/contracts';

@injectable()
export class LoginSocialClient {

    get routeDefinition(): LoginSocialRouteDefinition {
        return this.loginSocialRouteDefinition;
    }

    constructor(
        @inject(membershipTYPES.LoginSocialRouteDefinition) protected loginSocialRouteDefinition: LoginSocialRouteDefinition,
        @inject(coreTYPES.ITokenHandler) protected tokenHandler: ITokenHandler,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a resolved social login provider Url.                     
     * @method
     * @param provider Provider name or id for which the login URL should be generated.
     * @param returnUrl Redirect Uri for the provider which will be used when the user is redirected back to the application.
     * @returns A promise that is resolved once the get action has been performed.                     
     * @example loginSocialClient.get('<provider>', '<returnUrl>')
                    .then(function (collection) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                     
     **/
    get(provider: string, returnUrl: string): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.get(this.loginSocialRouteDefinition.get(provider, returnUrl));
    }

    /**                     
     * Returns a promise that is resolved once the post action has been performed. This action logs user into the application and success response returns the token resource.                     
     * @method
     * @param provider Provider name or Id which uniquely identifies social login for which access token should be issued.
     * @param data Object used to identify social login information.
     * @param options Comma separated list of additional options defining token behavior. Supported values are: "session" and "sliding".                     
     * @example let postData = {   
                    email : '<email>',   
                    code:'<code>',   
                    activationUrl : '<activationUrl>',   
                    oAuthToken : '<oAuthToken>',   
                    oAuthVerifier : '<oAuthVerifier>',   
                    password : '<password>',   
                    returnUrl : '<returnUrl>' 
                };                    
                loginSocialClient.post('<provider>', postData)
                    .then(function (collection) {  
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                     
     **/
    post(provider: string, data: ISocialLogin, options?: any): PromiseLike<void> {
        let params: any = { provider: provider };
        if (options) {
            params.options = options;
        }
        var self = this;
        return this.apiClient.createPromise<any>((resolve, reject) => {
            self.apiClient.post<any>(self.loginSocialRouteDefinition.post(provider, options), self.loginSocialRouteDefinition.createParams(data),
                { 'Content-Type': 'application/json; charset=UTF-8' })
                .then<any>(function (data) {
                    if (data) {
                        let token: IToken = {
                            token: data.data.access_token,
                            expires_in: data.data.expires_in,
                            sliding_window: data.data.sliding_window,
                            tokenUrl: data.data.access_url_token,
                            type: data.data.token_type
                        };
                        self.tokenHandler.store(token);
                    }
                    resolve(data);
                }, function (data) {
                    reject(data);
                });
        });
    }

    parseResponse(provider: string, returnUrl: string): any {
        let params = this.parseUrlParams();
        let result: any = {};
        switch (provider) {
            case 'twitter':
                /** jshint camelcase: false*/
                result.oAuthToken = params.oauth_token;
                result.oAuthVerifier = params.oauth_verifier;
                break;
            default:
                result.code = params.code;
                result.returnUrl = returnUrl;
                break;
        }
        return result;
    }

    // Getting query string values in javascript: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    private parseUrlParams() {
        let urlParams;
        let match,
            pl = /\+/g,
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')); },
            query = window.location.search.substring(1);

        urlParams = {};
        /* jshint -W084*/
        while (match = search.exec(query)) {
            urlParams[decode(match[1])] = decode(match[2]);
        }
        return urlParams;
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points. 
 - All end-point objects are transformed by the associated route definition. 
 */