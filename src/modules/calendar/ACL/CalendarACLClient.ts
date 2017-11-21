/* globals module */
/**  
 * @module calendarACLClient  
 * @description  Calendar ACL Client provides an easy way to consume Calendar REST API end-points. In order to obtain a needed routes `calendarACLClient` uses `calendarACLRoute`. 
 */

import { injectable, inject } from "inversify";
import { IACLOptions, IACLPolicy, IQueryModel, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { CalendarACLRoute, TYPES as calendarTypes } from '../';

@injectable()
export class CalendarACLClient {

    get routeDefinition(): CalendarACLRoute {
        return this.calendarACLRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarACLRoute) protected calendarACLRoute: CalendarACLRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns a list of ACL policies established for the specified calendar resource.                     
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                            
     * @example calendarClient.get({id: '<id>'})
                .then(function (data) {   
                    // perform success action here 
                },
                function (response, status, headers, config) {   
                    // perform error handling here 
                });                     
     */
    get(options?: IACLOptions): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.apiClient.get<IACLPolicy[]>(this.routeDefinition.get(options));
    }

    /**                     
     * Returns a promise that is resolved once the update acl action has been performed, this action creates new ACL policy for the specified calendar resource.                     
     * @method 
     * @param options ACL options object.                      
     * @example let options = {id : '<id>'}; 
                let aclObj =  {  actionId: '<action-id'>,  roleId: '<roleId>',  userId: '<userId>' }; 
                options[baasicConstants.modelPropertyName] = aclObj; 
                calendarACLClient.update(options)
                .then(function (data) {   
                    // perform success action here 
                },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                }); 				    
     */
    update(options: IACLOptions[]): PromiseLike<IHttpResponse<IACLPolicy[]>> {
        return this.apiClient.put<IACLPolicy[]>(this.routeDefinition.update(options), this.routeDefinition.updateParams(options));
    }

    /**                     
     * Returns a promise that is resolved once the removeByUser action has been performed. This action deletes ACL policy assigned to the specified user and calendar resource.                     
     * @method 
     * @param id User calendar data id which uniquely identifies user calendar data resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and user calendar data resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"  
     * @param user A value that uniquely identifies user for which ACL policy needs to be removed.
     * @param data ACL Policy object used to delete specified item in the system.
     * @returns A promise that is resolved once the removeByUser action has been performed.                    
     * @example calendarACLClient.removeByUser('<id>', '<access-action>', '<username>')
                .then(function (data) {   
                    // perform success action here 
                },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                }); 				    
     */
    removeByUser(id: string, action: string, user: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.calendarACLRoute.deleteByUser(id, action, user, data));
    }

    /**                     
     * Returns a promise that is resolved once the removeByRole action has been performed. This action deletes ACL policy assigned to the specified role and calendar resource.                     
     * @method 
     * @param id User calendar data id which uniquely identifies user calendar data resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and user calendar data resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"  
     * @param role A value that uniquely identifies role for which ACL policy needs to be removed.
     * @param data ACL Policy object used to delete specified item in the system.
     * @returns A promise that is resolved once the removeByRole action has been performed.                   
     * @example calendarACLClient.removeByRole('<id>', '<access-action>', '<role-name>')
                .then(function (data) {   
                    // perform success action here 
                },
                    function (response, status, headers, config) {   
                        // perform error handling here 
                }); 				    
     */
    removeByRole(id: string, action: string, role: string, data: IACLPolicy): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.calendarACLRoute.deleteByRole(id, action, role, data));
    }
}

/**  
 * @copyright (c) 2017 Mono Ltd  
 * @license MIT  
 * @author Mono Ltd  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */