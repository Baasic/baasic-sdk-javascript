/**  
 * @module baasicValueSetClient
 * @description Baasic Value Set Client provides an easy way to consume Baasic Value Set REST end-points. In order to obtain needed routes `baasicValueSetService` uses `baasicValueSetRouteService`. 
 */

import { BaasicValueSetItemClient, BaasicValueSetRouteDefinition } from 'modules/valueSet';
import { IValueSet } from 'modules/valueSet/contracts';
import { IBaasicQueryModel, IOptions } from 'common/contracts';

export class BaasicValueSetClient {

    
    get items(): BaasicValueSetItemClient {
        return this.baasicValueSetItemClient;
    }

     /**
      * Provides direct access to `baasicValueSetRouteDefinition`.
      * @method
      * @example baasicValueSetClient.routeDefinition.get().expand(expandObject);
     **/ 
    get routeDefinition(): BaasicValueSetRouteDefinition {
        return this.baasicValueSetRouteDefinition;
    }

    constructor(
        protected baasicValueSetRouteDefinition: BaasicValueSetRouteDefinition,
        protected baasicValueSetItemClient: BaasicValueSetItemClient
    ) {}

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of value set resources matching given criteria.
     * @param options query resource options object
     * @returns A promise that is resolved once the find action has beend performed.
     * @method 
     * @example baasicValueSetClient.find({
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
    find(options: IOptions): Promise<IBaasicQueryModel<IValueSet>> {
        return this.baasicApiHttp.get(this.baasicValueSetRouteDefinition.find(options));
    }

     /**
      * Returns a promise that is resolved once the get action has been performed. Success response returns the specified value set resource.
      * @param setName value set name
      * @param options query resource options object
      * @returns A promise that is resolved once the get action has been performed.
      * @method
      * @example baasicValueSetClient.get('<value-set-name>')
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });
     **/	
    get(setName: string, options?: IOptions): Promise<IValueSet> {
        return this.baasicApiHttp.get(this.baasicValueSetRouteDefinition.get(setName, options).expand(this.modelMapper.getParams(setName, options, 'setName')));
    }

    /**
     * Returns a promise that is resolved once the create value set action has been performed; this action creates a new value set resource.
     * @param data A key value object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create value set action has beend performed.
     * @method
     * @example baasicValueSetClient.create({
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
    create(data: IValueSet): Promise<IValueSet> {
        return this.baasicApiHttp.post(this.baasicValueSetRouteDefinition.create(), this.baasicValueSetRouteDefinition.createParams(data));
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
     * @example 
        // valueSet is a resource previously fetched using get action. 
        valueSet.name = '<new-name>'; 
        baasicValueSetClient.update(valueSet)
            .then(function (data) {   
                // perform success action here 
            },
             function (response, status, headers, config) {   
                // perform error handling here 
            });
     **/	
    update(data: IValueSet): Promise<IValueSet> {
        return this.baasicApiHttp.put(this.baasicValueSetRouteDefinition.update(data), this.baasicValueSetRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will delete a value set resource if the action is completed successfully. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicValueSetClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(valueSet); 
     * let uri = params['model'].links('delete').href; 
     * ```
     * @param data A value set object used to delete specified value set resource.                  
     * @method                         
     * @example // valueSet is a resource previously fetched using get action.				 
                    baasicValueSetClient.remove(valueSet)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/					
    remove(data: IValueSet): Promise<void> {
        return this.baasicApiHttp.delete(this.baasicValueSetRouteDefinition.delete(data));
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