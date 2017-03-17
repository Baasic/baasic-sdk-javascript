/* globals module */
/**  
 * @module meteringClient  
 * @description  Metering Client provides an easy way to consume  Metering REST API end-points. In order to obtain a needed routes `meteringClient` uses `baasicMeteringRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IOptions } from 'common/contracts';
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    MeteringACLClient,
    MeteringBatchClient,
    MeteringRouteDefinition,
    MeteringStatisticsClient,
    MeteringCategoryClient,
    MeteringSettingsClient,
    TYPES as meteringTypes
} from 'modules/metering';
import { IMeteringData } from 'modules/metering/contracts';

@injectable()
export class MeteringClient {

    get routeDefinition(): MeteringRouteDefinition {
        return this.baasicMeteringRouteDefinition;
    }

    get batch(): MeteringBatchClient {
        return this.meteringBatchClient;
    }

    get statistics(): MeteringStatisticsClient {
        return this.meteringStatisticsClient;
    }

    get acl(): MeteringACLClient {
        return this.meteringACLClient;
    }

    get settings(): MeteringSettingsClient {
        return this.meteringSettingsClient;
    }

    get category(): MeteringCategoryClient {
        return this.meteringCategoryClient;
    }

    constructor(
        @inject(meteringTypes.MeteringRouteDefinition) protected baasicMeteringRouteDefinition: MeteringRouteDefinition,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
        @inject(meteringTypes.MeteringBatchClient) protected meteringBatchClient: MeteringBatchClient,
        @inject(meteringTypes.MeteringStatisticsClient) protected meteringStatisticsClient: MeteringStatisticsClient,
        @inject(meteringTypes.MeteringACLClient) protected meteringACLClient: MeteringACLClient,
        @inject(meteringTypes.MeteringCategoryClient) protected meteringCategoryClient: MeteringCategoryClient,
        @inject(meteringTypes.MeteringSettingsClient) protected meteringSettingsClient: MeteringSettingsClient,
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.                  
     * @method 
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example meteringClient.find({   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',   
                    categories: 'Storage,Requests,Bandwidth' 
                })
                .then(function (collection) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                    
     **/
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<IMeteringData>>> {
        return this.apiClient.get<IQueryModel<IMeteringData>>(this.baasicMeteringRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.                 
     * @method 
     * @param id MeteringData id which uniquely identifies MeteringData resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                        
     * @example meteringClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IOptions): PromiseLike<IHttpResponse<IMeteringData>> {
        return this.apiClient.get<IMeteringData>(this.baasicMeteringRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create metering action has been performed; this action creates a new metering resource.                  
     * @method 
     * @param data An MeteringData object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create metering action has been performed                        
     * @example meteringClient.create({   
                    category : '<category-name>',   
                    name : '<sub-category-name>',   
                    value: '<value>' 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                 
      **/
    create(data: IMeteringData): PromiseLike<IHttpResponse<IMeteringData>> {
        return this.apiClient.post<IMeteringData>(this.baasicMeteringRouteDefinition.create(), this.baasicMeteringRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update metering action has been performed; this action updates a metering resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.updateParams(meteringData); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data An metering data object used to update specified MeteringData resource.
     * @returns A promise that is resolved once the update metering action has been performed.                         
     * @example // meteringData is a resource previously fetched using get action. 
                    meteringData.value = '<some-new-value>'; 
                    meteringClient.update(meteringData)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: IMeteringData): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.baasicMeteringRouteDefinition.update(data), this.baasicMeteringRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a metering resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicMeteringRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(meteringData); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method 
     * @param data An metering data object used to remove specified MeteringData resource.                         
     * @returns A promise that is resolved once the remove action has been performed. 
     * @example // meteringData is a resource previously fetched using get action.				 
                        meteringClient.remove(meteringData)
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });						
     **/
    remove(data: IMeteringData): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.baasicMeteringRouteDefinition.delete(data));
    }

    /**                  
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all metering resources from the system if successfully completed.                  
     * @method
     * @returns A promise that is resolved once the purge action has been performed.                         
     * @example meteringClient.purge()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });						
     **/
    purge(): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.baasicMeteringRouteDefinition.purge());
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