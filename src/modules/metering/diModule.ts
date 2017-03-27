import { ContainerModule } from "inversify";
import {
    MeteringACLClient,
    MeteringACLRoute,
    MeteringBatchClient,
    MeteringBatchRoute,
    MeteringCategoryBatchClient,
    MeteringCategoryBatchRoute,
    MeteringCategoryRoute,
    MeteringCategoryClient,
    MeteringRoute,
    MeteringClient,
    MeteringSettingsRoute,
    MeteringSettingsClient,
    MeteringStatisticsClient,
    MeteringStatisticsRoute
} from './';

const TYPES = {
    MeteringACLClient: Symbol("MeteringACLClient"),
    MeteringACLRoute: Symbol("MeteringACLRoute"),
    MeteringBatchClient: Symbol("MeteringBatchClient"),
    MeteringBatchRoute: Symbol("MeteringBatchRoute"),
    MeteringCategoryBatchClient: Symbol("MeteringCategoryBatchClient"),
    MeteringCategoryBatchRoute: Symbol("MeteringCategoryBatchRoute"),
    MeteringCategoryRoute: Symbol("MeteringCategoryRoute"),
    MeteringCategoryClient: Symbol("MeteringCategoryClient"),
    MeteringRoute: Symbol("MeteringRoute"),
    MeteringClient: Symbol("MeteringClient"),
    MeteringSettingsRoute: Symbol("MeteringSettingsRoute"),
    MeteringSettingsClient: Symbol("MeteringSettingsClient"),
    MeteringStatisticsClient: Symbol("MeteringStatisticsClient"),
    MeteringStatisticsRoute: Symbol("MeteringStatisticsRoute")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<MeteringCategoryBatchRoute>(TYPES.MeteringCategoryBatchRoute).to(MeteringCategoryBatchRoute);
    bind<MeteringCategoryBatchClient>(TYPES.MeteringCategoryBatchClient).to(MeteringCategoryBatchClient);
    bind<MeteringCategoryRoute>(TYPES.MeteringCategoryRoute).to(MeteringCategoryRoute);
    bind<MeteringCategoryClient>(TYPES.MeteringCategoryClient).to(MeteringCategoryClient);
    bind<MeteringBatchRoute>(TYPES.MeteringBatchRoute).to(MeteringBatchRoute);
    bind<MeteringBatchClient>(TYPES.MeteringBatchClient).to(MeteringBatchClient);
    bind<MeteringStatisticsRoute>(TYPES.MeteringStatisticsRoute).to(MeteringStatisticsRoute);
    bind<MeteringStatisticsClient>(TYPES.MeteringStatisticsClient).to(MeteringStatisticsClient);
    bind<MeteringACLRoute>(TYPES.MeteringACLRoute).to(MeteringACLRoute);
    bind<MeteringACLClient>(TYPES.MeteringACLClient).to(MeteringACLClient);
    bind<MeteringRoute>(TYPES.MeteringRoute).to(MeteringRoute);
    bind<MeteringClient>(TYPES.MeteringClient).to(MeteringClient);
    bind<MeteringSettingsRoute>(TYPES.MeteringSettingsRoute).to(MeteringSettingsRoute);
    bind<MeteringSettingsClient>(TYPES.MeteringSettingsClient).to(MeteringSettingsClient);
});

export { diModule };