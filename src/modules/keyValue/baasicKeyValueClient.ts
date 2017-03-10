/**  
 * @module baasicKeyValueClient 
 * @description Baasic Key Value Client provides an easy way to consume Baasic Key Value REST API end-points. In order to obtain needed routes `baasicKeyValueClient` uses `baasicKeyValueRouteClient`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { IHttpHeaders, IHttpRequest, IHttpResponse, BaasicApiClient, TYPES as httpTYPES } from 'httpApi';
import { BaasicKeyValueRouteDefinition, TYPES } from 'modules/keyValue';
import { IKeyValue } from 'modules/keyValue/contracts';

@injectable()
export class BaasicKeyValueClient {

    /**
     * Provides direct access to `baasicKeyValueRouteDefinition`.
     * @method
     * @example baasicKeyValueClient.routeDefinition.get();
     **/
    get routeDefinition(): BaasicKeyValueRouteDefinition {
        return this.baasicKeyValueRouteDefinition;
    }

    constructor(
        @inject(TYPES.BaasicKeyValueRouteDefinition) protected baasicKeyValueRouteDefinition: BaasicKeyValueRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) {
    }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of key value resources matching the given criteria.
     * @param options query resource options object
     * @returns A promise that is resolved once the find action has beend performed.
     * @method
     * @example baasicKeyValueClient.find({
                 pageNumber: 1, 
                 pageSize: 10, 
                 orderBy: '<field>', 
                 orderDirection: '<asc|desc>', 
                 search: '<search-phrase>'
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                     
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IKeyValue>>> {
        return this.baasicApiClient.get(this.baasicKeyValueRouteDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified key value resource.
     * @param id unique identifer of key value resources
     * @param options query resource options object
     * @returns A promise that is resolved once the get action has beend performed.
     * @method
     * @example baasicKeyValueClient.get('<key-value-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                  
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IKeyValue>> {
        return this.baasicApiClient.get<IKeyValue>(this.baasicKeyValueRouteDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create key value action has been performed; this action creates a new key value resource.
     * @param data A key value object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create key value action has beend performed.
     * @method
     * @example baasicKeyValueClient.create({key: '<key>', value: '<value>', })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });
     */
    create(data: IKeyValue): PromiseLike<IHttpResponse<IKeyValue>> {
        return this.baasicApiClient.post<IKeyValue>(this.baasicKeyValueRouteDefinition.create(), this.baasicKeyValueRouteDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update key value action has been performed; this action updates a key value resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicKeyValueRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(keyValue); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @param data A key value object used to update specified key value resource.
     * @return A promise that is resolved once the update key value action has been performed.
     * @method
     * @example // keyValue is a resource previously fetched using get action. 
                   keyValue.value = '<new-value>'; 
                   baasicKeyValueClient.update(keyValue)
                   .then(function (data) {   
                       // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    }); 				
     **/
    update(data: IKeyValue): PromiseLike<IHttpResponse<IKeyValue>> {
        return this.baasicApiClient.put(this.baasicKeyValueRouteDefinition.update(data), this.baasicKeyValueRouteDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a key value resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicKeyValueRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(keyValue); 
     * let uri = params['model'].links('delete').href; 
     * ```      
     * @param data A key value object used to delete specified key value resource.  
     * @returns A promise that is resolved once the remove action has been performed.          
     * @method 
     * @example // keyValue is a resource previously fetched using get action.				 
                    baasicKeyValueClient.remove(keyValue) 
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });
     **/
    remove(data: IKeyValue): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.delete<any>(this.baasicKeyValueRouteDefinition.delete(data), this.baasicKeyValueRouteDefinition.deleteParams(data));
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */