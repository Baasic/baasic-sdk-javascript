import { ContainerModule } from "inversify";
import {
    NotificationsClient,
    NotificationsPublishBatchClient,
    NotificationsPublishBatchRouteDefinition,
    NotificationsPublishRouteDefinition,
    NotificationsPublishClient,
    NotificationsRegistrationsAnonymousBatchClient,
    NotificationsRegistrationsAnonymousBatchRouteDefinition,
    NotificationsRegistrationsAnonymousClient,
    NotificationsRegistrationsAnonymousRouteDefinition,
    NotificationsRegistrationsRouteDefinition,
    NotificationsRegistrationsUsersBatchRouteDefinition,
    NotificationsRegistrationsUsersBatchClient,
    NotificationsRegistrationsUsersClient,
    NotificationsRegistrationsUsersRouteDefinition,
    NotificationsRouteDefinition,
    NotificationsRegistrationsClient,
    NotificationsSubscriptionsAnonymousBatchClient,
    NotificationsSubscriptionsAnonymousBatchRouteDefinition,
    NotificationsSubscriptionsAnonymousRouteDefinition,
    NotificationsSubscriptionsAnonymousClient,
    NotificationsSubscriptionsClient,
    NotificationsSubscriptionsRouteDefinition,
    NotificationsSubscriptionsUsersBatchClient,
    NotificationsSubscriptionsUsersBatchRouteDefinition,
    NotificationsSubscriptionsUsersClient,
    NotificationsSubscriptionsUsersRouteDefinition,
    NotificationsSettingsRouteDefinition,
    NotificationsSettingsClient
} from 'modules/notifications';

const TYPES = {
    NotificationsClient: Symbol("NotificationsClient"),
    NotificationsPublishBatchClient: Symbol("NotificationsPublishBatchClient"),
    NotificationsPublishBatchRouteDefinition: Symbol("NotificationsPublishBatchRouteDefinition"),
    NotificationsPublishRouteDefinition: Symbol("NotificationsPublishRouteDefinition"),
    NotificationsPublishClient: Symbol("NotificationsPublishClient"),
    NotificationsRegistrationsAnonymousBatchClient: Symbol("NotificationsRegistrationsAnonymousBatchClient"),
    NotificationsRegistrationsAnonymousBatchRouteDefinition: Symbol("NotificationsRegistrationsAnonymousBatchRouteDefinition"),
    NotificationsRegistrationsAnonymousClient: Symbol("BasicNotificationsRegistrationsAnonymousClient"),
    NotificationsRegistrationsAnonymousRouteDefinition: Symbol("NotificationsRegistrationsAnonymousRouteDefinition"),
    NotificationsRegistrationsRouteDefinition: Symbol("NotificationsRegistrationsRouteDefinition"),
    NotificationsRegistrationsUsersBatchRouteDefinition: Symbol("NotificationsRegistrationsUsersBatchRouteDefinition"),
    NotificationsRegistrationsUsersBatchClient: Symbol("NotificationsRegistrationsUsersBatchClient"),
    NotificationsRegistrationsUsersClient: Symbol("NotificationsRegistrationsUsersClient"),
    NotificationsRegistrationsUsersRouteDefinition: Symbol("NotificationsRegistrationsUsersRouteDefinition"),
    NotificationsRouteDefinition: Symbol("NotificationsRouteDefinition"),
    NotificationsRegistrationsClient: Symbol("NotificationsRegistrationsClient"),
    NotificationsSubscriptionsClient: Symbol("NotificationsSubscriptionsClient"),
    NotificationsSubscriptionsRouteDefinition: Symbol("NotificationsSubscriptionsRouteDefinition"),
    NotificationsSubscriptionsAnonymousBatchClient: Symbol("NotificationsSubscriptionsAnonymousBatchClient"),
    NotificationsSubscriptionsAnonymousBatchRouteDefinition: Symbol("NotificationsSubscriptionsAnonymousBatchRouteDefinition"),
    NotificationsSubscriptionsAnonymousRouteDefinition: Symbol("NotificationsSubscriptionsAnonymousRouteDefinition"),
    NotificationsSubscriptionsAnonymousClient: Symbol("NotificationsSubscriptionsAnonymousClient"),
    NotificationsSubscriptionsUsersRouteDefinition: Symbol("BasicNotificationsSubscriptionsRouteDefinition"),
    NotificationsSubscriptionsUsersBatchClient: Symbol("NotificationsSubscriptionsUsersBatchClient"),
    NotificationsSubscriptionsUsersBatchRouteDefinition: Symbol("NotificationsSubscriptionsUsersBatchRouteDefinition"),
    NotificationsSubscriptionsUsersClient: Symbol("NotificationsSubscriptionsUsersClient"),
    NotificationsSettingsRouteDefinition: Symbol("NotificationsSettingsRouteDefinition"),
    NotificationsSettingsClient: Symbol("NotificationsSettingsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<NotificationsPublishBatchRouteDefinition>(TYPES.NotificationsPublishBatchRouteDefinition).to(NotificationsPublishBatchRouteDefinition);
    bind<NotificationsPublishBatchClient>(TYPES.NotificationsPublishBatchClient).to(NotificationsPublishBatchClient);
    bind<NotificationsPublishRouteDefinition>(TYPES.NotificationsPublishRouteDefinition).to(NotificationsPublishRouteDefinition);
    bind<NotificationsPublishClient>(TYPES.NotificationsPublishClient).to(NotificationsPublishClient);
    bind<NotificationsSubscriptionsUsersBatchRouteDefinition>(TYPES.NotificationsSubscriptionsUsersBatchRouteDefinition).to(NotificationsSubscriptionsUsersBatchRouteDefinition);
    bind<NotificationsSubscriptionsUsersBatchClient>(TYPES.NotificationsSubscriptionsUsersBatchClient).to(NotificationsSubscriptionsUsersBatchClient);
    bind<NotificationsSubscriptionsUsersRouteDefinition>(TYPES.NotificationsSubscriptionsUsersRouteDefinition).to(NotificationsSubscriptionsUsersRouteDefinition);
    bind<NotificationsSubscriptionsUsersClient>(TYPES.NotificationsSubscriptionsUsersClient).to(NotificationsSubscriptionsUsersClient);
    bind<NotificationsSubscriptionsAnonymousRouteDefinition>(TYPES.NotificationsSubscriptionsAnonymousRouteDefinition).to(NotificationsSubscriptionsAnonymousRouteDefinition);
    bind<NotificationsSubscriptionsAnonymousBatchRouteDefinition>(TYPES.NotificationsSubscriptionsAnonymousBatchRouteDefinition).to(NotificationsSubscriptionsAnonymousBatchRouteDefinition);
    bind<NotificationsSubscriptionsAnonymousBatchClient>(TYPES.NotificationsSubscriptionsAnonymousBatchClient).to(NotificationsSubscriptionsAnonymousBatchClient);
    bind<NotificationsSubscriptionsAnonymousClient>(TYPES.NotificationsSubscriptionsAnonymousClient).to(NotificationsSubscriptionsAnonymousClient);
    bind<NotificationsSubscriptionsRouteDefinition>(TYPES.NotificationsSubscriptionsRouteDefinition).to(NotificationsSubscriptionsRouteDefinition);
    bind<NotificationsSubscriptionsClient>(TYPES.NotificationsSubscriptionsClient).to(NotificationsSubscriptionsClient);
    bind<NotificationsRegistrationsUsersBatchRouteDefinition>(TYPES.NotificationsRegistrationsUsersBatchRouteDefinition).to(NotificationsRegistrationsUsersBatchRouteDefinition);
    bind<NotificationsRegistrationsUsersBatchClient>(TYPES.NotificationsRegistrationsUsersBatchClient).to(NotificationsRegistrationsUsersBatchClient);
    bind<NotificationsRegistrationsUsersRouteDefinition>(TYPES.NotificationsRegistrationsUsersRouteDefinition).to(NotificationsRegistrationsUsersRouteDefinition);
    bind<NotificationsRegistrationsUsersClient>(TYPES.NotificationsRegistrationsUsersClient).to(NotificationsRegistrationsUsersClient);
    bind<NotificationsRegistrationsAnonymousBatchRouteDefinition>(TYPES.NotificationsRegistrationsAnonymousBatchRouteDefinition).to(NotificationsRegistrationsAnonymousBatchRouteDefinition);
    bind<NotificationsRegistrationsAnonymousBatchClient>(TYPES.NotificationsRegistrationsAnonymousBatchClient).to(NotificationsRegistrationsAnonymousBatchClient);
    bind<NotificationsRegistrationsAnonymousRouteDefinition>(TYPES.NotificationsRegistrationsAnonymousRouteDefinition).to(NotificationsRegistrationsAnonymousRouteDefinition);
    bind<NotificationsRegistrationsAnonymousClient>(TYPES.NotificationsRegistrationsAnonymousClient).to(NotificationsRegistrationsAnonymousClient);
    bind<NotificationsRegistrationsRouteDefinition>(TYPES.NotificationsRegistrationsRouteDefinition).to(NotificationsRegistrationsRouteDefinition);
    bind<NotificationsRegistrationsClient>(TYPES.NotificationsRegistrationsClient).to(NotificationsRegistrationsClient);
    bind<NotificationsSettingsRouteDefinition>(TYPES.NotificationsSettingsRouteDefinition).to(NotificationsSettingsRouteDefinition);
    bind<NotificationsSettingsClient>(TYPES.NotificationsSettingsClient).to(NotificationsSettingsClient);
    bind<NotificationsRouteDefinition>(TYPES.NotificationsRouteDefinition).to(NotificationsRouteDefinition);
    bind<NotificationsClient>(TYPES.NotificationsClient).to(NotificationsClient);
});

export { diModule };