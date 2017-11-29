/* globals module */
/**  
 * @module commerceProductFilesStreamsRoute  
 * @description Baasic Product Files Streams Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic product Files Streams Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/


import { injectable, inject } from "inversify";
import { BaseRoute } from '../../../common';
import { IOptions } from '../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';
import { IProductFile } from '.././contracts';

@injectable()
export class CommerceProductFilesStreamsRoute extends BaseRoute {

    public readonly getRoute: string = 'commerce/product-file-streams/{id}/{?width,height}';

    public readonly createRoute: string = 'commerce/product-file-streams/{filename}/{?productId}';

    public readonly updateRoute: string = 'commerce/product-file-streams/{id}/{?width,height}';


    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }

    /**                     
     * Parses get route; this route should be expanded with id of desired file stream. Additional supported items are:                     
     * - `width` - width of desired derived image.  
     * - `height` - height of desired derived image. 
     * @method
     * @param data Product file id of the original product file used to identify stream that needs to be retrieved from the system.
     * @example productFilesRoute.get({id: '<filename>'});
     **/
    get(data: any): any {
        if (!this.utility.isObject(data)) {
            data = {
                id: data
            };
        }
        return super.baseCreate(this.getRoute, data);
    }

    /**                     
     * Parses create route; this route should be expanded with the filename which indicates where the stream will be saved.                     
     * @method
     * @param data Product file that needs to be saved into the system. 
     * @example productFilesRoute.create({filename: '<filename>'});                                   
     **/
    create(data: IProductFile): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**                     
     * Parses update route; this route should be expanded with the id of the previously saved resource. Additional supported items are:                     
     * - `width` - width of derived image to update.                     
     * - `height` - height of derived image to update.                                        
     * @method
     * @param data Product file used to identify stream that needs to be updated.                        
     * @example productFilesRoute.update({id: '<filename>'});
     **/
    update(data: IProductFile): any {
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