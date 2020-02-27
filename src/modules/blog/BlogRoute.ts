/* globals module */
/**
 * @module blogRoute
 * @description Baasic Blog Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic blog Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
*/

import { injectable, inject } from "inversify";
import { BaseRoute } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';
import { IBlog, IBlogOptions } from './contracts';

@injectable()
export class BlogRoute extends BaseRoute {

    public readonly findRoute: string = 'blog/blogs/{?searchQuery,ids,from,to,languageIds,abrv,page,rpp,sort,embed,fields}';

    public readonly getRoute: string = 'blog/blogs/{id}/{?embed,fields}';

    public readonly purgeRoute: string = 'blog/blogs/purge';

    public readonly createRoute: string = 'blog/blogs';

    public readonly updateRoute: string = 'blog/blogs/{id}';

    public readonly deleteRoute: string = 'blog/blogs/{id}';    

    constructor(        
        @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions
    ) { super(appOptions); }


    /**
     * Parses find blog route which can be expanded with additional options. Supported items are:
     * - `searchQuery` - A string referencing blog properties using the phrase or BQL (Baasic Query Language) search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain blog subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the blog property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `startDate` - A value used to specify the blog creation, publish or archive date date starting from which blog resource collection should be returned.
     * - `endDate` - A value used to specify the blog creation, publish or archive date until (and including) which blog resource collection should be returned.
     * - `statuses` - Comma separated list of blog statuses that specify where search should be done (Allowed statuses: Published, Draft and Archived).
     * - `tags` - A value used to restrict the search to blog resources with these tags. Multiple tags should be comma separated.
     * @method
     * @param options A promise that is resolved once the find action has been performed.
     * @example blogRoute.find.expand({searchQuery: '<search-phrase>'});
     **/
    find(options?: IBlogOptions): string {
        var opt = options || {};
        return super.baseFind(this.findRoute, opt);
    }

    /**
     * Parses get blog route which must be expanded with the Id of the previously created blog resource in the system. Additional expand supported items are:
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param id blog slug or id which uniquely identifies blog resource that needs to be retrieved.
     * @param options Options object that contains embed items.
     * @example blogRoute.get({id: '<blog-id>'});
     **/
    get(id: string, options?: IGetRequestOptions): string {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses purge blog route, this URI template doesn't expose any additional properties.
     * @method
     * @example blogRoute.purge();
     **/
    purge(): string {
        return super.baseDelete(this.purgeRoute, {});
    }

    /**
     * Parses create blog route; this URI template doesn't expose any additional properties.
     * @method
     * @example blogRoute.create();
     **/
    create(): string {
        return super.baseCreate(this.createRoute, {});
    }

    /**
     * Parses update blog route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blog object that needs to be updated into the system.
     * @example blogRoute.update(data);
     **/
    update(data: IBlog): string {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delete blog route; this URI template doesn't expose any additional properties.
     * @method
     * @param data An blog object that needs to be removed from the system.
     * @example blogRoute.delete(data);
     **/
    delete(data: IBlog): string {
        return super.baseDelete(this.deleteRoute, data);
    }
}

/**
 * @copyright (c) 2017 Mono Ltd
 * @license MIT
 * @author Mono Ltd
 * @overview
 ***Notes:**
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
 - All end-point objects are transformed by the associated route service.
*/
