/* globals module */
/**  
 * @module baasicFilesRouteDefinition  
 * @description Baasic Files Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { BaasicFilesStreamsRouteDefinition, TYPES as filesTypes } from 'modules/files';
import { IFileEntry } from 'modules/files/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class BaasicFilesRouteDefinition extends BaasicBaseRouteDefinition {

    get streams(): BaasicFilesStreamsRouteDefinition {
        return this.baasicFilesStreamsRouteDefinition;
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions,
        @inject(filesTypes.BaasicFilesStreamsRouteDefinition) protected baasicFilesStreamsRouteDefinition: BaasicFilesStreamsRouteDefinition
    ) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing file properties using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain file subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the file property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example baasicFilesRouteDefinition.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind('files/{?searchQuery,page,rpp,sort,embed,fields}', options);
    }

    /**                 
     * Parses get route; this route should be expanded with the Id of the file resource.                 
     * @method 
     * @param id File id which uniquely identifies file resource that needs to be retrieved.
     * @param options Query resource options object.                           
     * @example baasicFilesRouteDefinition.get({id: '<file-id>'});                               
     **/
    get(id: string, options?: IOptions): any {
        return super.baseGet('files/{id}/{?embed,fields}', id, options);
    }

    /**                 
     * Parses update route; this route should be expanded with the Id of the file resource.                 
     * @method 
     * @param data A file entry object used to update specific file entry resource in the system.                           
     * @example baasicFilesRouteDefinition.get({id: '<file-id>'});                               
     **/
    update(data: IFileEntry): any {
        return super.baseUpdate('files/{id}', data);
    }

    /**                 
     * Parses unlink route; this route should be expanded with the Id of the file resource.                 
     * @method 
     * @param data A file entry object used to update specific file entry resource in the system.                           
     * @example baasicFilesRouteDefinition.unlink({id: '<file-id>'});                               
     **/
    unlink(data: IFileEntry, options?: Object): any {
        return super.baseDelete('files/unlink/{id}/{?height,width}', data, options, 'unlink');
    }



    /**                 
     * Parses link route; this URI template does not expose any additional options.                 
     * @method                        
     * @example baasicFilesRouteDefinition.link();                              
     **/
    link(): any {
        return super.baseCreate('files/link', {});
    }
}

/**  
 * @overview 
***Notes:** 
- Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
- [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
- All end-point objects are transformed by the associated route service. 
*/