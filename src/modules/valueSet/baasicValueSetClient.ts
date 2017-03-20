/**  
 * @module valueSetClient
 * @description  Value Set Client provides an easy way to consume Baasic Value Set REST end-points. In order to obtain needed routes `baasicValueSetService` uses `baasicValueSetRouteService`. 
 */

import { injectable, inject } from 'inversify';
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { ValueSetItemClient, ValueSetRouteDefinition, TYPES as valueSetTypes } from 'modules/valueSet';
import { IValueSet } from 'modules/valueSet/contracts';

@injectable()
export class ValueSetClient {


    get items(): ValueSetItemClient {
        return this.valueSetItemClient;
    }

    /**
     * Provides direct access to `valueSetRouteDefinition`.
     * @method
     * @example valueSetClient.routeDefinition.get().expand(expandObject);
    **/
    get routeDefinition(): ValueSetRouteDefinition {
        return this.valueSetRouteDefinition;
    }

    constructor(
        @inject(valueSetTypes.ValueSetRouteDefinition) protected valueSetRouteDefinition: ValueSetRouteDefinition,
        @inject(valueSetTypes.ValueSetItemClient) protected valueSetItemClient: ValueSetItemClient,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of value set resources matching given criteria.
     * @param options query resource options object
     * @returns A promise that is resolved once the find action has beend performed.
     * @method 
     * @example valueSetClient.find({
                    pageNumber: 1,
                    pageSize : 10,
                    orderBy : '<field>',
                    orderDirection : '<asc|desc>', 
                    search : '<search-phrase>'
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IValueSet>>> {
        return this.apiClient.get<IQueryModel<IValueSet>>(this.valueSetRouteDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified value set resource.
     * @param setName value set name
     * @param options query resource options object
     * @returns A promise that is resolved once the get action has been performed.
     * @method
     * @example valueSetClient.get('<value-set-name>')
                   .success(function (data) {   
                       // perform success action here 
                   })
                   .error(function (response, status, headers, config) {   
                       // perform error handling here 
                   });
    **/
    get(setName: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<IValueSet>> {
        return this.apiClient.get<IValueSet>(this.valueSetRouteDefinition.get(setName, options));
    }

    /**
     * Returns a promise that is resolved once the create value set action has been performed; this action creates a new value set resource.
     * @param data A key value object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create value set action has beend performed.
     * @method
     * @example valueSetClient.create({
                    name: '<value-set-name>',
                    description: '<description>',
                    values: [{value: '<value>'}]
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/
    create(data: IValueSet): PromiseLike<IHttpResponse<IValueSet>> {
        return this.apiClient.post<IValueSet>(this.routeDefinition.create(), this.valueSetRouteDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update value set action has been performed; this action updates a value set resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicValueSetService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(valueSet); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @param data Value set object used to update specified value set resource.
     * @returns A promise that is resolved once the update value set action has been performed.
     * @method
     * @example // valueSet is a resource previously fetched using get action. 
                    valueSet.name = '<new-name>'; 
                    valueSetClient.update(valueSet)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });
     **/
    update(data: IValueSet): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.valueSetRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will delete a value set resource if the action is completed successfully. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `valueSetClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(valueSet); 
     * let uri = params['model'].links('delete').href; 
     * ```
     * @param data A value set object used to delete specified value set resource.                  
     * @method                         
     * @example // valueSet is a resource previously fetched using get action.				 
                    valueSetClient.remove(valueSet)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IValueSet): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.valueSetRouteDefinition.delete(data));
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