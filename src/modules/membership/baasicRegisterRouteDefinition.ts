/* globals module */ 
/**  
 * @module baasicRegisterRouteDefinition  
 * @description Baasic Register Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Register Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { BaasicBaseRouteDefinition, ModelMapper } from 'common';

export class BaasicRegisterRouteDefinition extends BaasicBaseRouteDefinition {
    
    constructor(protected modelMapper: ModelMapper) { super(modelMapper); }
    
    /** 			
     * Parses register route, this route doesn't support any additional properties. 			
     * @method        			
     * @example baasicRegisterRouteDefinition.create();               			
     **/
    create(): any {
        return super.baseCreate('register', {});
    }

    /** 			
     * Parses activation route; route should be expanded with the `activationToken` which uniquely identifies the user account that needs to be activated. 			
     * @method
     * @param data Security code which uniquely identifies user account that needs to be activated.        			
     * @example baasicRegisterRouteDefinition.activate({activationToken: '<activation-token>'});               			
     **/ 
    activate(data: string): any {
        let params = this.modelMapper.getParams(data, undefined, 'activationToken');
        return this.baasicUriTemplateProcessor.parse('register/activate/{activationToken}/').expand(params);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/