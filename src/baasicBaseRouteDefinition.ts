export class BaasicBaseRouteDefinition {

    update(params: any): any {
        if ('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('put').href;
        } else {
            return //json;
        }
    }

    delete(params: any): any {
        if ('HAL') {
            return params[this.baasicConstants.modelPropertyName].links('delete').href;
        } else {
            return //json;
        }
    }

    parse(link: string): any {
        return this.baasicUriTemplateProcessor.parse(link);
    }
}