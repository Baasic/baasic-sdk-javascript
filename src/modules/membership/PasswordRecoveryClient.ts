/* globals module */
/**  
 * @module passwordRecoveryClient  
 * @description  Password Recovery Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `passwordRecoveryClient` uses `passwordRecoveryRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import { PasswordRecoveryRoute, TYPES as membershipTypes } from './';
import { IRequestPasswordReset, IResetPassword } from './contracts';

@injectable()
export class PasswordRecoveryClient {

    /**                 
     * Provides direct access to `passwordRecoveryRoute`.                 
     * @method                        
     * @example passwordRecoveryClient.routeDefinition.requestReset(data);                 
     **/
    get routeDefinition(): PasswordRecoveryRoute {
        return this.passwordRecoveryRoute;
    }

    constructor(
        @inject(membershipTypes.PasswordRecoveryRoute) protected passwordRecoveryRoute: PasswordRecoveryRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /** 				
     * Returns a promise that is resolved once the password recovery requestReset action is completed. This action initiates the password recovery process for the user.			
     * @method
     * @param data A password recovery object which contains parameters required for the password retrieval request. 	 				
     * @example passwordRecoveryClient.requestReset({ 
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
        return this.apiClient.post(this.passwordRecoveryRoute.passwordRecovery(), data);
    }

    /** 				
     * Returns a promise that is resolved once the password reset action is completed. This updates user's password selection. 		
     * @method
     * @param data Password recovery object used to update user's current password selection.		 				
     * @example passwordRecoveryClient.reset({   
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
        return this.apiClient.put(this.passwordRecoveryRoute.passwordRecovery(), data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/