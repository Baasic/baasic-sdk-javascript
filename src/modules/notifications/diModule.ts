import { ContainerModule } from "inversify";
import {
    NotificationsClient,
    NotificationsPublishBatchClient,
    NotificationsPublishBatchRoute,
    NotificationsPublishRoute,
    NotificationsPublishClient,
    NotificationsRegistrationsAnonymousBatchClient,
    NotificationsRegistrationsAnonymousBatchRoute,
    NotificationsRegistrationsAnonymousClient,
    NotificationsRegistrationsAnonymousRoute,
    NotificationsRegistrationsRoute,
    NotificationsRegistrationsUsersBatchRoute,
    NotificationsRegistrationsUsersBatchClient,
    NotificationsRegistrationsUsersClient,
    NotificationsRegistrationsUsersRoute,
    NotificationsRoute,
    NotificationsRegistrationsClient,
    NotificationsSubscriptionsAnonymousBatchClient,
    NotificationsSubscriptionsAnonymousBatchRoute,
    NotificationsSubscriptionsAnonymousRoute,
    NotificationsSubscriptionsAnonymousClient,
    NotificationsSubscriptionsClient,
    NotificationsSubscriptionsRoute,
    NotificationsSubscriptionsUsersBatchClient,
    NotificationsSubscriptionsUsersBatchRoute,
    NotificationsSubscriptionsUsersClient,
    NotificationsSubscriptionsUsersRoute,
    NotificationsSettingsRoute,
    NotificationsSettingsClient
} from 'modules/notifications';

const TYPES = {
    NotificationsClient: Symbol("NotificationsClient"),
    NotificationsPublishBatchClient: Symbol("NotificationsPublishBatchClient"),
    NotificationsPublishBatchRoute: Symbol("NotificationsPublishBatchRoute"),
    NotificationsPublishRoute: Symbol("NotificationsPublishRoute"),
    NotificationsPublishClient: Symbol("NotificationsPublishClient"),
    NotificationsRegistrationsAnonymousBatchClient: Symbol("NotificationsRegistrationsAnonymousBatchClient"),
    NotificationsRegistrationsAnonymousBatchRoute: Symbol("NotificationsRegistrationsAnonymousBatchRoute"),
    NotificationsRegistrationsAnonymousClient: Symbol("BasicNotificationsRegistrationsAnonymousClient"),
    NotificationsRegistrationsAnonymousRoute: Symbol("NotificationsRegistrationsAnonymousRoute"),
    NotificationsRegistrationsRoute: Symbol("NotificationsRegistrationsRoute"),
    NotificationsRegistrationsUsersBatchRoute: Symbol("NotificationsRegistrationsUsersBatchRoute"),
    NotificationsRegistrationsUsersBatchClient: Symbol("NotificationsRegistrationsUsersBatchClient"),
    NotificationsRegistrationsUsersClient: Symbol("NotificationsRegistrationsUsersClient"),
    NotificationsRegistrationsUsersRoute: Symbol("NotificationsRegistrationsUsersRoute"),
    NotificationsRoute: Symbol("NotificationsRoute"),
    NotificationsRegistrationsClient: Symbol("NotificationsRegistrationsClient"),
    NotificationsSubscriptionsClient: Symbol("NotificationsSubscriptionsClient"),
    NotificationsSubscriptionsRoute: Symbol("NotificationsSubscriptionsRoute"),
    NotificationsSubscriptionsAnonymousBatchClient: Symbol("NotificationsSubscriptionsAnonymousBatchClient"),
    NotificationsSubscriptionsAnonymousBatchRoute: Symbol("NotificationsSubscriptionsAnonymousBatchRoute"),
    NotificationsSubscriptionsAnonymousRoute: Symbol("NotificationsSubscriptionsAnonymousRoute"),
    NotificationsSubscriptionsAnonymousClient: Symbol("NotificationsSubscriptionsAnonymousClient"),
    NotificationsSubscriptionsUsersRoute: Symbol("BasicNotificationsSubscriptionsRoute"),
    NotificationsSubscriptionsUsersBatchClient: Symbol("NotificationsSubscriptionsUsersBatchClient"),
    NotificationsSubscriptionsUsersBatchRoute: Symbol("NotificationsSubscriptionsUsersBatchRoute"),
    NotificationsSubscriptionsUsersClient: Symbol("NotificationsSubscriptionsUsersClient"),
    NotificationsSettingsRoute: Symbol("NotificationsSettingsRoute"),
    NotificationsSettingsClient: Symbol("NotificationsSettingsClient")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<NotificationsPublishBatchRoute>(TYPES.NotificationsPublishBatchRoute).to(NotificationsPublishBatchRoute);
    bind<NotificationsPublishBatchClient>(TYPES.NotificationsPublishBatchClient).to(NotificationsPublishBatchClient);
    bind<NotificationsPublishRoute>(TYPES.NotificationsPublishRoute).to(NotificationsPublishRoute);
    bind<NotificationsPublishClient>(TYPES.NotificationsPublishClient).to(NotificationsPublishClient);
    bind<NotificationsSubscriptionsUsersBatchRoute>(TYPES.NotificationsSubscriptionsUsersBatchRoute).to(NotificationsSubscriptionsUsersBatchRoute);
    bind<NotificationsSubscriptionsUsersBatchClient>(TYPES.NotificationsSubscriptionsUsersBatchClient).to(NotificationsSubscriptionsUsersBatchClient);
    bind<NotificationsSubscriptionsUsersRoute>(TYPES.NotificationsSubscriptionsUsersRoute).to(NotificationsSubscriptionsUsersRoute);
    bind<NotificationsSubscriptionsUsersClient>(TYPES.NotificationsSubscriptionsUsersClient).to(NotificationsSubscriptionsUsersClient);
    bind<NotificationsSubscriptionsAnonymousRoute>(TYPES.NotificationsSubscriptionsAnonymousRoute).to(NotificationsSubscriptionsAnonymousRoute);
    bind<NotificationsSubscriptionsAnonymousBatchRoute>(TYPES.NotificationsSubscriptionsAnonymousBatchRoute).to(NotificationsSubscriptionsAnonymousBatchRoute);
    bind<NotificationsSubscriptionsAnonymousBatchClient>(TYPES.NotificationsSubscriptionsAnonymousBatchClient).to(NotificationsSubscriptionsAnonymousBatchClient);
    bind<NotificationsSubscriptionsAnonymousClient>(TYPES.NotificationsSubscriptionsAnonymousClient).to(NotificationsSubscriptionsAnonymousClient);
    bind<NotificationsSubscriptionsRoute>(TYPES.NotificationsSubscriptionsRoute).to(NotificationsSubscriptionsRoute);
    bind<NotificationsSubscriptionsClient>(TYPES.NotificationsSubscriptionsClient).to(NotificationsSubscriptionsClient);
    bind<NotificationsRegistrationsUsersBatchRoute>(TYPES.NotificationsRegistrationsUsersBatchRoute).to(NotificationsRegistrationsUsersBatchRoute);
    bind<NotificationsRegistrationsUsersBatchClient>(TYPES.NotificationsRegistrationsUsersBatchClient).to(NotificationsRegistrationsUsersBatchClient);
    bind<NotificationsRegistrationsUsersRoute>(TYPES.NotificationsRegistrationsUsersRoute).to(NotificationsRegistrationsUsersRoute);
    bind<NotificationsRegistrationsUsersClient>(TYPES.NotificationsRegistrationsUsersClient).to(NotificationsRegistrationsUsersClient);
    bind<NotificationsRegistrationsAnonymousBatchRoute>(TYPES.NotificationsRegistrationsAnonymousBatchRoute).to(NotificationsRegistrationsAnonymousBatchRoute);
    bind<NotificationsRegistrationsAnonymousBatchClient>(TYPES.NotificationsRegistrationsAnonymousBatchClient).to(NotificationsRegistrationsAnonymousBatchClient);
    bind<NotificationsRegistrationsAnonymousRoute>(TYPES.NotificationsRegistrationsAnonymousRoute).to(NotificationsRegistrationsAnonymousRoute);
    bind<NotificationsRegistrationsAnonymousClient>(TYPES.NotificationsRegistrationsAnonymousClient).to(NotificationsRegistrationsAnonymousClient);
    bind<NotificationsRegistrationsRoute>(TYPES.NotificationsRegistrationsRoute).to(NotificationsRegistrationsRoute);
    bind<NotificationsRegistrationsClient>(TYPES.NotificationsRegistrationsClient).to(NotificationsRegistrationsClient);
    bind<NotificationsSettingsRoute>(TYPES.NotificationsSettingsRoute).to(NotificationsSettingsRoute);
    bind<NotificationsSettingsClient>(TYPES.NotificationsSettingsClient).to(NotificationsSettingsClient);
    bind<NotificationsRoute>(TYPES.NotificationsRoute).to(NotificationsRoute);
    bind<NotificationsClient>(TYPES.NotificationsClient).to(NotificationsClient);
});

export { diModule };