/* globals module */
/**  
 * @module commerceProductFilesRoute  
 * @description Baasic Product Files Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Product Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../../common';
import { IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';
import {
    CommerceProductFilesBatchRoute,
    CommerceProductFilesStreamsRoute,
    TYPES as productTypes
} from '.././';
import { IProductFile } from '.././contracts';

@injectable()
export class CommerceProductFilesRoute extends BaseRoute {

    public readonly findRoute: string = 'commerce/product-files/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'commerce/product-files/{id}/{?embed,fields}';

    public readonly linkRoute: string = 'commerce/product-files/link';

    public readonly unlinkRoute: string = 'commerce/product-files/unlink/{id}';

    public readonly updateRoute: string = 'commerce/product-files/{id}';
    
    get streams(): CommerceProductFilesStreamsRoute {
        return this.productFilesStreamsRoute;
    }

    get batch(): CommerceProductFilesBatchRoute {
        return this.productFilesBatchRoute;
    }

    constructor(
        @inject(productTypes.CommerceProductFilesStreamsRoute) protected productFilesStreamsRoute: CommerceProductFilesStreamsRoute,
        @inject(productTypes.CommerceProductFilesBatchRoute) protected productFilesBatchRoute: CommerceProductFilesBatchRoute,
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing file properties using the phrase search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain file subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the file property to sort the result collection by. 	
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.                        
     * @example ommerceProductFilesRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses get route; this route should be expanded with the Id of the file resource.
     * @method 
     * @param id Product file id which uniquely identifies product resource that needs to be retrieved.
     * @param options Options object that contains embed data.
     * @example ommerceProductFilesRoute.get({id: '<file-id>'});
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses link route; this URI template does not expose any additional options.
     * @method  
     * @example commerceProductFilesRoute.link();
     **/
    link(): any {
        return super.baseCreate(this.linkRoute, {});
    }

    /**
     * Parses unlink route; this URI template does not expose any additional options.
     * @method  
     * @example CommerceProductFilesRoute.unlink(data);
     **/
    unlink(data: IProductFile, options: Object): any {
        return super.baseDelete(this.unlinkRoute, data, options, 'unlink');
    }

    /**
     * Parses update route; this URI template does not expose any additional options.
     * @method  
     * @example ommerceProductFilesRoute.update(data);
     **/
    update(data: any): any {
        if (!this.utility.isObject(data)) {
            data = {
                id: data
            };
        }
        return super.baseUpdate(this.updateRoute, data);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/