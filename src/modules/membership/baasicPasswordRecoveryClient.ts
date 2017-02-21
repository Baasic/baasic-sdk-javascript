/* globals module */ 
/**  
 * @module baasicPasswordRecoveryClient  
 * @description Baasic Password Recovery Client provides an easy way to consume Baasic Password Recovery REST API end-points. In order to obtain needed routes `baasicPasswordRecoveryClient` uses `baasicPasswordRecoveryRouteDefinition`. 
*/

import { BaasicPasswordRecoveryRouteDefinition } from 'modules/membership';
import { IRequestPasswordReset, IResetPassword } from 'modules/membership/contracts';

export class BaasicPasswordRecoveryClient {

     /**                 
      * Provides direct access to `baasicPasswordRecoveryRouteDefinition`.                 
      * @method                        
      * @example baasicPasswordRecoveryClient.routeDefinition.requestReset(data);                 
      **/    
    get routeDefinition(): BaasicPasswordRecoveryRouteDefinition {
        return this.baasicPasswordRecoveryRouteDefinition;
    }
    
    constructor(protected baasicPasswordRecoveryRouteDefinition: BaasicPasswordRecoveryRouteDefinition) {}

    /** 				
     * Returns a promise that is resolved once the password recovery requestReset action is completed. This action initiates the password recovery process for the user.			
     * @method
     * @param data A password recovery object which contains parameters required for the password retrieval request. 	 				
     * @example baasicPasswordRecoveryClient.requestReset({ 
                    challengeIdentifier : '<challenge-identifier>',   
                    challengeResponse : '<challenge-response>',   
                    recoverUrl : '<recover-url>',   
                    username : '<username>' 
                })
                .then(function () {   
                    // perform success action here 
                },
                 function (data) {   
                    // perform error handling here 
                })
                .finally (function () {});								
     */
    requestReset(data: IRequestPasswordReset): Promise<any> {
        return this.baasicApiHttp({
            url: this.baasicPasswordRecoveryRouteDefinition.passwordRecovery(), 
            method: 'POST',                         
            data: data 
        });
    }

    /** 				
     * Returns a promise that is resolved once the password reset action is completed. This updates user's password selection. 		
     * @method
     * @param data Password recovery object used to update user's current password selection.		 				
     * @example baasicPasswordRecoveryClient.reset({   
                    newPassword : '<new-password>',   
                    passwordRecoveryToken : '<password-recovery-token>' 
                })
                .then(function () {   
                    // perform success action here 
                },
                 function (data) {   
                    // perform error handling here 
                })
                .finally (function () {});							
     */	
    reset(data: IResetPassword): Promise<any> {
        return this.baasicApiHttp({ 
            url: this.baasicPasswordRecoveryRouteDefinition.passwordRecovery(), 
            method: 'PUT', 
            data: data 
        });
    }   
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/