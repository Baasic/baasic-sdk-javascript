/* globals module */
/**  
 * @module passwordRecoveryRoute  
 * @description Baasic Password Recovery Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Password Recovery Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class PasswordRecoveryRoute extends BaseRoute {

    /**                  
    * Password recovery route with route and query parameters.
    **/
    public passwordRecoveryRoute: string = 'recover-password';

    constructor(@inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                  
     * Parses recover-password route, recover-password route doesn't expose any additional properties.                  
     * @method                         
     * @example passwordRecoveryRoute.passwordRecovery();                                
     **/
    passwordRecovery(): any {
        return super.baseCreate(this.passwordRecoveryRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
*/