import { ContainerModule } from "inversify";
import {
    BaasicNotificationsClient,
    BaasicNotificationsPublishBatchClient,
    BaasicNotificationsPublishBatchRouteDefinition,
    BaasicNotificationsPublishRouteDefinition,
    BaasicNotificationsPublishClient,
    BaasicNotificationsRegistrationsAnonymousBatchClient,
    BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition,
    BaasicNotificationsRegistrationsAnonymousClient,
    BaasicNotificationsRegistrationsAnonymousRouteDefinition,
    BaasicNotificationsRegistrationsRouteDefinition,
    BaasicNotificationsRegistrationsUsersBatchRouteDefinition,
    BaasicNotificationsRegistrationsUsersBatchClient,
    BaasicNotificationsRegistrationsUsersClient,
    BaasicNotificationsRegistrationsUsersRouteDefinition,
    BaasicNotificationsRouteDefinition,
    BaasicNotificationsRegistrationsClient,
    BaasicNotificationsSubscriptionsAnonymousBatchClient,
    BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition,
    BaasicNotificationsSubscriptionsAnonymousRouteDefinition,
    BaasicNotificationsSubscriptionsAnonymousClient,
    BaasicNotificationsSubscriptionsClient,
    BaasicNotificationsSubscriptionsRouteDefinition,
    BaasicNotificationsSubscriptionsUsersBatchClient,
    BaasicNotificationsSubscriptionsUsersBatchRouteDefinition,
    BaasicNotificationsSubscriptionsUsersClient,
    BaasicNotificationsSubscriptionsUsersRouteDefinition,
    BaasicNotificationsSettingsRouteDefinition,
    BaasicNotificationsSettingsClient
} from 'modules/notifications';

const TYPES = {
    BaasicNotificationsClient: Symbol("BaasicNotificationsClient"),
    BaasicNotificationsPublishBatchClient: Symbol("BaasicNotificationsPublishBatchClient"),
    BaasicNotificationsPublishBatchRouteDefinition: Symbol("BaasicNotificationsPublishBatchRouteDefinition"),
    BaasicNotificationsPublishRouteDefinition: Symbol("BaasicNotificationsPublishRouteDefinition"),
    BaasicNotificationsPublishClient: Symbol("BaasicNotificationsPublishClient"),
    BaasicNotificationsRegistrationsAnonymousBatchClient: Symbol("BaasicNotificationsRegistrationsAnonymousBatchClient"),
    BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition: Symbol("BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition"),
    BaasicNotificationsRegistrationsAnonymousClient: Symbol("BasicNotificationsRegistrationsAnonymousClient"),
    BaasicNotificationsRegistrationsAnonymousRouteDefinition: Symbol("BaasicNotificationsRegistrationsAnonymousRouteDefinition"),
    BaasicNotificationsRegistrationsRouteDefinition: Symbol("BaasicNotificationsRegistrationsRouteDefinition"),
    BaasicNotificationsRegistrationsUsersBatchRouteDefinition: Symbol("BaasicNotificationsRegistrationsUsersBatchRouteDefinition"),
    BaasicNotificationsRegistrationsUsersBatchClient: Symbol("BaasicNotificationsRegistrationsUsersBatchClient"),
    BaasicNotificationsRegistrationsUsersClient: Symbol("BaasicNotificationsRegistrationsUsersClient"),
    BaasicNotificationsRegistrationsUsersRouteDefinition: Symbol("BaasicNotificationsRegistrationsUsersRouteDefinition"),
    BaasicNotificationsRouteDefinition: Symbol("BaasicNotificationsRouteDefinition"),
    BaasicNotificationsRegistrationsClient: Symbol("BaasicNotificationsRegistrationsClient"),
    BaasicNotificationsSubscriptionsClient: Symbol("BaasicNotificationsSubscriptionsClient"),
    BaasicNotificationsSubscriptionsRouteDefinition: Symbol("BaasicNotificationsSubscriptionsRouteDefinition"),
    BaasicNotificationsSubscriptionsAnonymousBatchClient: Symbol("BaasicNotificationsSubscriptionsAnonymousBatchClient"),
    BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition: Symbol("BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition"),
    BaasicNotificationsSubscriptionsAnonymousRouteDefinition: Symbol("BaasicNotificationsSubscriptionsAnonymousRouteDefinition"),
    BaasicNotificationsSubscriptionsAnonymousClient: Symbol("BaasicNotificationsSubscriptionsAnonymousClient"),
    BaasicNotificationsSubscriptionsUsersRouteDefinition: Symbol("BasicNotificationsSubscriptionsRouteDefinition"),
    BaasicNotificationsSubscriptionsUsersBatchClient: Symbol("BaasicNotificationsSubscriptionsUsersBatchClient"),
    BaasicNotificationsSubscriptionsUsersBatchRouteDefinition: Symbol("BaasicNotificationsSubscriptionsUsersBatchRouteDefinition"),
    BaasicNotificationsSubscriptionsUsersClient: Symbol("BaasicNotificationsSubscriptionsUsersClient"),
    BaasicNotificationsSettingsRouteDefinition: Symbol("BaasicNotificationsSettingsRouteDefinition"),
    BaasicNotificationsSettingsClient: Symbol("BaasicNotificationsSettingsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicNotificationsPublishBatchRouteDefinition>(TYPES.BaasicNotificationsPublishBatchRouteDefinition).to(BaasicNotificationsPublishBatchRouteDefinition);
    bind<BaasicNotificationsPublishBatchClient>(TYPES.BaasicNotificationsPublishBatchClient).to(BaasicNotificationsPublishBatchClient);
    bind<BaasicNotificationsPublishRouteDefinition>(TYPES.BaasicNotificationsPublishRouteDefinition).to(BaasicNotificationsPublishRouteDefinition);
    bind<BaasicNotificationsPublishClient>(TYPES.BaasicNotificationsPublishClient).to(BaasicNotificationsPublishClient);
    bind<BaasicNotificationsSubscriptionsUsersBatchRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsUsersBatchRouteDefinition).to(BaasicNotificationsSubscriptionsUsersBatchRouteDefinition);
    bind<BaasicNotificationsSubscriptionsUsersBatchClient>(TYPES.BaasicNotificationsSubscriptionsUsersBatchClient).to(BaasicNotificationsSubscriptionsUsersBatchClient);
    bind<BaasicNotificationsSubscriptionsUsersRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsUsersRouteDefinition).to(BaasicNotificationsSubscriptionsUsersRouteDefinition);
    bind<BaasicNotificationsSubscriptionsUsersClient>(TYPES.BaasicNotificationsSubscriptionsUsersClient).to(BaasicNotificationsSubscriptionsUsersClient);
    bind<BaasicNotificationsSubscriptionsAnonymousRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsAnonymousRouteDefinition).to(BaasicNotificationsSubscriptionsAnonymousRouteDefinition);
    bind<BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition).to(BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition);
    bind<BaasicNotificationsSubscriptionsAnonymousBatchClient>(TYPES.BaasicNotificationsSubscriptionsAnonymousBatchClient).to(BaasicNotificationsSubscriptionsAnonymousBatchClient);
    bind<BaasicNotificationsSubscriptionsAnonymousClient>(TYPES.BaasicNotificationsSubscriptionsAnonymousClient).to(BaasicNotificationsSubscriptionsAnonymousClient);
    bind<BaasicNotificationsSubscriptionsRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsRouteDefinition).to(BaasicNotificationsSubscriptionsRouteDefinition);
    bind<BaasicNotificationsSubscriptionsClient>(TYPES.BaasicNotificationsSubscriptionsClient).to(BaasicNotificationsSubscriptionsClient);
    bind<BaasicNotificationsRegistrationsUsersBatchRouteDefinition>(TYPES.BaasicNotificationsRegistrationsUsersBatchRouteDefinition).to(BaasicNotificationsRegistrationsUsersBatchRouteDefinition);
    bind<BaasicNotificationsRegistrationsUsersBatchClient>(TYPES.BaasicNotificationsRegistrationsUsersBatchClient).to(BaasicNotificationsRegistrationsUsersBatchClient);
    bind<BaasicNotificationsRegistrationsUsersRouteDefinition>(TYPES.BaasicNotificationsRegistrationsUsersRouteDefinition).to(BaasicNotificationsRegistrationsUsersRouteDefinition);
    bind<BaasicNotificationsRegistrationsUsersClient>(TYPES.BaasicNotificationsRegistrationsUsersClient).to(BaasicNotificationsRegistrationsUsersClient);
    bind<BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition>(TYPES.BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition).to(BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition);
    bind<BaasicNotificationsRegistrationsAnonymousBatchClient>(TYPES.BaasicNotificationsRegistrationsAnonymousBatchClient).to(BaasicNotificationsRegistrationsAnonymousBatchClient);
    bind<BaasicNotificationsRegistrationsAnonymousRouteDefinition>(TYPES.BaasicNotificationsRegistrationsAnonymousRouteDefinition).to(BaasicNotificationsRegistrationsAnonymousRouteDefinition);
    bind<BaasicNotificationsRegistrationsAnonymousClient>(TYPES.BaasicNotificationsRegistrationsAnonymousClient).to(BaasicNotificationsRegistrationsAnonymousClient);
    bind<BaasicNotificationsRegistrationsRouteDefinition>(TYPES.BaasicNotificationsRegistrationsRouteDefinition).to(BaasicNotificationsRegistrationsRouteDefinition);
    bind<BaasicNotificationsRegistrationsClient>(TYPES.BaasicNotificationsRegistrationsClient).to(BaasicNotificationsRegistrationsClient);
    bind<BaasicNotificationsSettingsRouteDefinition>(TYPES.BaasicNotificationsSettingsRouteDefinition).to(BaasicNotificationsSettingsRouteDefinition);
    bind<BaasicNotificationsSettingsClient>(TYPES.BaasicNotificationsSettingsClient).to(BaasicNotificationsSettingsClient);
    bind<BaasicNotificationsRouteDefinition>(TYPES.BaasicNotificationsRouteDefinition).to(BaasicNotificationsRouteDefinition);
    bind<BaasicNotificationsClient>(TYPES.BaasicNotificationsClient).to(BaasicNotificationsClient);
});

export { diModule };