/* globals module */
/**  
 * @module mediaVaultBatchRoute  
 * @description Baasic Media Vault Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Batch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from '../../common';
import { IMediaEntry } from './contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class MediaVaultBatchRoute extends BaseRoute {

    public readonly updateRoute: string = 'media-vaults/batch';

    public readonly deleteRoute: string = 'media-vaults/batch';
    
    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method                          
     * @example mediaVaultBatchRoute.update();                                  
     **/
    update(): any {
        return super.baseUpdate(this.updateRoute, {});
    }

    /**                     
     * Parses remove route; this URI template does not expose any additional options.                                             
     * @method                           
     * @example mediaVaultBatchRoute.delete();                                 
     **/
    delete(): any {
        return super.baseDelete(this.deleteRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */