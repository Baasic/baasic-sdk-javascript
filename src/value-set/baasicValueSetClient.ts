/**  
 * @module baasicValueSetClient
 * @description Baasic Value Set Client provides an easy way to consume Baasic Value Set REST end-points. In order to obtain needed routes `baasicValueSetService` uses `baasicValueSetRouteService`. 
 */

import { BaasicValueSetRouteDefinition } from './baasicValueSetRouteDefinition';
import { IOptions } from '../IOptions';
import { ModelMapper } from '../modelMapper';

export class BaasicValueSetClient {

    public items: BaasicValueSetItemClient = new BaasicValueSetItemClient(this.modelMapper, this.baasicValueSetRouteDefinition);

     /**
      * Provides direct access to `baasicValueSetRouteDefinition`.
      * @method
      * @example baasicValueSetClient.routeService.get().expand(expandObject);
     **/ 
    get routeDefinition(): BaasicValueSetRouteDefinition {
        return this.baasicValueSetRouteDefinition;
    }

    constructor(
        private modelMapper: ModelMapper,
        private baasicValueSetRouteDefinition: BaasicValueSetRouteDefinition
    ) {}

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of value set resources matching given criteria.
     * @method 
     * @example baasicValueSetClient.find({
                    pageNumber: 1,
                    pageSize : 10,
                    orderBy : '<field>',
                    orderDirection : '<asc|desc>', 
                    search : '<search-phrase>'
                })
                .success(function (collection) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/ 					
    find(options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicValueSetRouteDefinition.find().expand(this.modelMapper.findParams(options)));
    }

     /**
      * Returns a promise that is resolved once the get action has been performed. Success response returns the specified value set resource.
      * @method
      * @example baasicValueSetClient.get('<value-set-name>')
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });
     **/	
    get(setName: string, options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicValueSetRouteDefinition.get().expand(this.modelMapper.getParams(setName, options, 'setName')));
    }

    /**
     * Returns a promise that is resolved once the create value set action has been performed; this action creates a new value set resource.
     * @method
     * @example baasicValueSetClient.create({
                    name: '<value-set-name>',
                    description: '<description>',
                    values: [{value: '<value>'}]
                })
                .success(function (data) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/
    create(data: any): Promise<any> {
        return this.baasicApiHttp.post(this.baasicValueSetRouteDefinition.create().expand({}), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }
    
    /**
     * Returns a promise that is resolved once the update value set action has been performed; this action updates a value set resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicValueSetService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(valueSet); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @method
     * @example 
        // valueSet is a resource previously fetched using get action. 
        valueSet.name = '<new-name>'; 
        baasicValueSetClient.update(valueSet)
            .success(function (data) {   
                // perform success action here 
            })
            .error(function (response, status, headers, config) {   
                // perform error handling here 
            });
     **/	
    update(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicValueSetRouteDefinition.update(params), params[this.baasicConstants.modelPropertyName]);
    }
}


class BaasicValueSetItemClient {

    constructor(
        private modelMapper: ModelMapper,
        public baasicValueSetRouteDefinition: BaasicValueSetRouteDefinition
    ) {}

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of value set item resources matching given criteria.
     * @method items.find
     * @example baasicValueSetClient.items.find({
                    setName: '<value-set-name>',
                    pageNumber : 1, 
                    pageSize : 10, 
                    orderBy : '<field>',
                    orderDirection : '<asc|desc>',
                    search : '<search-phrase>' })
                .success(function (collection) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/ 				
    find(options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicValueSetRouteDefinition.items.find().expand(this.modelMapper.findParams(options)));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified value set item resource.
     * @method items.get
     * @example baasicValueSetClient.items.get('<value-set-name>', '<set-item-id>')
                   .success(function (data) {   
                        // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/	
    get(setName: string, id: string, options: IOptions): Promise<any> {
         let params = angular.extend({}, options);
         params.setName = setName;
         return this.baasicApiHttp.get(this.baasicValueSetRouteDefinition.items.get().expand(this.modelMapper.getParams(id, params)));
    }

    /**
     * Returns a promise that is resolved once the create value set item action has been performed; this action creates a new value set item resource.
     * @method items.create
     * @example baasicValueSetClient.items.create({
                    setId: '<value-set-id>', 
                    value: '<value>'
                })
                .success(function (data) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/ 						
    create(data: any): Promise<any> {
        return this.baasicApiHttp.post(this.baasicValueSetRouteDefinition.items.create().expand(data), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the update value set item action has been performed; this action updates a value set item resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicValueSetClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(valueSetItem); 
     * let uri = params['model'].links('put').href; ```
     * @method items.update
     * @example // valueSetItem is a resource previously fetched using get action. 
                valueSetItem.value = '<new-value>'; 
                baasicValueSetClient.items.update(valueSetItem)
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {  
                         // perform error handling here 
                    });
     **/	
    update(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicValueSetRouteDefinition.items.update(params), params[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will delete a value set item if the action is completed successfully. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicValueSetClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(valueSetItem); 
     * let uri = params['model'].links('delete').href; 
     * ```
     * @method items.remove 
     * @example // valueSetItem is a resource previously fetched using get action.
                baasicValueSetClient.items.remove(valueSetItem)
                    .success(function (data) {   
                        // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/	
    remove(data: any): Promise<any> {
        let params = this.modelMapper.removeParams(data);
        return this.baasicApiHttp.delete(this.baasicValueSetRouteDefinition.items.delete(params));
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