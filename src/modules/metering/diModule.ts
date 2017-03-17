import { ContainerModule } from "inversify";
import {
    MeteringACLClient,
    MeteringACLRouteDefinition,
    MeteringBatchClient,
    MeteringBatchRouteDefinition,
    MeteringCategoryBatchClient,
    MeteringCategoryBatchRouteDefinition,
    MeteringCategoryRouteDefinition,
    MeteringCategoryClient,
    MeteringRouteDefinition,
    MeteringClient,
    MeteringSettingsRouteDefinition,
    MeteringSettingsClient,
    MeteringStatisticsClient,
    MeteringStatisticsRouteDefinition
} from 'modules/metering';

const TYPES = {
    MeteringACLClient: Symbol("MeteringACLClient"),
    MeteringACLRouteDefinition: Symbol("MeteringACLRouteDefinition"),
    MeteringBatchClient: Symbol("MeteringBatchClient"),
    MeteringBatchRouteDefinition: Symbol("MeteringBatchRouteDefinition"),
    MeteringCategoryBatchClient: Symbol("MeteringCategoryBatchClient"),
    MeteringCategoryBatchRouteDefinition: Symbol("MeteringCategoryBatchRouteDefinition"),
    MeteringCategoryRouteDefinition: Symbol("MeteringCategoryRouteDefinition"),
    MeteringCategoryClient: Symbol("MeteringCategoryClient"),
    MeteringRouteDefinition: Symbol("MeteringRouteDefinition"),
    MeteringClient: Symbol("MeteringClient"),
    MeteringSettingsRouteDefinition: Symbol("MeteringSettingsRouteDefinition"),
    MeteringSettingsClient: Symbol("MeteringSettingsClient"),
    MeteringStatisticsClient: Symbol("MeteringStatisticsClient"),
    MeteringStatisticsRouteDefinition: Symbol("MeteringStatisticsRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<MeteringCategoryBatchRouteDefinition>(TYPES.MeteringCategoryBatchRouteDefinition).to(MeteringCategoryBatchRouteDefinition);
    bind<MeteringCategoryBatchClient>(TYPES.MeteringCategoryBatchClient).to(MeteringCategoryBatchClient);
    bind<MeteringCategoryRouteDefinition>(TYPES.MeteringCategoryRouteDefinition).to(MeteringCategoryRouteDefinition);
    bind<MeteringCategoryClient>(TYPES.MeteringCategoryClient).to(MeteringCategoryClient);
    bind<MeteringBatchRouteDefinition>(TYPES.MeteringBatchRouteDefinition).to(MeteringBatchRouteDefinition);
    bind<MeteringBatchClient>(TYPES.MeteringBatchClient).to(MeteringBatchClient);
    bind<MeteringStatisticsRouteDefinition>(TYPES.MeteringStatisticsRouteDefinition).to(MeteringStatisticsRouteDefinition);
    bind<MeteringStatisticsClient>(TYPES.MeteringStatisticsClient).to(MeteringStatisticsClient);
    bind<MeteringACLRouteDefinition>(TYPES.MeteringACLRouteDefinition).to(MeteringACLRouteDefinition);
    bind<MeteringACLClient>(TYPES.MeteringACLClient).to(MeteringACLClient);
    bind<MeteringRouteDefinition>(TYPES.MeteringRouteDefinition).to(MeteringRouteDefinition);
    bind<MeteringClient>(TYPES.MeteringClient).to(MeteringClient);
    bind<MeteringSettingsRouteDefinition>(TYPES.MeteringSettingsRouteDefinition).to(MeteringSettingsRouteDefinition);
    bind<MeteringSettingsClient>(TYPES.MeteringSettingsClient).to(MeteringSettingsClient);
});

export { diModule };