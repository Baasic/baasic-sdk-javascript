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
    BaasicMeteringSettingsRouteDefinition,
    BaasicMeteringSettingsClient,
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
    BaasicMeteringSettingsRouteDefinition: Symbol("BaasicMeteringSettingsRouteDefinition"),
    BaasicMeteringSettingsClient: Symbol("BaasicMeteringSettingsClient"),
    BaasicMeteringStatisticsClient: Symbol("BaasicMeteringStatisticsClient"),
    BaasicMeteringStatisticsRouteDefinition: Symbol("BaasicMeteringStatisticsRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicMeteringCategoryBatchRouteDefinition>(TYPES.BaasicMeteringCategoryBatchRouteDefinition).to(BaasicMeteringCategoryBatchRouteDefinition);
    bind<BaasicMeteringCategoryBatchClient>(TYPES.BaasicMeteringCategoryBatchClient).to(BaasicMeteringCategoryBatchClient);
    bind<BaasicMeteringCategoryRouteDefinition>(TYPES.BaasicMeteringCategoryRouteDefinition).to(BaasicMeteringCategoryRouteDefinition);
    bind<BaasicMeteringCategoryClient>(TYPES.BaasicMeteringCategoryClient).to(BaasicMeteringCategoryClient);
    bind<BaasicMeteringBatchRouteDefinition>(TYPES.BaasicMeteringBatchRouteDefinition).to(BaasicMeteringBatchRouteDefinition);
    bind<BaasicMeteringBatchClient>(TYPES.BaasicMeteringBatchClient).to(BaasicMeteringBatchClient);
    bind<BaasicMeteringStatisticsRouteDefinition>(TYPES.BaasicMeteringStatisticsRouteDefinition).to(BaasicMeteringStatisticsRouteDefinition);
    bind<BaasicMeteringStatisticsClient>(TYPES.BaasicMeteringStatisticsClient).to(BaasicMeteringStatisticsClient);
    bind<BaasicMeteringACLRouteDefinition>(TYPES.BaasicMeteringACLRouteDefinition).to(BaasicMeteringACLRouteDefinition);
    bind<BaasicMeteringACLClient>(TYPES.BaasicMeteringACLClient).to(BaasicMeteringACLClient);
    bind<BaasicMeteringRouteDefinition>(TYPES.BaasicMeteringRouteDefinition).to(BaasicMeteringRouteDefinition);
    bind<BaasicMeteringClient>(TYPES.BaasicMeteringClient).to(BaasicMeteringClient);
    bind<BaasicMeteringSettingsRouteDefinition>(TYPES.BaasicMeteringSettingsRouteDefinition).to(BaasicMeteringSettingsRouteDefinition);
    bind<BaasicMeteringSettingsClient>(TYPES.BaasicMeteringSettingsClient).to(BaasicMeteringSettingsClient);
});

export { diModule };