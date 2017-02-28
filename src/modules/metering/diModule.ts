import { ContainerModule } from "inversify";
import {
    BaasicMeteringCategoryBatchClient,
    BaasicMeteringCategoryBatchRouteDefinition,
    BaasicMeteringCategoryRouteDefinition,
    BaasicMeteringCategoryClient
} from 'modules/metering';

const TYPES = {
    BaasicMeteringCategoryBatchClient: Symbol("BaasicMeteringCategoryBatchClient"),
    BaasicMeteringCategoryBatchRouteDefinition: Symbol("BaasicMeteringCategoryBatchRouteDefinition"),
    BaasicMeteringCategoryRouteDefinition: Symbol("BaasicMeteringCategoryRouteDefinition"),
    BaasicMeteringCategoryClient: Symbol("BaasicMeteringCategoryClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicMeteringCategoryBatchRouteDefinition>(TYPES.BaasicMeteringCategoryBatchRouteDefinition).toSelf();
    bind<BaasicMeteringCategoryBatchClient>(TYPES.BaasicMeteringCategoryBatchClient).toSelf();
    bind<BaasicMeteringCategoryRouteDefinition>(TYPES.BaasicMeteringCategoryRouteDefinition).toSelf();
    bind<BaasicMeteringCategoryClient>(TYPES.BaasicMeteringCategoryClient).toSelf();
});