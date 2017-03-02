/* globals module */
/**  
 * @module baasicCompanyClient  
 * @description Baasic Company Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Company Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { IOptions, IBaasicQueryModel } from 'common/contracts';
import { BaasicApiClient, IHttpResponse, TYPES as httpTypes } from 'httpApi';
import { injectable, inject } from "inversify";
import { BaasicCompanyBatchClient, BaasicCompanyRouteDefinition, TYPES as userProfileTypes } from 'modules/userProfile';
import { ICompany } from 'modules/userProfile/contracts';

@injectable()
export class BaasicCompanyClient {

    get routeDefinition(): BaasicCompanyRouteDefinition {
        return this.baasicCompanyRouteDefinition;
    }

    get batch(): BaasicCompanyBatchClient {
        return this.baasicCompanyBatchClient;
    }

    constructor(
        @inject(userProfileTypes.BaasicCompanyBatchClient) protected baasicCompanyBatchClient: BaasicCompanyBatchClient,
        @inject(userProfileTypes.BaasicCompanyRouteDefinition) protected baasicCompanyRouteDefinition: BaasicCompanyRouteDefinition,
        @inject(httpTypes.BaasicApiClient) protected baasicApiClient: BaasicApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of company resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                      
     * @example baasicCompanyClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IBaasicQueryModel<ICompany>>> {
        return this.baasicApiClient.get(this.baasicCompanyRouteDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the company resource.                 
     * @method
     * @param id Company id which uniquely identifies resource that needs to be retrieved.
     * @returns A promise that is resolved once the get action has been performed.
     * @param options Query resource options object.                        
     * @example baasicCompanyClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IOptions): PromiseLike<IHttpResponse<ICompany>> {
        return this.baasicApiClient.get(this.baasicCompanyRouteDefinition.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create company action has been performed; this action creates a new company resource.                  
     * @method
     * @param data A company object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create company action has been performed.                         
     * @example baasicCompanyClient.create({   
                    description : '<description>',   
                    name : '<name>',   
                    slug: '<slug>' 
                })
                .then(function (data) {   
                    // perform success action here 
                },
                 function (response, status, headers, config) {   
                     // perform error handling here 
                });                 
     **/
    create(data: ICompany): PromiseLike<IHttpResponse<ICompany>> {
        return this.baasicApiClient.post(this.baasicCompanyRouteDefinition.create(), this.baasicCompanyRouteDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update company action has been performed; this action updates a company resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCompanyRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(company); 
     * let uri = params['model'].links('put').href; 
     * ```                  
     * @method
     * @param data A company object used to update specified company resource.
     * @returns A promise that is resolved once the update company action has been performed.                        
     * @example // company is a resource previously fetched using get action. 
                    company.description = '<description>'; 
                    baasicCompanyService.update(company)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                        }); 				        
     **/
    update(data: ICompany): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.put(this.baasicCompanyRouteDefinition.update(data), this.baasicCompanyRouteDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a company resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicCompanyRouteDefinition` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(company); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method
     * @param data A company object used to delete specified company resource.
     * @returns A promise that is resolved once the remove action has been performed.                          
     * @example // company is a resource previously fetched using get action.				 
                    baasicCompanyClient.remove(company)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                    });						        
     **/
    remove(data: ICompany): PromiseLike<IHttpResponse<any>> {
        return this.baasicApiClient.delete(this.baasicCompanyRouteDefinition.delete(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */