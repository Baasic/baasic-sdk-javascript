/* globals module */
/**  
 * @module keyValueRouteDefinition 
 * @description Baasic Key Value Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Key Value Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRouteDefinition, TYPES as commonTYPES } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { IKeyValue } from 'modules/keyValue/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class KeyValueRouteDefinition extends BaseRouteDefinition {

    public readonly findRoute: string = 'key-values/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'key-values/{id}/{?embed,fields}';

    public readonly createRoute: string = 'key-values';

    public readonly updateRoute: string = 'key-values/{id}';

    public readonly deleteRoute: string = 'key-values/{id}';
    
    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    )
    { super(appOptions); }

    /**                 
     * Parses find key value route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify key value resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain key value subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the key value property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example keyValueRouteDefinition.find(options);                               
     **/
    find(options: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get key value route which must be expanded with the Id of the previously created key value resource in the system.                 
     * @method
     * @param id Key value resource unique identifier.
     * @param options Query resource options object.                    
     * @example keyValueRouteDefinition.get();                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses create key value route; this URI template does not expose any additional options.                 
     * @method                        
     * @example keyValueRouteDefinition.create();                           
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**
     * Parses update key value route.
     * @method
     * @param data Key Value object used to create update route.
     * @example keyValueRouteDefinition.update(data);
     */
    update(data: IKeyValue): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delete key value route.
     * @method
     * @param data Key Value object used to create delete route.
     * @example keyValueRouteDefinition.delete(data);
     */
    delete(data: IKeyValue): any {
        return super.baseDelete(this.deleteRoute, data);
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd 
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */