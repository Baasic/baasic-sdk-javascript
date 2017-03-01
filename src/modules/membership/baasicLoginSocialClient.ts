/* globals module */
/**  
 * @module baasicLoginSocialClient  
 * @description Baasic Login Social Client provides an easy way to consume Baasic Application Registration REST API end-points. In order to obtain needed routes `baasicLoginSocialClient` uses `baasicLoginSocialRouteDefinition`. 
 */

import { BaasicApiClient, IHttpResponse, TYPES as httpTYPES } from 'httpApi';
import { injectable, inject } from "inversify";
import { BaasicLoginSocialRouteDefinition, TYPES as membershipTYPES } from 'modules/membership';
import { ISocialLogin } from 'modules/membership/contracts';

@injectable()
export class BaasicLoginSocialClient {

    get routeDefinition(): BaasicLoginSocialRouteDefinition {
        return this.baasicLoginSocialRouteDefinition;
    }

    constructor(
        @inject(membershipTYPES.BaasicLoginSocialRouteDefinition) protected baasicLoginSocialRouteDefinition: BaasicLoginSocialRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a resolved social login provider Url.                     
     * @method
     * @param provider Provider name or id for which the login URL should be generated.
     * @param returnUrl Redirect Uri for the provider which will be used when the user is redirected back to the application.
     * @returns A promise that is resolved once the get action has been performed.                     
     * @example baasicLoginSocialClient.get('<provider>', '<returnUrl>')
                    .then(function (collection) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                     
     **/
    get(provider: string, returnUrl: string): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.get(this.baasicLoginSocialRouteDefinition.get(provider, returnUrl));
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
                baasicLoginSocialClient.post('<provider>', postData)
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
        return this.baasicApiClient.post(this.baasicLoginSocialRouteDefinition.post(provider, options), this.baasicLoginSocialRouteDefinition.createParams(data), { 'Content-Type': 'application/json; charset=UTF-8' })
            .then(function (data) {
                if (data && !data.statusCode) {
                    this.authService.updateAccessToken(data)
                }
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