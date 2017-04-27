import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import { ApiClient } from './';

const TYPES = {
    ApiClient: Symbol("ApiClient"),
    IHttpClient: Symbol("IHttpClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ApiClient>(TYPES.ApiClient).to(ApiClient);
});

export { diModule };