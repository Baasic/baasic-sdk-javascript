/* globals module */
/**  
 * @module baasicArticleACLRouteService  
 * @description Baasic Article ACL Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Article Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
 */

import { injectable, inject } from "inversify";
import { BaseRouteDefinition, TYPES as commonTypes } from 'common';
import { IACLPolicy, IACLOptions } from 'common/contracts';
import { IAppOptions, TYPES as coreTypes } from 'core/contracts';

export class ArticleACLRouteDefinition extends BaseRouteDefinition {

    public readonly getRoute: string = 'articles/{id}/acl/{?fields}';

    public readonly updateRoute: string = 'articles/{id}/acl/{?fields}';

    public readonly deleteByUserRoute: string = 'articles/{id}/acl/actions/{accessAction}/users/{user}/';

    public readonly deleteByRoleRoute: string = 'articles/{id}/acl/actions/{accessAction}/roles/{role}/';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /** 					
     * Parses get article acl route; this URI template should be expanded with the Id of the article.										
     * @method      					
     * @example baasicArticleACLRouteDefinition.get({id: '<article-id>'}); 					
     **/
    get(options: IACLOptions): any {
        let params = this.utility.extend({}, options);
        return super.baseCreate(this.getRoute, params);
    }

    /** 				
     * Parses update article acl route; this URI template should be expanded with the Id of the article.
     * @method      					
     * @example baasicArticleACLRouteDefinition.update({id: '<article-id>'}); 					
     **/
    update(options: IACLOptions): any {
        let params = this.utility.extend({}, options);
        return super.baseCreate(this.updateRoute, params);
    }

    /** 					
     * Parses deleteByUser article acl route which can be expanded with additional options. Supported items are: 					
     * - `id` - Id of the article. 					
     * - `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified user and article resource. 					
     * - `user` - A value which uniquely identifies user for which ACL policy needs to be removed.										
     * @method
     * @param articleId Article id which uniquely identifies article resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and article resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"
     * @param user A value that uniquely identifies user for which ACL policy needs to be removed.
     * @param data An ACL policy object that needs to be updated in the system.      					
     * @example baasicArticleACLRouteDefinition.deleteByUser({     
                        id: '<article-id>',     
                        accessAction: '<access-action>',     
                        user: '<username>' 
                }); 					
     **/
    deleteByUser(articleId: string, action: string, user: string, data: IACLPolicy): any {
        let params = this.modelMapper.removeParams(data);
        params.articleId = articleId;
        params.user = user;
        params.accessAction = action;
        return super.baseCreate(this.deleteByUserRoute, params);
    }

    /** 					
     * Parses deleteByUser article acl route which can be expanded with additional options. Supported items are: 					
     * - `id` - Id of the article. 					
     * - `accessAction` - Action abbreviation which identifies ACL policy assigned to the specified role and article resource. 					
     * - `role` - A value which uniquely identifies role for which ACL policy needs to be removed.										
     * @method
     * @param articleId Article id which uniquely identifies article resource whose security privileges need to be retrieved and updated.
     * @param action Action abbreviation which identifies ACL policy assigned to the specified user and article resource.
     *               Supported Values:
     *               "Create"
     *               "Delete"
     *               "Read"
     *               "Update"
     * @param role A value that uniquely identifies role for which ACL policy needs to be removed.
     * @param data An ACL policy object that needs to be updated in the system.      					
     * @example baasicArticleACLRouteDefinition.deleteByRole({     
                    id: '<article-id>',    
                    accessAction: '<access-action>',     
                    role: '<role-name>' 
                }); 					
     **/
    deleteByRole(articleId: string, action: string, role: string, data: IACLPolicy): any {
        let params = this.modelMapper.removeParams(data);
        params.articleId = articleId;
        params.role = role;
        params.accessAction = action;
        return super.baseCreate(this.deleteByRoleRoute, params);
    }

    updateParams(options: IACLOptions): any {
        let params = this.utility.extend({}, options);
        return params[this.modelMapper.modelPropertyName];
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