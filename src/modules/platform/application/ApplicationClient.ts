/* globals module */
/**  
 * @module applicationClient  
 * @description  Application Client provides an easy way to consume  Password Recovery REST API end-points. In order to obtain needed routes `applicationClient` uses `applicationRoute`. 
*/

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import { IQueryModel, IOptions } from '../../../common/contracts';;
import { ApplicationRoute, TYPES as applicationTypes } from './';
import { IPlatformApplication, INewPlatformApplication } from './contracts';

@injectable()
export class ApplicationClient {

    /**                 
     * Provides direct access to `applicationRoute`.                 
     * @method                                   
     **/
    get routeDefinition(): ApplicationRoute {
        return this.applicationRoute;
    }

    constructor(
        @inject(applicationTypes.ApplicationRoute) protected applicationRoute: ApplicationRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of application resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.                         
     * @example applicationClient.find({   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',   
                    search : '<search-phrase>' 
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                     
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IPlatformApplication>>> {
        return this.apiClient.get<IQueryModel<IPlatformApplication>>(this.routeDefinition.find(options));
    }

    /**                  
     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified application resource.               
     * @method
     * @param id A application identifier.
     * @param options Query resources options.
     * @returns A promise that is resolved once the get action has been performed.                           
     * @example applicationClient.get({   
                    id : '<id>', 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                  
     **/
    get(id: string): PromiseLike<IHttpResponse<IPlatformApplication>> {
        return this.apiClient.get<IPlatformApplication>(this.routeDefinition.get(id));
    }

    /**                  
     * Returns a promise that is resolved once the create application action has been performed; this action creates a new application.   
     * @method
     * @param data An application object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create application action has been performed.                                        
     * @example applicationClient.create({   
                    email : '<email>',   
                    password : '<password>',    
                    name : '<name>', 
                    identifier : '<identifier>', 
                    additionalProperty: '<additional-property>'  
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                    // perform error handling here 
                });                  
     **/
    create(data: INewPlatformApplication): PromiseLike<IHttpResponse<IPlatformApplication>> {
        return this.apiClient.post<IPlatformApplication>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update application action has been performed; this action updates a application.
     * @param data A application object used to update specified application resource.
     * @returns A promise that is resolved once the update application action has been performed.                  
     * @method                         
     * @example  applicationClient.update(application)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    update(data: IPlatformApplication): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove application action has been performed. This action will remove a application from the system if successfully completed.
     * @method
     * @param data  A application object used to delete specified application resource.
     * @returns A promise that is resolved once the remove application action has been performed.                           
     * @example applicationClient.remove(application)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        });						
     **/
    remove(data: IPlatformApplication): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.delete(this.routeDefinition.delete(data));
    }

    /**                  
     * Returns a promise that is resolved once the update application activate action has been performed; this action activates a application.
     * @param data A application object used to activate specified application resource.
     * @returns A promise that is resolved once the activate application action has been performed.                  
     * @method                         
     * @example  applicationClient.activate(id)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    activate(id: string): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put(this.routeDefinition.activate(id), {});
    }

    /**                  
     * Returns a promise that is resolved once the deactivate application action has been performed; this action deactivate a application.
     * @param data A application object used to deactivate specified application resource.
     * @returns A promise that is resolved once the deactivate application action has been performed.                  
     * @method                         
     * @example  applicationClient.deactivate(id)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/
    deactivate(id: string): PromiseLike<IHttpResponse<any>> {
        return this.apiClient.put(this.routeDefinition.deactivate(id), {});
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/