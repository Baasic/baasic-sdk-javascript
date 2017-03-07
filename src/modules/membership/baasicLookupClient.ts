/* globals module */
/**  
 * @module baasicLookupClient 
 * @description Baasic Lookup Client provides an easy way to consume Baasic Lookup REST API end-points. In order to obtain needed routes `baasicLookupClient` uses `baasicLookupRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { ILookup, ILookupOptions } from 'modules/membership/contracts';
import { BaasicLookupRouteDefinition, TYPES as membershipTypes } from 'modules/membership';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';

@injectable()
export class BaasicLookupClient {

    get routeDefinition(): BaasicLookupRouteDefinition {
        return this.baasicLookupRouteDefinition;
    }

    constructor(
        @inject(membershipTypes.BaasicLookupRouteDefinition) protected baasicLookupRouteDefinition: BaasicLookupRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    private getResponseData(embed: string, data: any): any {
        let responseData = {};
        if (embed) {
            var embeds = embed.split(',');
        }
        for (let index in embeds) {
            let propName = embeds[index];
            if (data.hasOwnProperty(propName)) {
                responseData[propName] = data[propName];
            }
        }
        return responseData;
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the lookup resources.                  
     * @method
     * @param options Options object that contains comma separated list of related resources to be contained within the current representation.                         
     * @returns A promise that is resolved once the get action has been performed. 
     * @example baasicLookupClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                  
     **/
    get(options?: ILookupOptions): PromiseLike<IHttpResponse<ILookup>> {
        let embed = options.embed || 'role,accessAction,accessSection,snProvider';
        return this.baasicApiClient.get(this.baasicLookupRouteDefinition.get({ embed: embed }));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */