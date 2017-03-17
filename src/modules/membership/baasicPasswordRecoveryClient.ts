/* globals module */
/**  
 * @module baasicPasswordRecoveryClient  
 * @description  Password Recovery Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `baasicPasswordRecoveryClient` uses `baasicPasswordRecoveryRouteDefinition`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { BaasicPasswordRecoveryRouteDefinition, TYPES as membershipTypes } from 'modules/membership';
import { IRequestPasswordReset, IResetPassword } from 'modules/membership/contracts';

@injectable()
export class PasswordRecoveryClient {

    /**                 
     * Provides direct access to `baasicPasswordRecoveryRouteDefinition`.                 
     * @method                        
     * @example baasicPasswordRecoveryClient.routeDefinition.requestReset(data);                 
     **/
    get routeDefinition(): BaasicPasswordRecoveryRouteDefinition {
        return this.baasicPasswordRecoveryRouteDefinition;
    }

    constructor(
        @inject(membershipTypes.BaasicPasswordRecoveryRouteDefinition) protected baasicPasswordRecoveryRouteDefinition: BaasicPasswordRecoveryRouteDefinition,
        @inject(httpTYPES.ApiClient) protected baasicApiClient: ApiClient
    ) { }

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
    requestReset(data: IRequestPasswordReset): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.post(this.baasicPasswordRecoveryRouteDefinition.passwordRecovery(), data);
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
    reset(data: IResetPassword): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.put(this.baasicPasswordRecoveryRouteDefinition.passwordRecovery(), data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/