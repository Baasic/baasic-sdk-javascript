/* globals module */
/**  
 * @module filesBatchRoute  
 * @description Baasic Files Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRoute, ModelMapper, TYPES as commonTypes } from 'common';
import { IFileEntry } from './contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

@injectable()
export class FilesBatchRoute extends BaseRoute {

    public readonly updateRoute: string = 'files/batch';

    public readonly linkRoute: string = 'files/batch/link';

    public readonly unlinkRoute: string = 'files/batch/unlink';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method                       
     * @example filesBatchRoute.update();                                  
     **/
    update(): any {
        return super.baseCreate(this.updateRoute, {});
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method                           
     * @example filesBatchRoute.link();                                  
     **/
    link(): any {
        return super.baseCreate(this.linkRoute, {});
    }

    /**                     
     * Parses unlink route; this URI template does not expose any additional options.                                                        
     * @method                       
     * @example filesBatchRoute.unlink();                                  
     **/
    unlink(): any {
        return super.baseCreate(this.unlinkRoute, {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */