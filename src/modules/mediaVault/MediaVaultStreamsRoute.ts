/* globals module */
/**  
 * @module mediaVaultStreamsRoute  
 * @description Baasic MediaVault Streams Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Streams Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

@injectable()
export class MediaVaultStreamsRoute extends BaseRoute {

    public readonly getRoute: string = 'media-vault-streams/{id}/{?width,height}';

    public readonly createRoute: string = 'media-vault-streams/{path}';

    public readonly updateRoute: string = 'media-vault-streams/{id}/{?width,height}';
    
    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses get route; this route should be expanded with id or path of desired media vault stream. Additional supported items are:                     
     * - `width` - width of desired derived image.                     
     * - `height` - height of desired derived image.                                        
     * @method                    
     * @example mediaVaultRoute.get({id: '<path>'});                                   
     **/
    get(data: any): any {
        if (this.utility.isObject(data)) {
            data = {
                id: data
            };
        }
        return super.baseCreate(this.getRoute, data);
    }

    /**                     
     * Parses create route; this route should be expanded with the path which indicates where the stream will be saved.                     
     * @method                   
     * @example mediaVaultStreamsRoute.create({path: '<path>'});                                   
     **/
    create(data: any): any {
        if (this.utility.isObject(data)) {
            data = {
                path: data
            };
        }
        return super.baseCreate(this.createRoute, data);
    }

    /**                     
     * Parses update route; this route should be expanded with the id or path of the previously saved media vault resource. Additional supported items are:                     
     * - `width` - width of desired derived image.                     
     * - `height` - height of desired derived image.                                         
     * @method                   
     * @example mediaVaultStreamsRoute.update({id: '<path>'});                                   
     **/
    update(data: any): any {
        if (this.utility.isObject(data)) {
            data = {
                id: data
            };
        }
        return super.baseUpdate(this.updateRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */