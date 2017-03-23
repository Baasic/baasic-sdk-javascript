/* globals module */
/**  
 * @module registerRoute  
 * @description Baasic Register Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Register Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class RegisterRoute extends BaseRoute {

    /**                  
    * Create route with route and query parameters.
    **/
    public createRoute: string = 'register';
    /**                  
    * Activate route with route and query parameters.
    **/
    public activateRoute: string = 'register/activate/{activationToken}/';


    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /** 			
     * Parses register route, this route doesn't support any additional properties. 			
     * @method        			
     * @example registerRoute.create();               			
     **/
    create(): any {
        return super.baseCreate(this.createRoute, {});
    }

    /** 			
     * Parses activation route; route should be expanded with the `activationToken` which uniquely identifies the user account that needs to be activated. 			
     * @method
     * @param data Security code which uniquely identifies user account that needs to be activated.        			
     * @example registerRoute.activate({activationToken: '<activation-token>'});               			
     **/
    activate(data: string): any {
        let params = this.modelMapper.getParams(data, undefined, 'activationToken');
        return super.baseCreate(this.activateRoute, params);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
*/