/*global module */ 
/**  
 * @module baasicTemplatingBatchRouteDefinition  
 * @description Baasic Templating Batch Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Templating Batch Route Definition to obtain a needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { BaasicBaseRouteDefinition, ModelMapper } from 'common';

export class BaasicTemplatingBatchRouteDefinition extends BaasicBaseRouteDefinition {

    constructor(protected modelMapper: ModelMapper) { super(modelMapper); }

     /**                     
      * Parses create route; this URI template does not expose any additional options.                     
      * @method                           
      * @example baasicTemplatingBatchRouteDefinition.create();                                  
      **/
    create(): any {
        return super.baseCreate('templates/batch', {});
    }

    /**                     
     * Parses update route; this URI template does not expose any additional options.                     
     * @method                           
     * @example baasicTemplatingBatchRouteDefinition.update();                                  
     **/
    update(): any {
        return super.parse('templates/batch').expand({});
    }

      /**                     
       * Parses remove route; this URI template does not expose any additional options.                     
       * @method                           
       * @example baasicTemplatingBatchRouteDefinition.delete();                                  
       **/
    delete(): any {
        return super.parse('templates/batch').expand({});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route definition. 
 */