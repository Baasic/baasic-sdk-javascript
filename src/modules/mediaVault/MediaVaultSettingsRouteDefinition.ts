/* globals module */
/**  
 * @module mediaVaultSettingsRoute  
 * @description Baasic Media Vault Settings Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Settings Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class MediaVaultSettingsRoute extends BaseRoute {

    public readonly getRoute: string = 'media-vault-settings';

    public readonly updateRoute: string = 'media-vault-settings';
    
    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses get route; this route doesn not expose any additional options.                     
     * @method                   
     * @example mediaVaultSettingsRoute.get();                                   
     **/
    get(): any {
        return super.baseCreate(this.getRoute, {});
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method                          
     * @example mediaVaultSettingsRoute.update();                                  
     **/
    update(): any {
        return super.baseCreate(this.updateRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */