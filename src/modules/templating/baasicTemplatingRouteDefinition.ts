/*global module */
/**  
 * @module templatingRouteDefinition  
 * @description Baasic Templating Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Templating Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from 'inversify';
import { BaseRouteDefinition, TYPES as commonTypes } from 'common';
import { IGetRequestOptions, IOptions } from 'common/contracts';
import { TemplatingBatchRouteDefinition, TYPES as templatingTypes } from 'modules/templating';
import { ITemplate } from 'modules/templating/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class TemplatingRouteDefinition extends BaseRouteDefinition {

    public readonly findRoute: string = 'templates/{?searchQuery,page,rpp,sort,embed,fields,moduleNames}';

    public readonly getRoute: string = 'templates/{id}/{?embed,fields}';

    public readonly createRoute: string = 'templates';

    public readonly updateRoute: string = 'templates/{id}';

    public readonly deleteRoute: string = 'templates/{id}';

    get batch(): TemplatingBatchRouteDefinition {
        return this.templatingBatchRouteDefinition;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(templatingTypes.TemplatingBatchRouteDefinition) protected templatingBatchRouteDefinition: TemplatingBatchRouteDefinition
    ) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify template resources using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain template subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.               
     * - `sort` - A string used to set the template property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options.                        
     * @example templatingRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route which must be expanded with the Id of the previously created template resource in the system.                 
     * @method
     * @param id Template id which uniquely identifies Template resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example templatingRouteDefinition.get({id: '<template-id>'});                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**                 
     * Parses create route; this URI template does not expose any additional options.                 
     * @method                        
     * @example templatingRouteDefinition.create();                              
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /**                 
     * Parses update route; this URI template does not expose any additional options.                 
     * @method
     * @param data An template object used to update specified Template resource.                        
     * @example templatingRouteDefinition.update(data);                              
     **/
    update(data: ITemplate): any {
        return super.baseUpdate(this.updateRoute, data)
    }

    /**                 
     * Parses delete route; this URI template does not expose any additional options.                 
     * @method
     * @param data An template object used to delete specified Template resource.                        
     * @example templatingRouteDefinition.update(data);                              
     **/
    delete(data: ITemplate): any {
        return super.baseDelete(this.deleteRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */