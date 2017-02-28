import { ContainerModule } from "inversify";
import {
    BaasicMeteringACLClient,
    BaasicMeteringACLRouteDefinition,
    BaasicMeteringBatchClient,
    BaasicMeteringBatchRouteDefinition,
    BaasicMeteringCategoryBatchClient,
    BaasicMeteringCategoryBatchRouteDefinition,
    BaasicMeteringCategoryRouteDefinition,
    BaasicMeteringCategoryClient,
    BaasicMeteringRouteDefinition,
    BaasicMeteringClient,
    BaasicMeteringStatisticsClient,
    BaasicMeteringStatisticsRouteDefinition
} from 'modules/metering';

const TYPES = {
    BaasicMeteringACLClient: Symbol("BaasicMeteringACLClient"),
    BaasicMeteringACLRouteDefinition: Symbol("BaasicMeteringACLRouteDefinition"),
    BaasicMeteringBatchClient: Symbol("BaasicMeteringBatchClient"),
    BaasicMeteringBatchRouteDefinition: Symbol("BaasicMeteringBatchRouteDefinition"),
    BaasicMeteringCategoryBatchClient: Symbol("BaasicMeteringCategoryBatchClient"),
    BaasicMeteringCategoryBatchRouteDefinition: Symbol("BaasicMeteringCategoryBatchRouteDefinition"),
    BaasicMeteringCategoryRouteDefinition: Symbol("BaasicMeteringCategoryRouteDefinition"),
    BaasicMeteringCategoryClient: Symbol("BaasicMeteringCategoryClient"),
    BaasicMeteringRouteDefinition: Symbol("BaasicMeteringRouteDefinition"),
    BaasicMeteringClient: Symbol("BaasicMeteringClient"),
    BaasicMeteringStatisticsClient: Symbol("BaasicMeteringStatisticsClient"),
    BaasicMeteringStatisticsRouteDefinition: Symbol("BaasicMeteringStatisticsRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicMeteringCategoryBatchRouteDefinition>(TYPES.BaasicMeteringCategoryBatchRouteDefinition).toSelf();
    bind<BaasicMeteringCategoryBatchClient>(TYPES.BaasicMeteringCategoryBatchClient).toSelf();
    bind<BaasicMeteringCategoryRouteDefinition>(TYPES.BaasicMeteringCategoryRouteDefinition).toSelf();
    bind<BaasicMeteringCategoryClient>(TYPES.BaasicMeteringCategoryClient).toSelf();
    bind<BaasicMeteringBatchRouteDefinition>(TYPES.BaasicMeteringBatchRouteDefinition).toSelf();
    bind<BaasicMeteringBatchClient>(TYPES.BaasicMeteringBatchClient).toSelf();
    bind<BaasicMeteringStatisticsRouteDefinition>(TYPES.BaasicMeteringStatisticsRouteDefinition).toSelf();
    bind<BaasicMeteringStatisticsClient>(TYPES.BaasicMeteringStatisticsClient).toSelf();
    bind<BaasicMeteringACLRouteDefinition>(TYPES.BaasicMeteringACLRouteDefinition).toSelf();
    bind<BaasicMeteringACLClient>(TYPES.BaasicMeteringACLClient).toSelf();
    bind<BaasicMeteringRouteDefinition>(TYPES.BaasicMeteringRouteDefinition).toSelf();
    bind<BaasicMeteringClient>(TYPES.BaasicMeteringClient).toSelf();
});