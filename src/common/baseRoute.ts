import * as uritemplate from 'uritemplate';
import { IOptions } from 'common/contracts';
import { ModelMapper, Utility } from 'common';
import { IAppOptions } from 'core/contracts';
import { injectable } from "inversify";

@injectable()
export abstract class BaseRoute {

    protected utility: Utility;
    protected modelMapper: ModelMapper;

    constructor(
        protected appOptions: IAppOptions
    ) {
        this.utility = new Utility();
        this.modelMapper = new ModelMapper();
    }

    /**                
     * Parses resources route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify resources using the phrase search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain resource subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the resource property to sort the result collection by. 
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @returns Query resources uri with search params
     * @example baasicBaseDefinition.find();
     **/
    protected baseFind(route: string, options?: IOptions): any {
        let params = this.modelMapper.findParams(options);
        return uritemplate.parse(route).expand(params);
    }

    /**
      * Parses get resource route which must be expanded with the Id of the previously created resource in the system.
      * @returns get resource uri
      * @method 
      * @example baseRoute.get(route, id);
      **/
    protected baseGet(route: string, id?: any, options?: any, propName?: string): any {
        return uritemplate.parse(route).expand(this.modelMapper.getParams(id, options, propName));
    }

    /**
      * Parses get resource route which must be expanded with the Id of the previously created resource in the system.
      * @returns get resource uri
      * @method 
      * @example baseRoute.create();
      **/
    protected baseCreate(route: string, data?: any): any {
        return uritemplate.parse(route).expand(data);
    }

    /**
     * Parses get resource route.
     * @returns update resource uri
     * @method
     * @example baseRoute.update();
     */
    protected baseUpdate(route: string, data: any, options?: IOptions, linkName?: string): any {
        let link: string = linkName ? linkName : 'put';
        let params = this.modelMapper.updateParams(data);
        let model = params[this.modelMapper.modelPropertyName];
        if (typeof options === 'undefined') {
            if (this.appOptions.enableHALJSON && model.links) {
                return model.links(link).href;
            } else {
                return uritemplate.parse(route).expand(model);
            }
        } else {
            let opt = this.utility.extend(model, options);
            if (this.appOptions.enableHALJSON && model.links) {
                return uritemplate.parse(model.links(link).href).expand(opt);
            } else {
                return uritemplate.parse(route).expand(opt);
            }
        }
    }

    /**
     * Parses delete resource route.
     * @returns delete resource uri.
     * @method
     * @example baseRoute.delete();
     */
    protected baseDelete(route: string, data: any, options?: IOptions, linkName?: string): any {
        let link: string = linkName ? linkName : 'delete';
        let params = this.modelMapper.removeParams(data);
        let model = params[this.modelMapper.modelPropertyName];
        if (typeof options === 'undefined') {
            if (this.appOptions.enableHALJSON && model.links) {
                return model.links(link).href;
            } else {
                return uritemplate.parse(route).expand(model);
            }
        } else {
            let opt = this.utility.extend(model, options);
            if (this.appOptions.enableHALJSON && model.links) {
                return uritemplate.parse(model.links(link).href).expand(opt);
            } else {
                return uritemplate.parse(route).expand(opt);
            }
        }
    }

    createParams(data: any, prop?: string): any {
        let propertyName: string = prop || this.modelMapper.modelPropertyName;
        return this.modelMapper.createParams(data)[propertyName];
    }

    updateParams(data: any): any {
        return this.modelMapper.updateParams(data)[this.modelMapper.modelPropertyName];
    }

    deleteParams(data: any): any {
        return this.modelMapper.removeParams(data)[this.modelMapper.modelPropertyName];
    }

    /**                 
     * Parses and expands URI templates based on [RFC6570](http://tools.ietf.org/html/rfc6570) specifications. For more information please visit the project [GitHub](https://github.com/Baasic/uritemplate-js) page.                 
     * @method                 
     * @example baseRoute.parse('<route>/{?embed,fields,options}').expand({embed: '<embedded-resource>'});                 
     **/
    parse(route: string): any {
        return uritemplate.parse(route);
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