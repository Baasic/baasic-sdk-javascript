import { ContainerModule } from "inversify";
import { ApiClient } from 'httpApi';

const TYPES = {
    ApiClient: Symbol("ApiClient"),
    IHttpClient: Symbol("IHttpClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ApiClient>(TYPES.ApiClient).to(ApiClient);
});

export { diModule };