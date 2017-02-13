/**  
 * @module baasicKeyValueClient 
 * @description Baasic Key Value Client provides an easy way to consume Baasic Key Value REST API end-points. In order to obtain needed routes `baasicKeyValueClient` uses `baasicKeyValueRouteClient`. 
 */

import { BaasicKeyValueRouteDefinition } from './baasicKeyValueRouteDefinition';
import { IOptions } from '../IOptions';
import { ModelMapper } from '../modelMapper';

export class BaasicKeyValueClient {
    
    /**
     * Provides direct access to `baasicKeyValueRouteDefinition`.
     * @method
     * @example baasicKeyValueClient.routeService.get().expand(expandObject);
     **/ 
    get routeDefinition(): BaasicKeyValueRouteDefinition {
        return this.baasicKeyValueRouteDefinition;
    }
    
    constructor(
        private modelMapper: ModelMapper,
        private baasicKeyValueRouteDefinition: BaasicKeyValueRouteDefinition
    ) {}

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of key value resources matching the given criteria.
     * @method
     * @example baasicKeyValueClient.find({
                 pageNumber: 1, 
                 pageSize: 10, 
                 orderBy: '<field>', 
                 orderDirection: '<asc|desc>', 
                 search: '<search-phrase>'
                })
                .success(function (collection) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });                     
     **/ 	
    find(options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicKeyValueRouteDefinition.find().expand(this.modelMapper.findParams(options)));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified key value resource.
     * @method
     * @example baasicKeyValueClient.get('<key-value-id>')
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                  
     **/	
    get(id: string, options: IOptions): Promise<any> {
        return this.baasicApiHtpp.get(this.baasicKeyValueRouteDefinition.get().expand(this.modelMapper.findParams(options)));
    }

    /**
     * Returns a promise that is resolved once the create key value action has been performed; this action creates a new key value resource.
     * @method
     * @example baasicKeyValueClient.create({key: '<key>', value: '<value>', })
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });
     */ 		
    create(data: any): Promise<any> {
        return this.baasicApiHttp.post(this.baasicKeyValueRouteDefinition.create().expand(), 
                    this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the update key value action has been performed; this action updates a key value resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicKeyValueRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(keyValue); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @method
     * @example // keyValue is a resource previously fetched using get action. 
                   keyValue.value = '<new-value>'; 
                   baasicKeyValueClient.update(keyValue)
                   .success(function (data) {   
                       // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    }); 				
     **/					
    update(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicKeyValueRouteDefinition.update(params), params[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a key value resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicKeyValueRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(keyValue); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method 
     * @example // keyValue is a resource previously fetched using get action.				 
                    baasicKeyValueClient.remove(keyValue) 
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });
     **/	
    remove(data: any): Promise<any> {
        let params = this.modelMapper.removeParams(data);
        return this.baasicApiHttp.delete(this.baasicKeyValueRouteDefinition.delete(params), params[this.baasicConstants.modelProeprtyName]);
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