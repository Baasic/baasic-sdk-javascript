export abstract class BaasicBaseRouteDefinition {

    protected abstract createRouteURI(): string;
    protected abstract findRouteURI(): string;
    protected abstract getRouteURI(): string;
    protected abstract updateRouteURI(): string;
    protected abstract deleteRouteURI(): string;
    
    /**                
     * Parses resources route which can be expanded with additional options. Supported items are:                 
     * - `searchQuery` - A string value used to identify resources using the phrase search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain resource subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the resource property to sort the result collection by. 
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @returns query resources uri with search params
     * @method
     * @example baasicBaseDefinition.find().expand({searchQuery: '<search-phrase>'});
     **/
    find(): any {
        return this.baasicUriTemplateProcessor.parse(this.findRouteURI());
    }

    /**
      * Parses get resource route which must be expanded with the Id of the previously created resource in the system.
      * @returns get resource uri
      * @method 
      * @example baasicBaseRouteDefinition.get().expand({id: '<key-value-id>'});
      **/
    get(): any {
        return this.baasicUriTemplateProcessor.parse(this.getRouteURI());
    }
    
    /**
      * Parses get resource route which must be expanded with the Id of the previously created resource in the system.
      * @returns get resource uri
      * @method 
      * @example baasicBaseRouteDefinition.get().expand({id: '<key-value-id>'});
      **/
    create(): any {
        return this.baasicUriTemplateProcessor.parse(this.createRouteURI());
    }

    update(params: any): any {
        if ('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('put').href;
        } else {
            return this.baasicUriTemplateProcessor.parse(this.updateRouteURI());
        }
    }

    delete(params: any): any {
        if ('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('delete').href;
        } else {
            return this.baasicUriTemplateProcessor.parse(this.deleteRouteURI());
        }
    }

    parse(link: string): any {
        return this.baasicUriTemplateProcessor.parse(link);
    }
}