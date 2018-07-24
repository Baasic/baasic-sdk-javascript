/* globals module */
/**  
 * @module commerceProductInstanceFilesBatchRoute  
 * @description Baasic Product Instance Files Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Product Files Batch Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../common';
import { IAppOptions, TYPES as coreTypes } from '../core/contracts';

@injectable()
export class CommerceProductInstanceFilesBatchRoute extends BaseRoute {

    public readonly unlinkRoute: string = 'products/{productId}/files/batch/unlink';

    public readonly updateRoute: string = 'products/{productId}/files/batch';

    public readonly linkRoute: string = 'products/{productId}/files/batch/link';

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                     
     * Parses unlink route; this URI template does not expose any additional options.                                                        
     * @method
     * @param productId Product file id of the original product file used to identify product files on which delete action should be performed.
     * @example productInstanceFilesBatchRoute.unlink(productId);                                  
     **/
    unlink(productId: string): any {
        let params = { productId: productId };
        return super.baseCreate(this.unlinkRoute, params);
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.  
     * @method
     * @param productId Product id which uniquely identifies product whose product file need to be updated.                           
     * @example productInstanceFilesStreamsRoute.update(productId);                                  
     **/
    update(productId: string): any {
        let params = { productId: productId };
        return super.baseCreate(this.updateRoute, params);
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method
     * @param productId Product slug or id which uniquely identifies product whose product files need to be linked.                           
     * @example productInstanceFilesStreamsRoute.link(productId);                                  
     **/
    link(productId: string): any {
        let params = { productId: productId };
        return super.baseCreate(this.linkRoute, params);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/
