/* globals module */
/**  
 * @module lookupClient 
 * @description  Lookup Client provides an easy way to consume  Lookup REST API end-points. In order to obtain needed routes `lookupClient` uses `lookupRoute`. 
 */

import { injectable, inject } from "inversify";
import { IGetRequestOptions } from 'common/contracts';;
import { Utility } from 'common';
import { ILookup, IAccessSection } from './contracts';
import { LookupRoute, TYPES as membershipTypes } from './';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';

@injectable()
export class LookupClient {

    private utility: Utility = new Utility();

    get routeDefinition(): LookupRoute {
        return this.lookupRoute;
    }

    constructor(
        @inject(membershipTypes.LookupRoute) protected lookupRoute: LookupRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
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
     * @example lookupClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                  
     **/
    get(options?: IGetRequestOptions): PromiseLike<IHttpResponse<ILookup>> {
        let embed = options.embed || 'role,accessAction,accessSection,snProvider';
        var opt = this.utility.extend({}, options, { embed: embed });
        var self = this;
        return this.apiClient.createPromise<any>((resolve, reject) => {
            self.apiClient.get(this.lookupRoute.get(opt))
                .then<any>(function (data) {
                    data.data = self.getResponseData(embed, data.data);
                    resolve(data);
                }, function (data) {
                    reject(data);
                });
        });
    }

    /**                  
     * Returns a promise that is resolved once the get access sections action has been performed. Success response returns the access section resources.                  
     * @method                      
     * @returns A promise that is resolved once the get access sections action has been performed. 
     * @example lookupClient.getAccessSections()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                  
     **/
    getAccessSections(): PromiseLike<IHttpResponse<IAccessSection[]>> {
        var self = this;
        return this.apiClient.createPromise<any>((resolve, reject) => {
            self.apiClient.get(this.lookupRoute.getAccessSections())
                .then<any>(function (data) {
                    resolve(data);
                }, function (data) {
                    reject(data);
                });
        });
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */