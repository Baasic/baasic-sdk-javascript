/**  
 * @module keyValueClient 
 * @description  Key Value Client provides an easy way to consume  Key Value REST API end-points. In order to obtain needed routes `keyValueClient` uses `baasicKeyValueRouteClient`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IHttpHeaders, IHttpRequest, IHttpResponse, ApiClient, httpTYPES } from '../../httpApi';
import { KeyValueRoute, TYPES } from 'modules/keyValue';
import { IKeyValue } from './contracts';

@injectable()
export class KeyValueClient {

    /**
     * Provides direct access to `keyValueRoute`.
     * @method
     * @example keyValueClient.routeDefinition.get();
     **/
    get routeDefinition(): KeyValueRoute {
        return this.keyValueRoute;
    }

    constructor(
        @inject(TYPES.KeyValueRoute) protected keyValueRoute: KeyValueRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) {
    }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of key value resources matching the given criteria.
     * @param options query resource options object
     * @returns A promise that is resolved once the find action has beend performed.
     * @method
     * @example keyValueClient.find({
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IKeyValue>>> {
        return this.apiClient.get(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified key value resource.
     * @param id unique identifer of key value resources
     * @param options query resource options object
     * @returns A promise that is resolved once the get action has beend performed.
     * @method
     * @example keyValueClient.get('<key-value-id>')
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });                  
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IKeyValue>> {
        return this.apiClient.get<IKeyValue>(this.keyValueRoute.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create key value action has been performed; this action creates a new key value resource.
     * @param data A key value object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create key value action has beend performed.
     * @method
     * @example keyValueClient.create({key: '<key>', value: '<value>', })
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });
     */
    create(data: IKeyValue): PromiseLike<IHttpResponse<IKeyValue>> {
        return this.apiClient.post<IKeyValue>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
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
                   keyValueClient.update(keyValue)
                   .then(function (data) {   
                       // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    }); 				
     **/
    update(data: IKeyValue): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
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
                    keyValueClient.remove(keyValue) 
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                        // perform error handling here 
                    });
     **/
    remove(data: IKeyValue): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data), this.routeDefinition.deleteParams(data));
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