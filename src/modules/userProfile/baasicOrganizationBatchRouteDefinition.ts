/* globals module */
/**  
 * @module baasicOrganizationBatchRouteDefinition  
 * @description Baasic Organization Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Organization Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper, TYPES as commonTypes } from 'common';
import { injectable, inject } from "inversify";

export class BaasicOrganizationBatchRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(commonTypes.ModelMapper) protected modelMapper: ModelMapper) { super(modelMapper); }

    /**                     
     * Parses create route; this URI template does not expose any additional options.                     
     * @method                           
     * @example baasicOrganizationBatchRouteDefinition.create();                                  
     **/
    create(): any {
        return super.baseCreate('lookups/organizations/batch', {});
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method                           
     * @example baasicOrganizationBatchRouteDefinition.update();                                  
     **/
    update(): any {
        return super.parse('lookups/organizations/batch').expand({});
    }

    /**                     
     * Parses remove route; this URI template does not expose any additional options.                     
     * @method                          
     * @example baasicOrganizationBatchRouteDefinition.delete();                                  
     **/
    delete(): any {
        return super.parse('lookups/organizations/batch').expand({});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */