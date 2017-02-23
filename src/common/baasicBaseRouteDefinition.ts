import { ModelMapper} from 'common';
import { IOptions } from 'common/contracts';
import * as uritemplate from 'uritemplate';
import { Utility } from 'common';
import 'reflect-metadata';
import { injectable } from "inversify";

@injectable()
export abstract class BaasicBaseRouteDefinition {

    protected utility: Utility;

    constructor(
        protected modelMapper: ModelMapper        
        ) {
            this.utility = new Utility();
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
        return uritemplate.parse(route).expand(this.modelMapper.findParams(options));
    }

    /**
      * Parses get resource route which must be expanded with the Id of the previously created resource in the system.
      * @returns get resource uri
      * @method 
      * @example baasicBaseRouteDefinition.get(route, id);
      **/
    protected baseGet(route: string, id?: string, options?: IOptions, propName?: string): any {
        return uritemplate.parse(route).expand(this.modelMapper.getParams(id, options, propName));
    }
    
    /**
      * Parses get resource route which must be expanded with the Id of the previously created resource in the system.
      * @returns get resource uri
      * @method 
      * @example baasicBaseRouteDefinition.create();
      **/
    protected baseCreate(route: string, data?: any): any {
        return uritemplate.parse(route).expand(data);
    }

    /**
     * Parses get resource route.
     * @returns update resource uri
     * @method
     * @example baasicBaseRouteDefinition.update();
     */
    protected baseUpdate(route: string, data: any, options?: IOptions): any {
        let params = this.modelMapper.updateParams(data);
        if(typeof options === 'undefined') {
            if ('HAL') {
                return params[this.modelMapper.modelPropertyName].links('put').href;
            } else {
                return uritemplate.parse(route).expand(params);
            }
        } else {
            let opt = this.utility.extend({}, options);
            if ('HAL') {
                return uritemplate.parse(params[this.modelMapper.modelPropertyName].links('put').href).expand(opt);
            } else {
                return uritemplate.parse(route).expand(opt);
            }
        }
    }

    /**
     * Parses delete resource route.
     * @returns delete resource uri.
     * @method
     * @example baasicBaseRouteDefinition.delete();
     */
    protected baseDelete(route: string, data: any, options?: IOptions): any {
        let params = this.modelMapper.removeParams(data);
        if (typeof options === 'undefined') {
            if ('HAL') {
                return params[this.modelMapper.modelPropertyName].links('delete').href;
            } else {
                return uritemplate.parse(route).expand(params);
            }
        } else {
            let opt = this.utility.extend({}, options);
            if ('HAL') {
                return uritemplate.parse(params[this.modelMapper.modelPropertyName].links('delete').href).expand(opt);
            } else {
                return uritemplate.parse(route).expand(opt);
            }
        }
    }

    createParams(data: any, prop?: string): any {
        return this.modelMapper.createParams(data)[this.modelMapper.modelPropertyName];
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
     * @example baasicBaseRouteDefinition.parse('<route>/{?embed,fields,options}').expand({embed: '<embedded-resource>'});                 
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