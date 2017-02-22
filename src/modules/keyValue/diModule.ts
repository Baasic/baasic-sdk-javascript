import { ContainerModule } from "inversify";
import { BaasicKeyValueClient } from 'modules/keyValue';

let diModule: ContainerModule = new ContainerModule((bind) => {
    console.log('init');
    //bind<BaasicKeyValueClient>('BaasicKeyValueClient').to(BaasicKeyValueClient);
});

export { diModule };