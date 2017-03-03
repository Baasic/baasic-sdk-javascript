import { ContainerModule } from "inversify";
import {
    BaasicNotificationsPublishBatchClient,
    BaasicNotificationsPublishBatchRouteDefinition,
    BaasicNotificationsPublishRouteDefinition,
    BaasicNotificationsRegistrationsUsersClient,
    BaasicNotificationsRegistrationsUsersRouteDefinition,
    BaasicNotificationsRouteDefinition,
    BaasicNotificationsSubscriptionsAnonymousBatchClient,
    BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition,
    BaasicNotificationsSubscriptionsAnonymousRouteDefinition,
    BaasicNotificationsSubscriptionsAnonymousClient,
    BasicNotificationsSubscriptionsRouteDefinition,
    BaasicNotificationsSubscriptionsUsersBatchClient,
    BaasicNotificationsSubscriptionsUsersBatchRouteDefinition,
    BaasicNotificationsSubscriptionsUsersClient,
    BaasicNotificationsSubscriptionsUsersRouteDefinition
} from 'modules/notifications';

const TYPES = {
    BaasicNotificationsPublishBatchClient: Symbol("BaasicNotificationsPublishBatchClient"),
    BaasicNotificationsPublishBatchRouteDefinition: Symbol("BaasicNotificationsPublishBatchRouteDefinition"),
    BaasicNotificationsPublishRouteDefinition: Symbol("BaasicNotificationsPublishRouteDefinition"),
    BaasicNotificationsRegistrationsUsersClient: Symbol("BaasicNotificationsRegistrationsUsersClient"),
    BaasicNotificationsRegistrationsUsersRouteDefinition: Symbol("BaasicNotificationsRegistrationsUsersRouteDefinition"),
    BaasicNotificationsRouteDefinition: Symbol("BaasicNotificationsRouteDefinition"),
    BaasicNotificationsSubscriptionsRouteDefinition: Symbol("BaasicNotificationsSubscriptionsRouteDefinition"),
    BaasicNotificationsSubscriptionsAnonymousBatchClient: Symbol("BaasicNotificationsSubscriptionsAnonymousBatchClient"),
    BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition: Symbol("BaasicNotificationsSubscriptionsAnonymousBatchRouteDefinition"),
    BaasicNotificationsSubscriptionsAnonymousRouteDefinition: Symbol("BaasicNotificationsSubscriptionsAnonymousRouteDefinition"),
    BaasicNotificationsSubscriptionsAnonymousClient: Symbol("BaasicNotificationsSubscriptionsAnonymousClient"),
    BaasicNotificationsSubscriptionsUsersRouteDefinition: Symbol("BasicNotificationsSubscriptionsRouteDefinition"),
    BaasicNotificationsSubscriptionsUsersBatchClient: Symbol("BaasicNotificationsSubscriptionsUsersBatchClient"),
    BaasicNotificationsSubscriptionsUsersBatchRouteDefinition: Symbol("BaasicNotificationsSubscriptionsUsersBatchRouteDefinition"),
    BaasicNotificationsSubscriptionsUsersClient: Symbol("BaasicNotificationsSubscriptionsUsersClient"),
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicNotificationsPublishBatchRouteDefinition>(TYPES.BaasicNotificationsPublishBatchRouteDefinition).toSelf();
    bind<BaasicNotificationsPublishBatchClient>(TYPES.BaasicNotificationsPublishBatchClient).toSelf();
    bind<BaasicNotificationsPublishRouteDefinition>(TYPES.BaasicNotificationsPublishRouteDefinition).toSelf();
    bind<BaasicNotificationsSubscriptionsUsersBatchRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsUsersBatchRouteDefinition).toSelf();
    bind<BaasicNotificationsSubscriptionsUsersBatchClient>(TYPES.BaasicNotificationsSubscriptionsUsersBatchClient).toSelf();
    bind<BaasicNotificationsSubscriptionsUsersRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsUsersRouteDefinition).toSelf();
    bind<BaasicNotificationsSubscriptionsUsersClient>(TYPES.BaasicNotificationsSubscriptionsUsersClient).toSelf();
    bind<BaasicNotificationsSubscriptionsAnonymousRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsAnonymousRouteDefinition).toSelf();
    bind<BaasicNotificationsSubscriptionsAnonymousBatchClient>(TYPES.BaasicNotificationsSubscriptionsAnonymousBatchClient).toSelf();
    bind<BaasicNotificationsSubscriptionsAnonymousClient>(TYPES.BaasicNotificationsSubscriptionsAnonymousClient).toSelf();
    bind<BaasicNotificationsSubscriptionsUsersRouteDefinition>(TYPES.BaasicNotificationsSubscriptionsRouteDefinition).toSelf();
    bind<BaasicNotificationsRegistrationsUsersRouteDefinition>(TYPES.BaasicNotificationsRegistrationsUsersRouteDefinition).toSelf();
    bind<BaasicNotificationsRegistrationsUsersClient>(TYPES.BaasicNotificationsRegistrationsUsersClient).toSelf();
    bind<BaasicNotificationsRouteDefinition>(TYPES.BaasicNotificationsRouteDefinition).toSelf();
});

export { diModule };