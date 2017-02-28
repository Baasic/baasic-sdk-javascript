/* globals module */
/**  
 * @module baasicMediaVaultBatchRouteDefinition  
 * @description Baasic Media Vault Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Media Vault Batch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { IMediaEntry } from 'modules/mediaVault/contracts';

export class BaasicMediaVaultBatchRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(commonTypes.ModelMapper) protected modelMapper: ModelMapper) { super(modelMapper); }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method                          
     * @example baasicMediaVaultBatchRouteDefinition.update();                                  
     **/
    update(): any {
        return super.parse('media-vaults/batch').expand({});
    }

    /**                     
     * Parses remove route; this URI template does not expose any additional options.                                             
     * @method                           
     * @example baasicMediaVaultBatchRouteDefinition.remove();                                 
     **/
    delete(data: IMediaEntry[]): any {
        return super.parse('media-vaults/batch').expand(data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */