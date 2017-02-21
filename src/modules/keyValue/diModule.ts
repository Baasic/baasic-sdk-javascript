import { DIModule } from 'diModule';
import { ContainerModule } from "inversify";
import { BaasicKeyValueClient } from 'modules/keyValue';

DIModule.add(new ContainerModule((bind) => {
    bind<BaasicKeyValueClient>(Symbol('KeyValueClient')).toSelf();
}));