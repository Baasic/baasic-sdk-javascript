/**  
 * @module baasicValueSetItemClient
 * @description Baasic Value Set Item Client provides an easy way to consume Baasic Value Set Item REST end-points. In order to obtain needed routes `baasicValueSetItemClient` uses `baasicValueSetItemRouteDefinition`. 
 */

import { BaasicValueSetRouteDefinition } from 'valueSet';
import { IValueSetItem } from 'valueSet/contracts';
import { ModelMapper, Utility } from '..';
import { IBaasicQueryModel, IOptions } from 'common/contracts';

export class BaasicValueSetItemClient {

    constructor(
        private modelMapper: ModelMapper,
        private baasicValueSetRouteDefinition: BaasicValueSetRouteDefinition,
        private utility: Utility
    ) {}

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of value set item resources matching given criteria.
     * @param options query resource options object
     * @returns A promise that is resolved once the find action has been performed.
     * @method items.find
     * @example baasicValueSetItemClient.find({
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
    find(options: IOptions): Promise<IBaasicQueryModel<IValueSetItem>> {
        return this.baasicApiHttp.get(this.baasicValueSetRouteDefinition.items.find().expand(this.modelMapper.findParams(options)));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified value set item resource.
     * @param setName value set name
     * @param id unique identifier of value set resource
     * @param options query resource options object
     * @returns A promise that is resolved once the get action has been performed.
     * @method items.get
     * @example baasicValueSetItemClient.get('<value-set-name>', '<set-item-id>')
                   .success(function (data) {   
                        // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/	
    get(setName: string, id: string, options: IOptions): Promise<IValueSetItem> {
         let params = this.utility.extend({}, options);
         params.setName = setName;
         return this.baasicApiHttp.get(this.baasicValueSetRouteDefinition.items.get().expand(this.modelMapper.getParams(id, params)));
    }

    /**
     * Returns a promise that is resolved once the create value set item action has been performed; this action creates a new value set item resource.
     * @param data A value set item object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create value set item action has been performed.
     * @method items.create
     * @example baasicValueSetItemClient.create({
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
    create(data: IValueSetItem): Promise<IValueSetItem> {
        return this.baasicApiHttp.post(this.baasicValueSetRouteDefinition.items.create().expand(data), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the update value set item action has been performed; this action updates a value set item resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicValueSetClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(valueSetItem); 
     * let uri = params['model'].links('put').href; 
     * ```
     * @param data A value set item object used to update specified value set resource.
     * @returns A promise that is resolved once the update value set item action has been performed.
     * @method items.update
     * @example // valueSetItem is a resource previously fetched using get action. 
                valueSetItem.value = '<new-value>'; 
                baasicValueSetItemClient.update(valueSetItem)
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {  
                         // perform error handling here 
                    });
     **/	
    update(data: IValueSetItem): Promise<IValueSetItem> {
        let params = this.modelMapper.updateParams(data);
        return this.baasicApiHttp.put(this.baasicValueSetRouteDefinition.items.update(params), params[this.baasicConstants.modelPropertyName]);
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will delete a value set item if the action is completed successfully. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicValueSetClient` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(valueSetItem); 
     * let uri = params['model'].links('delete').href; 
     * ```
     * @param data A value set item object used to delete specified value set resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @method items.remove 
     * @example // valueSetItem is a resource previously fetched using get action.
                baasicValueSetItemClient.remove(valueSetItem)
                    .success(function (data) {   
                        // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/	
    remove(data: IValueSetItem): Promise<void> {
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