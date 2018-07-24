/* globals module */
/**  
 * @module lookupClient  
 * @description  Lookup Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `lookupClient` uses `lookupRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { Utility } from '../../common';
import { IAccessSection } from './contracts';
import { LookupRoute, TYPES as membershipTypes } from './';

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