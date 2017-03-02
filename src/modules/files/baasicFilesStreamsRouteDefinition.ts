/* globals module */
/**  
 * @module baasicFilesStreamsRouteDefinition  
 * @description Baasic Files Streams Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class BaasicFilesStreamsRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses get route; this route should be expanded with id or path of desired file stream. Additional supported items are:                     
     * - `width` - width of desired derived image.                     
     * - `height` - height of desired derived image.                     
     * @method                 
     * @example baasicFilesStreamsRouteDefinition.get({id: '<path>'});                                   
     **/
    get(data: any): any {
        if (!this.utility.isObject(data)) {
            data = {
                id: data
            };
        }
        return super.parse('file-streams/{id}/{?width,height}').expand(data);
    }

    /**                     
     * Parses update route; this route should be expanded with the id or path of the previously saved resource. Additional supported items are:                     
     * - `width` - width of derived image to update.                     
     * - `height` - height of derived image to update.                                        
     * @method                      
     * @example baasicFilesStreamsRouteDefinition.update({id: '<path>'});                                   
     **/
    update(data: any): any {
        if (!this.utility.isObject(data)) {
            data = {
                id: data
            };
        }
        return super.parse('file-streams/{id}/{?width,height}').expand(data);
    }

    /**                     
     * Parses create route; this route should be expanded with the path which indicates where the stream will be saved.                     
     * @method                     
     * @example baasicFilesStreamsRouteDefinition.create({path: '<path>'});                                   
     **/
    create(data: any) {
        if (!this.utility.isObject(data)) {
            data = {
                path: data
            };
        }
        return super.parse('file-streams/{path}').expand(data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */