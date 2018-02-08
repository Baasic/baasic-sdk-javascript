/* globals module */
/**  
* @module messageRoute  
* @description Baasic Message Center Message Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Message Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services  use the same function names as their corresponding services. 
*/

import { injectable, inject } from "inversify"; 
import { BaseRoute, TYPES as commonTypes } from '../../common'; 
import { IGetRequestOptions, IOptions } from '../../common/contracts';
import { MessageBatchRoute, TYPES as channelTypes } from './';
import { IMessage } from './contracts'; 
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts'; 

export class MessageRoute extends BaseRoute {

    public readonly findRoute: string = 'message-center/messages/{?searchQuery,page,rpp,sort,embed,fields}';

    public readonly createRoute: string ='message-center/messages'; 

    public readonly getRoute: string ='message-center/messages/{id}/{?embed,fields}'; 

    public readonly updateRoute: string = 'message-center/messages/{id}'; 

    public readonly deleteRoute: string = 'message-center/messages/{id}';

    public readonly purgeRoute: string = 'message-center/messages/purge';

    get batch(): MessageBatchRoute {
        return this.messageBatchRoute; 
    }

    constructor(
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions, 
        @inject(channelTypes.MessageBatchRoute) protected messageBatchRoute: MessageBatchRoute
    ) { super(appOptions); }

    /**                 
     * Parses find route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string referencing message properties using the phrase or BQL (Baasic Query Language) search.                 
     * - `page` - A value used to set the page number, i.e. to retrieve certain message subset from the storage.                 
     * - `rpp` - A value used to limit the size of result set per page.                 
     * - `sort` - A string used to set the message property to sort the result collection by. 				
     * - `embed` - Comma separated list of resources to be contained within the current representation.                 
     * @method
     * @param options Query resource options object.       
     * @example messageRoute.find({searchQuery: '<search-phrase>'});                               
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**                 
     * Parses create route; this URI template does not expose any additional options.                 
     * @method     
     *  @param data A Message object that needs to be inserted into the system.                   
     * @example messageRoute.create();                              
     **/
    create(data: IMessage): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**                 
     * Parses get route; this route doesn't expose any properties.                 
     * @method
     * @param id Message id which uniquely identifies resource that needs to be retrieved.
     * @param options Query resource options object.                        
     * @example messageRoute.get();                               
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param data A Message object used to update specified Message resource.
     * @example messageRoute.update(data);
     */
    update(data: IMessage): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delete route. This URI template does not expose any additional options.
     * @method
     * @param data A Message object used to delete specified Message resource.
     * @example messageRoute.delete(data);
     */
    delete(data: IMessage): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
     * Parses purge route. This URI template does not expose any additional options.
     * @method
     * @example messageRoute.purge();
     */
    purge(): any {
        return super.baseDelete(this.purgeRoute, {});
    }
}
/**  
* @overview  
***Notes:**  
- Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
- [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.  
- All end-point objects are transformed by the associated route service. 
*/