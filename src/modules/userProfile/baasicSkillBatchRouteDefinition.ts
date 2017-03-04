/* globals module */
/**  
 * @module baasicSkillBatchRouteDefinition  
 * @description Baasic Skill Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Skill Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaasicBaseRouteDefinition, TYPES as commonTypes } from 'common';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class BaasicSkillBatchRouteDefinition extends BaasicBaseRouteDefinition {

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**                     
     * Parses create route; this URI template does not expose any additional options.                     
     * @method                           
     * @example baasicSkillBatchRouteDefinition.create();                                  
     **/
    create(): any {
        return super.baseCreate('profile/lookups/skills/batch', {});
    }

    /**                     
      * Parses update route; this URI template does not expose any additional options.                     
      * @method                           
      * @example baasicSkillBatchRouteDefinition.update();                                  
      **/
    update(): any {
        return super.parse('profile/lookups/skills/batch').expand({});
    }

    /**                     
      * Parses delete route; this URI template does not expose any additional options.                     
      * @method                           
      * @example baasicSkillBatchRouteDefinition.delete();                                  
      **/
    delete(): any {
        return super.parse('profile/lookups/skills/batch').expand({});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
 */