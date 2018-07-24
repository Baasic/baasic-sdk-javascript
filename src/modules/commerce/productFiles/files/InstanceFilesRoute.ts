/* globals module */
/**  
 * @module commerceProductInstanceFilesRoute  
 * @description Baasic Product Instance Files Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Product Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../common';
import { IGetRequestOptions, IOptions } from '../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../core/contracts';
import {
    CommerceProductInstanceFilesBatchRoute,
    TYPES as productTypes
} from '../../';
import { IProductFile, IProductOptions } from '../../contracts';

@injectable()
export class CommerceProductInstanceFilesRoute extends BaseRoute {

    public readonly findRoute: string = 'products/{productId}/files/{?searchQuery,ids,from,to,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'products/{productId}/files/{id}/{?embed,fields}';

    public readonly linkRoute: string = 'products/{productId}/files/link';

    public readonly unlinkRoute: string = 'products/{productId}/files/unlink/{id}';

    public readonly unlinkByProductRoute: string = 'products/{productId}/files/unlink';

    public readonly updateRoute: string = 'products/{productId}/files/{id}';

    get batch(): CommerceProductInstanceFilesBatchRoute {
        return this.productInstanceFilesBatchRoute;
    }

    constructor(
        @inject(productTypes.CommerceProductInstanceFilesBatchRoute) protected productInstanceFilesBatchRoute: CommerceProductInstanceFilesBatchRoute,
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
     * @param productId Product slug or id which uniquely identifies product whose product files need to be retrieved.
     * @param options Query resource options object.                        
     * @example productInstanceFilesRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(productId: string, options?: IProductOptions): any {
        let params = this.modelMapper.findParams(options);
        params.productId = productId;
        return super.baseGet(this.findRoute, params);
    }

    /**                 
     * Parses get route; this route should be expanded with the Id of the file resource.
     * @method
     * @param productId Product id which uniquely identifies product whose product files need to be retrieved.
     * @param id Product file id which uniquely identifies product file that needs to be retrieved.
     * @param options options object that contains embed data. 
     * @example productInstanceFilesRoute.get({id: '<file-id>'});
     **/
    get(productId: string, id: string, options?: IGetRequestOptions): any {
        let params = this.utility.extend({}, options);
        params.productId = productId;
        params.id = id;
        return super.baseGet(this.getRoute, params);
    }

    /**
     * Parses link route; this URI template does not expose any additional options.
     * @method
     * @param productId Product id which uniquely identifies product whose product files need to be deleted.
     * @param data
     * @param options  
     * @example productInstanceFilesRoute.link();
     **/
    link(productId: string, data: IProductFile): any {
        let params = this.utility.extend({}, data);
        params.productId = productId;
        return super.baseCreate(this.linkRoute, params);
    }

    /**
     * Parses unlink route; this URI template does not expose any additional options.
     * @method
     * @param productId Product id which uniquely identifies gallery whose gallery files need to be deleted.
     * @param data
     * @param options  
     * @example productFilesRoute.unlink(data);
     **/
    unlink(productId: string, data: IProductFile, options: Object): any {
        if (!options) {
            options = {};
        }
        let params = this.modelMapper.removeParams(data);
        params.productId = productId;
        return super.baseDelete(this.unlinkRoute, params, options, 'unlink');
    }

    /**
     * Parses unlink by Product route; this URI template does not expose any additional options.
     * @method
     * @param productId Product id which uniquely identifies product whose product files need to be deleted.
     * @param data
     * @param options  
     * @example productFilesRoute.unlinkByProduct(data);
     **/
    unlinkByProduct(productId: string, options?: any) {
        return super.baseDelete(this.unlinkByProductRoute, productId, options, 'unlink-by-product');
    }

    /**
     * Parses update route; this URI template does not expose any additional options.
     * @method  
     * @example productInstanceFilesRoute.update(data);
     **/
    update(productId: string, data: IProductFile): any {
        let params = this.modelMapper.updateParams(data);
        params.productId = productId;
        return super.baseUpdate(this.updateRoute, params);
    }
}

/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.  
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
 - All end-point objects are transformed by the associated route service. 
*/