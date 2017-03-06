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
    bind<BaasicNotificationsPublishBatchRouteDefinition>(TYPES.BaasicNotificationsPublishBatchRouteDefinition).toSelf();
    bind<BaasicNotificationsPublishBatchClient>(TYPES.BaasicNotificationsPublishBatchClient).toSelf();
    bind<BaasicNotificationsPublishRouteDefinition>(TYPES.BaasicNotificationsPublishRouteDefinition).toSelf();
    bind<BaasicNotificationsPublishClient>(TYPES.BaasicNotificationsPublishClient).toSelf();
    bind<BaasicNotificationsSubscriptionsUsersBatchRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsUsersBatchRouteDefinition).toSelf();
    bind<BaasicNotificationsSubscriptionsUsersBatchClient>(TYPES.BaasicNotificationsSubscriptionsUsersBatchClient).toSelf();
    bind<BaasicNotificationsSubscriptionsUsersRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsUsersRouteDefinition).toSelf();
    bind<BaasicNotificationsSubscriptionsUsersClient>(TYPES.BaasicNotificationsSubscriptionsUsersClient).toSelf();
    bind<BaasicNotificationsSubscriptionsAnonymousRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsAnonymousRouteDefinition).toSelf();
    bind<BaasicNotificationsSubscriptionsAnonymousBatchClient>(TYPES.BaasicNotificationsSubscriptionsAnonymousBatchClient).toSelf();
    bind<BaasicNotificationsSubscriptionsAnonymousClient>(TYPES.BaasicNotificationsSubscriptionsAnonymousClient).toSelf();
    bind<BaasicNotificationsSubscriptionsRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsRouteDefinition).toSelf();
    bind<BaasicNotificationsSubscriptionsClient>(TYPES.BaasicNotificationsSubscriptionsClient).toSelf();
    bind<BaasicNotificationsRegistrationsUsersBatchRouteDefinition>(TYPES.BaasicNotificationsRegistrationsUsersBatchRouteDefinition).toSelf();
    bind<BaasicNotificationsRegistrationsUsersBatchClient>(TYPES.BaasicNotificationsRegistrationsUsersBatchClient).toSelf();
    bind<BaasicNotificationsRegistrationsUsersRouteDefinition>(TYPES.BaasicNotificationsRegistrationsUsersRouteDefinition).toSelf();
    bind<BaasicNotificationsRegistrationsUsersClient>(TYPES.BaasicNotificationsRegistrationsUsersClient).toSelf();
    bind<BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition>(TYPES.BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition).toSelf();
    bind<BaasicNotificationsRegistrationsAnonymousBatchClient>(TYPES.BaasicNotificationsRegistrationsAnonymousBatchClient).toSelf();
    bind<BaasicNotificationsRegistrationsAnonymousRouteDefinition>(TYPES.BaasicNotificationsRegistrationsAnonymousRouteDefinition).toSelf();
    bind<BaasicNotificationsRegistrationsAnonymousClient>(TYPES.BaasicNotificationsRegistrationsAnonymousClient).toSelf();
    bind<BaasicNotificationsRegistrationsRouteDefinition>(TYPES.BaasicNotificationsRegistrationsRouteDefinition).toSelf();
    bind<BaasicNotificationsRegistrationsClient>(TYPES.BaasicNotificationsRegistrationsClient).toSelf();
    bind<BaasicNotificationsSettingsRouteDefinition>(TYPES.BaasicNotificationsSettingsRouteDefinition).toSelf();
    bind<BaasicNotificationsSettingsClient>(TYPES.BaasicNotificationsSettingsClient).toSelf();
    bind<BaasicNotificationsRouteDefinition>(TYPES.BaasicNotificationsRouteDefinition).toSelf();
    bind<BaasicNotificationsClient>(TYPES.BaasicNotificationsClient).toSelf();
});

export { diModule };