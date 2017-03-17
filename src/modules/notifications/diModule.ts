import { ContainerModule } from "inversify";
import {
    NotificationsClient,
    NotificationsPublishBatchClient,
    BaasicNotificationsPublishBatchRouteDefinition,
    BaasicNotificationsPublishRouteDefinition,
    NotificationsPublishClient,
    NotificationsRegistrationsAnonymousBatchClient,
    BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition,
    NotificationsRegistrationsAnonymousClient,
    BaasicNotificationsRegistrationsAnonymousRouteDefinition,
    BaasicNotificationsRegistrationsRouteDefinition,
    BaasicNotificationsRegistrationsUsersBatchRouteDefinition,
    NotificationsRegistrationsUsersBatchClient,
    NotificationsRegistrationsUsersClient,
    BaasicNotificationsRegistrationsUsersRouteDefinition,
    BaasicNotificationsRouteDefinition,
    NotificationsRegistrationsClient,
    NotificationsSubscriptionsAnonymousBatchClient,
    BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition,
    BaasicNotificationsSubscriptionsAnonymousRouteDefinition,
    NotificationsSubscriptionsAnonymousClient,
    NotificationsSubscriptionsClient,
    BaasicNotificationsSubscriptionsRouteDefinition,
    NotificationsSubscriptionsUsersBatchClient,
    BaasicNotificationsSubscriptionsUsersBatchRouteDefinition,
    NotificationsSubscriptionsUsersClient,
    BaasicNotificationsSubscriptionsUsersRouteDefinition,
    BaasicNotificationsSettingsRouteDefinition,
    NotificationsSettingsClient
} from 'modules/notifications';

const TYPES = {
    NotificationsClient: Symbol("NotificationsClient"),
    NotificationsPublishBatchClient: Symbol("NotificationsPublishBatchClient"),
    BaasicNotificationsPublishBatchRouteDefinition: Symbol("BaasicNotificationsPublishBatchRouteDefinition"),
    BaasicNotificationsPublishRouteDefinition: Symbol("BaasicNotificationsPublishRouteDefinition"),
    NotificationsPublishClient: Symbol("NotificationsPublishClient"),
    NotificationsRegistrationsAnonymousBatchClient: Symbol("NotificationsRegistrationsAnonymousBatchClient"),
    BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition: Symbol("BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition"),
    NotificationsRegistrationsAnonymousClient: Symbol("BasicNotificationsRegistrationsAnonymousClient"),
    BaasicNotificationsRegistrationsAnonymousRouteDefinition: Symbol("BaasicNotificationsRegistrationsAnonymousRouteDefinition"),
    BaasicNotificationsRegistrationsRouteDefinition: Symbol("BaasicNotificationsRegistrationsRouteDefinition"),
    BaasicNotificationsRegistrationsUsersBatchRouteDefinition: Symbol("BaasicNotificationsRegistrationsUsersBatchRouteDefinition"),
    NotificationsRegistrationsUsersBatchClient: Symbol("NotificationsRegistrationsUsersBatchClient"),
    NotificationsRegistrationsUsersClient: Symbol("NotificationsRegistrationsUsersClient"),
    BaasicNotificationsRegistrationsUsersRouteDefinition: Symbol("BaasicNotificationsRegistrationsUsersRouteDefinition"),
    BaasicNotificationsRouteDefinition: Symbol("BaasicNotificationsRouteDefinition"),
    NotificationsRegistrationsClient: Symbol("NotificationsRegistrationsClient"),
    NotificationsSubscriptionsClient: Symbol("NotificationsSubscriptionsClient"),
    BaasicNotificationsSubscriptionsRouteDefinition: Symbol("BaasicNotificationsSubscriptionsRouteDefinition"),
    NotificationsSubscriptionsAnonymousBatchClient: Symbol("NotificationsSubscriptionsAnonymousBatchClient"),
    BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition: Symbol("BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition"),
    BaasicNotificationsSubscriptionsAnonymousRouteDefinition: Symbol("BaasicNotificationsSubscriptionsAnonymousRouteDefinition"),
    NotificationsSubscriptionsAnonymousClient: Symbol("NotificationsSubscriptionsAnonymousClient"),
    BaasicNotificationsSubscriptionsUsersRouteDefinition: Symbol("BasicNotificationsSubscriptionsRouteDefinition"),
    NotificationsSubscriptionsUsersBatchClient: Symbol("NotificationsSubscriptionsUsersBatchClient"),
    BaasicNotificationsSubscriptionsUsersBatchRouteDefinition: Symbol("BaasicNotificationsSubscriptionsUsersBatchRouteDefinition"),
    NotificationsSubscriptionsUsersClient: Symbol("NotificationsSubscriptionsUsersClient"),
    BaasicNotificationsSettingsRouteDefinition: Symbol("BaasicNotificationsSettingsRouteDefinition"),
    NotificationsSettingsClient: Symbol("NotificationsSettingsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicNotificationsPublishBatchRouteDefinition>(TYPES.BaasicNotificationsPublishBatchRouteDefinition).to(BaasicNotificationsPublishBatchRouteDefinition);
    bind<NotificationsPublishBatchClient>(TYPES.NotificationsPublishBatchClient).to(NotificationsPublishBatchClient);
    bind<BaasicNotificationsPublishRouteDefinition>(TYPES.BaasicNotificationsPublishRouteDefinition).to(BaasicNotificationsPublishRouteDefinition);
    bind<NotificationsPublishClient>(TYPES.NotificationsPublishClient).to(NotificationsPublishClient);
    bind<BaasicNotificationsSubscriptionsUsersBatchRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsUsersBatchRouteDefinition).to(BaasicNotificationsSubscriptionsUsersBatchRouteDefinition);
    bind<NotificationsSubscriptionsUsersBatchClient>(TYPES.NotificationsSubscriptionsUsersBatchClient).to(NotificationsSubscriptionsUsersBatchClient);
    bind<BaasicNotificationsSubscriptionsUsersRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsUsersRouteDefinition).to(BaasicNotificationsSubscriptionsUsersRouteDefinition);
    bind<NotificationsSubscriptionsUsersClient>(TYPES.NotificationsSubscriptionsUsersClient).to(NotificationsSubscriptionsUsersClient);
    bind<BaasicNotificationsSubscriptionsAnonymousRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsAnonymousRouteDefinition).to(BaasicNotificationsSubscriptionsAnonymousRouteDefinition);
    bind<BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition).to(BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition);
    bind<NotificationsSubscriptionsAnonymousBatchClient>(TYPES.NotificationsSubscriptionsAnonymousBatchClient).to(NotificationsSubscriptionsAnonymousBatchClient);
    bind<NotificationsSubscriptionsAnonymousClient>(TYPES.NotificationsSubscriptionsAnonymousClient).to(NotificationsSubscriptionsAnonymousClient);
    bind<BaasicNotificationsSubscriptionsRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsRouteDefinition).to(BaasicNotificationsSubscriptionsRouteDefinition);
    bind<NotificationsSubscriptionsClient>(TYPES.NotificationsSubscriptionsClient).to(NotificationsSubscriptionsClient);
    bind<BaasicNotificationsRegistrationsUsersBatchRouteDefinition>(TYPES.BaasicNotificationsRegistrationsUsersBatchRouteDefinition).to(BaasicNotificationsRegistrationsUsersBatchRouteDefinition);
    bind<NotificationsRegistrationsUsersBatchClient>(TYPES.NotificationsRegistrationsUsersBatchClient).to(NotificationsRegistrationsUsersBatchClient);
    bind<BaasicNotificationsRegistrationsUsersRouteDefinition>(TYPES.BaasicNotificationsRegistrationsUsersRouteDefinition).to(BaasicNotificationsRegistrationsUsersRouteDefinition);
    bind<NotificationsRegistrationsUsersClient>(TYPES.NotificationsRegistrationsUsersClient).to(NotificationsRegistrationsUsersClient);
    bind<BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition>(TYPES.BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition).to(BaasicNotificationsRegistrationsAnonymousBatchRouteDefinition);
    bind<NotificationsRegistrationsAnonymousBatchClient>(TYPES.NotificationsRegistrationsAnonymousBatchClient).to(NotificationsRegistrationsAnonymousBatchClient);
    bind<BaasicNotificationsRegistrationsAnonymousRouteDefinition>(TYPES.BaasicNotificationsRegistrationsAnonymousRouteDefinition).to(BaasicNotificationsRegistrationsAnonymousRouteDefinition);
    bind<NotificationsRegistrationsAnonymousClient>(TYPES.NotificationsRegistrationsAnonymousClient).to(NotificationsRegistrationsAnonymousClient);
    bind<BaasicNotificationsRegistrationsRouteDefinition>(TYPES.BaasicNotificationsRegistrationsRouteDefinition).to(BaasicNotificationsRegistrationsRouteDefinition);
    bind<NotificationsRegistrationsClient>(TYPES.NotificationsRegistrationsClient).to(NotificationsRegistrationsClient);
    bind<BaasicNotificationsSettingsRouteDefinition>(TYPES.BaasicNotificationsSettingsRouteDefinition).to(BaasicNotificationsSettingsRouteDefinition);
    bind<NotificationsSettingsClient>(TYPES.NotificationsSettingsClient).to(NotificationsSettingsClient);
    bind<BaasicNotificationsRouteDefinition>(TYPES.BaasicNotificationsRouteDefinition).to(BaasicNotificationsRouteDefinition);
    bind<NotificationsClient>(TYPES.NotificationsClient).to(NotificationsClient);
});

export { diModule };