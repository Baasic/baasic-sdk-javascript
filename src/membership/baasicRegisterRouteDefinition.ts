/* globals module */ 
/**  
 * @module baasicRegisterRouteDefinition  
 * @description Baasic Register Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Register Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { BaasicBaseRouteDefinition } from 'common';

export class BaasicRegisterRouteDefinition {
    
    constructor(private baasicBaseRouteDefinition: BaasicBaseRouteDefinition) {}
    
    /** 			
     * Parses register route, this route doesn't support any additional properties. 			
     * @method        			
     * @example baasicRegisterRouteDefinition.create().expand({});               			
     **/
    create(): any {
        return this.baasicBaseRouteDefinition.create('register');
    }

    /** 			
     * Parses activation route; route should be expanded with the `activationToken` which uniquely identifies the user account that needs to be activated. 			
     * @method        			
     * @example baasicRegisterRouteDefinition.activate().expand({activationToken: '<activation-token>'});               			**/ 
    activate(): any {
        return this.baasicUriTemplateProcessor.parse('register/activate/{activationToken}/');
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/