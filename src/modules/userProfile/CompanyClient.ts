/* globals module */
/**  
 * @module companyClient  
 * @description  Company Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Company Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { IGetRequestOptions, IOptions, IQueryModel } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import { CompanyBatchClient, CompanyRoute, TYPES as userProfileTypes } from './';
import { ICompany } from './contracts';

@injectable()
export class CompanyClient {

    get routeDefinition(): CompanyRoute {
        return this.companyRoute;
    }

    get batch(): CompanyBatchClient {
        return this.companyBatchClient;
    }

    constructor(
        @inject(userProfileTypes.CompanyBatchClient) protected companyBatchClient: CompanyBatchClient,
        @inject(userProfileTypes.CompanyRoute) protected companyRoute: CompanyRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of company resources matching the given criteria.                  
     * @method
     * @param options Query resource options object.
     * @returns A promise that is resolved once the find action has been performed.                      
     * @example companyClient.find({   
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
    find(options?: IOptions): PromiseLike<IHttpResponse<IQueryModel<ICompany>>> {
        return this.apiClient.get<IQueryModel<ICompany>>(this.routeDefinition.find(options));
    }

    /**                 
     * Returns a promise that is resolved once the get action has been performed. Success response returns the company resource.                 
     * @method
     * @param id Company id which uniquely identifies resource that needs to be retrieved.
     * @returns A promise that is resolved once the get action has been performed.
     * @param options Query resource options object.                        
     * @example companyClient.get()
                    .then(function (data) {   
                        // perform success action here 
                    },
                     function (response, status, headers, config) {   
                         // perform error handling here 
                    });                 
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICompany>> {
        return this.apiClient.get<ICompany>(this.companyRoute.get(id, options));
    }

    /**                  
     * Returns a promise that is resolved once the create company action has been performed; this action creates a new company resource.                  
     * @method
     * @param data A company object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create company action has been performed.                         
     * @example companyClient.create({   
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
        return this.apiClient.post<ICompany>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the update company action has been performed; this action updates a company resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `companyRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
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
    update(data: ICompany): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**                  
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a company resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `companyRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(company); 
     * let uri = params['model'].links('delete').href; 
     * ```                  
     * @method
     * @param data A company object used to delete specified company resource.
     * @returns A promise that is resolved once the remove action has been performed.                          
     * @example // company is a resource previously fetched using get action.				 
                    companyClient.remove(company)
                        .then(function (data) {   
                            // perform success action here 
                        },
                         function (response, status, headers, config) {   
                             // perform error handling here 
                    });						        
     **/
    remove(data: ICompany): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
 */