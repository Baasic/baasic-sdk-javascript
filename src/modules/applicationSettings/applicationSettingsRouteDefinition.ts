/* globals module */
/**  
 * @module applicationSettingsRouteDefinition  
 * @description Baasic Application Settings Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Application Settings Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IOptions } from 'common/contracts';
import { IApplication } from 'modules/applicationSettings/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class ApplicationSettingsRouteDefinition extends BaseRouteDefinition {

    public readonly getRoute: string = 'applications/{?embed,fields}';

    public readonly updateRoute: string = 'applications/';
    
    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param options Query resource options object.                        
     * @example applicationSettingsRouteDefinition.get();                               
     **/
    get(options: IOptions): any {
        return super.baseGet(this.getRoute, undefined, options);
    }

    /**                 
     * Parses update route; this route doesn't expose any properties.                 
     * @method
     * @param data An application object used to update application settings of the specified application resource.                        
     * @example applicationSettingsRouteDefinition.update();                               
     **/
    update(data: IApplication): any {
        return super.baseUpdate(this.updateRoute, data);
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