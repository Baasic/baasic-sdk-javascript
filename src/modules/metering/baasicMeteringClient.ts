/* globals module */
/**  
 * @module baasicMeteringClient  
 * @description Baasic Metering Client provides an easy way to consume Baasic Metering REST API end-points. In order to obtain a needed routes `baasicMeteringClient` uses `baasicMeteringRouteDefinition`. 
 */

import { injectable, inject } from "inversify";
import { IBaasicQueryModel, IOptions } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    BaasicMeteringACLClient,
    BaasicMeteringBatchClient,
    BaasicMeteringRouteDefinition,
    BaasicMeteringStatisticsClient,
    BaasicMeteringCategoryClient,
    BaasicMeteringSettingsClient,
    TYPES as meteringTypes
} from 'modules/metering';
import { IMeteringData } from 'modules/metering/contracts';

@injectable()
export class BaasicMeteringClient {

    get routeDefinition(): BaasicMeteringRouteDefinition {
        return this.baasicMeteringRouteDefinition;
    }

    get batch(): BaasicMeteringBatchClient {
        return this.baasicMeteringBatchClient;
    }

    get statistics(): BaasicMeteringStatisticsClient {
        return this.baasicMeteringStatisticsClient;
    }

    get acl(): BaasicMeteringACLClient {
        return this.baasicMeteringACLClient;
    }

    get settings(): BaasicMeteringSettingsClient {
        return this.baasicMeteringSettingsClient;
    }

    get category(): BaasicMeteringCategoryClient {
        return this.baasicMeteringCategoryClient;
    }

    constructor(
        @inject(meteringTypes.BaasicMeteringRouteDefinition) protected baasicMeteringRouteDefinition: BaasicMeteringRouteDefinition,
        @inject(httpTYPES.BaasicApiClient) protected baasicApiClient: BaasicApiClient,
        @inject(meteringTypes.BaasicMeteringBatchClient) protected baasicMeteringBatchClient: BaasicMeteringBatchClient,
        @inject(meteringTypes.BaasicMeteringStatisticsClient) protected baasicMeteringStatisticsClient: BaasicMeteringStatisticsClient,
        @inject(meteringTypes.BaasicMeteringACLClient) protected baasicMeteringACLClient: BaasicMeteringACLClient,
        @inject(meteringTypes.BaasicMeteringCategoryClient) protected baasicMeteringCategoryClient: BaasicMeteringCategoryClient,
        @inject(meteringTypes.BaasicMeteringSettingsClient) protected baasicMeteringSettingsClient: BaasicMeteringSettingsClient,
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of metering resources matching the given criteria.                  
     * @method 
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                         
     * @example baasicMeteringClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<IMeteringData>>> {
        return this.baasicApiClient.get<IBaasicQueryModel<IMeteringData>>(this.baasicMeteringRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the metering resource.                 
     * @method 
     * @param id MeteringData id which uniquely identifies MeteringData resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.                        
     * @example baasicMeteringClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IOptions): PromiseLike<IHttpResponse<IMeteringData>> {
        return this.baasicApiClient.get<IMeteringData>(this.baasicMeteringRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create metering action has been performed; this action creates a new metering resource.                  
     * @method 
     * @param data An MeteringData object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create metering action has been performed                        
     * @example baasicMeteringClient.create({   
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
        return this.baasicApiClient.post<IMeteringData>(this.baasicMeteringRouteDefinition.create(), this.baasicMeteringRouteDefinition.createParams(data));
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
                    baasicMeteringClient.update(meteringData)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				
     **/
    update(data: IMeteringData): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.put<void>(this.baasicMeteringRouteDefinition.update(data), this.baasicMeteringRouteDefinition.updateParams(data));
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
                        baasicMeteringClient.remove(meteringData)
                            .then(function (data) {   
                                // perform success action here 
                            },
                             function (response, status, headers, config) {   
                                 // perform error handling here 
                            });						
     **/
    remove(data: IMeteringData): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicMeteringRouteDefinition.delete(data));
    }

    /**                  
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all metering resources from the system if successfully completed.                  
     * @method
     * @returns A promise that is resolved once the purge action has been performed.                         
     * @example baasicMeteringClient.purge()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });						
     **/
    purge(): PromiseLike<IHttpResponse<void>> {
        return this.baasicApiClient.delete<void>(this.baasicMeteringRouteDefinition.purge());
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