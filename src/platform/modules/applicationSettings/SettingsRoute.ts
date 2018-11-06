/* globals module */
/**  
 * @module settingsRoute  
 * @description Baasic Settings Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Settings Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */
import { injectable, inject } from "inversify";
import { BaseRoute } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';
import { IApplicationSettings } from './contracts';

@injectable()
export class SettingsRoute extends BaseRoute {


    /**                  
     * Settings route with route and query parameters.
     **/
    public getRoute: string = 'settings';

    /**                  
     * Settings route with route and query parameters.
     **/
    public updateRoute: string = 'settings';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) {
        super(appOptions);
    }

    /**                 
     * Parses get version route.
     * @method                        
     * @example versionRoute.get()
     **/
    get(): any {
        return super.baseGet(this.getRoute);
    }

    /**
     * Parses update settings route.
     * @method
     * @param data A settings object used to update specified settings resource.
     * @example settingsRoute.update(data);
     */
    update(data: IApplicationSettings): any {
        return super.baseUpdate(this.updateRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */