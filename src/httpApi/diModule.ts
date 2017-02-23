import { ContainerModule } from "inversify";
import { BaasicApiClient } from 'httpApi';

const TYPES = {
    BaasicApiClient: Symbol("BaasicApiClient"),
    IHttpClient: Symbol("IHttpClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicApiClient>(TYPES.BaasicApiClient).toConstructor(BaasicApiClient);
});

export { diModule };