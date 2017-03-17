import { ContainerModule } from "inversify";
import {
    MeteringACLClient,
    BaasicMeteringACLRouteDefinition,
    MeteringBatchClient,
    BaasicMeteringBatchRouteDefinition,
    MeteringCategoryBatchClient,
    BaasicMeteringCategoryBatchRouteDefinition,
    BaasicMeteringCategoryRouteDefinition,
    MeteringCategoryClient,
    BaasicMeteringRouteDefinition,
    MeteringClient,
    BaasicMeteringSettingsRouteDefinition,
    MeteringSettingsClient,
    MeteringStatisticsClient,
    BaasicMeteringStatisticsRouteDefinition
} from 'modules/metering';

const TYPES = {
    MeteringACLClient: Symbol("MeteringACLClient"),
    BaasicMeteringACLRouteDefinition: Symbol("BaasicMeteringACLRouteDefinition"),
    MeteringBatchClient: Symbol("MeteringBatchClient"),
    BaasicMeteringBatchRouteDefinition: Symbol("BaasicMeteringBatchRouteDefinition"),
    MeteringCategoryBatchClient: Symbol("MeteringCategoryBatchClient"),
    BaasicMeteringCategoryBatchRouteDefinition: Symbol("BaasicMeteringCategoryBatchRouteDefinition"),
    BaasicMeteringCategoryRouteDefinition: Symbol("BaasicMeteringCategoryRouteDefinition"),
    MeteringCategoryClient: Symbol("MeteringCategoryClient"),
    BaasicMeteringRouteDefinition: Symbol("BaasicMeteringRouteDefinition"),
    MeteringClient: Symbol("MeteringClient"),
    BaasicMeteringSettingsRouteDefinition: Symbol("BaasicMeteringSettingsRouteDefinition"),
    MeteringSettingsClient: Symbol("MeteringSettingsClient"),
    MeteringStatisticsClient: Symbol("MeteringStatisticsClient"),
    BaasicMeteringStatisticsRouteDefinition: Symbol("BaasicMeteringStatisticsRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicMeteringCategoryBatchRouteDefinition>(TYPES.BaasicMeteringCategoryBatchRouteDefinition).to(BaasicMeteringCategoryBatchRouteDefinition);
    bind<MeteringCategoryBatchClient>(TYPES.MeteringCategoryBatchClient).to(MeteringCategoryBatchClient);
    bind<BaasicMeteringCategoryRouteDefinition>(TYPES.BaasicMeteringCategoryRouteDefinition).to(BaasicMeteringCategoryRouteDefinition);
    bind<MeteringCategoryClient>(TYPES.MeteringCategoryClient).to(MeteringCategoryClient);
    bind<BaasicMeteringBatchRouteDefinition>(TYPES.BaasicMeteringBatchRouteDefinition).to(BaasicMeteringBatchRouteDefinition);
    bind<MeteringBatchClient>(TYPES.MeteringBatchClient).to(MeteringBatchClient);
    bind<BaasicMeteringStatisticsRouteDefinition>(TYPES.BaasicMeteringStatisticsRouteDefinition).to(BaasicMeteringStatisticsRouteDefinition);
    bind<MeteringStatisticsClient>(TYPES.MeteringStatisticsClient).to(MeteringStatisticsClient);
    bind<BaasicMeteringACLRouteDefinition>(TYPES.BaasicMeteringACLRouteDefinition).to(BaasicMeteringACLRouteDefinition);
    bind<MeteringACLClient>(TYPES.MeteringACLClient).to(MeteringACLClient);
    bind<BaasicMeteringRouteDefinition>(TYPES.BaasicMeteringRouteDefinition).to(BaasicMeteringRouteDefinition);
    bind<MeteringClient>(TYPES.MeteringClient).to(MeteringClient);
    bind<BaasicMeteringSettingsRouteDefinition>(TYPES.BaasicMeteringSettingsRouteDefinition).to(BaasicMeteringSettingsRouteDefinition);
    bind<MeteringSettingsClient>(TYPES.MeteringSettingsClient).to(MeteringSettingsClient);
});

export { diModule };