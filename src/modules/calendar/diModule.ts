import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    CalendarEventBatchClient,
    CalendarEventBatchRoute,
    CalendarEventClient,
    CalendarEventRoute,

    CalendarEventRsvpAtendeeStatusBatchClient,
    CalendarEventRsvpAtendeeStatusBatchRoute,
    CalendarEventRsvpAtendeeStatusClient,
    CalendarEventRsvpAtendeeStatusRoute,

    CalendarEventRsvpBatchClient,
    CalendarEventRsvpBatchRoute,
    CalendarEventRsvpClient,
    CalendarEventRsvpRoute,

    CalendarEventRsvpInvitationTypeBatchClient,
    CalendarEventRsvpInvitationTypeBatchRoute,
    CalendarEventRsvpInvitationTypeClient,
    CalendarEventRsvpInvitationTypeRoute,

    CalendarEventStatusBatchClient,
    CalendarEventStatusBatchRoute,
    CalendarEventStatusClient,
    CalendarEventStatusRoute,

    CalendarEventTypeBatchClient,
    CalendarEventTypeBatchRoute,
    CalendarEventTypeRoute,
    CalendarEventTypeClient,
    Root
} from './';

const TYPES = {
    CalendarEventBatchClient: Symbol("CalendarEventBatchClient"),
    CalendarEventBatchRoute: Symbol("CalendarEventBatchRoute"),
    CalendarEventClient: Symbol("CalendarEventClient"),
    CalendarEventRoute: Symbol("CalendarEventRoute"),

    CalendarEventRsvpAtendeeStatusBatchClient: Symbol("CalendarEventRsvpAtendeeStatusBatchClient"),
    CalendarEventRsvpAtendeeStatusBatchRoute: Symbol("CalendarEventRsvpAtendeeStatusBatchRoute"),
    CalendarEventRsvpAtendeeStatusClient: Symbol("CalendarEventRsvpAtendeeStatusClient"),
    CalendarEventRsvpAtendeeStatusRoute: Symbol("CalendarEventRsvpAtendeeStatusRoute"),

    CalendarEventRsvpBatchClient: Symbol("CalendarEventRsvpBatchClient"),
    CalendarEventRsvpBatchRoute: Symbol("CalendarEventRsvpBatchRoute"),
    CalendarEventRsvpClient: Symbol("CalendarEventRsvpClient"),
    CalendarEventRsvpRoute: Symbol("CalendarEventRsvpRoute"),

    CalendarEventRsvpInvitationTypeBatchClient: Symbol("CalendarEventRsvpInvitationTypeBatchClient"),
    CalendarEventRsvpInvitationTypeBatchRoute: Symbol("CalendarEventRsvpInvitationTypeBatchRoute"),
    CalendarEventRsvpInvitationTypeClient: Symbol("CalendarEventRsvpInvitationTypeClient"),
    CalendarEventRsvpInvitationTypeRoute: Symbol("CalendarEventRsvpInvitationTypeClient"),

    CalendarEventStatusBatchClient: Symbol("CalendarEventStatusBatchClient"),
    CalendarEventStatusBatchRoute: Symbol("CalendarEventStatusBatchRoute"),
    CalendarEventStatusClient: Symbol("CalendarEventStatusClient"),
    CalendarEventStatusRoute: Symbol("CalendarEventStatusRoute"),

    CalendarEventTypeBatchClient: Symbol("CalendarEventTypeBatchClient"),
    CalendarEventTypeBatchRoute: Symbol("CalendarEventTypeBatchRoute"),
    CalendarEventTypeRoute: Symbol("CalendarEventTypeRoute"),
    CalendarEventTypeClient: Symbol("CalendarEventTypeClient"),

    Root: Symbol("Calendar-Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<CalendarEventBatchClient>(TYPES.CalendarEventBatchClient).to(CalendarEventBatchClient);
    bind<CalendarEventBatchRoute>(TYPES.CalendarEventBatchRoute).to(CalendarEventBatchRoute);
    bind<CalendarEventClient>(TYPES.CalendarEventClient).to(CalendarEventClient);
    bind<CalendarEventRoute>(TYPES.CalendarEventRoute).to(CalendarEventRoute);

    bind<CalendarEventRsvpAtendeeStatusBatchClient>(TYPES.CalendarEventRsvpAtendeeStatusBatchClient).to(CalendarEventRsvpAtendeeStatusBatchClient);
    bind<CalendarEventRsvpAtendeeStatusBatchRoute>(TYPES.CalendarEventRsvpAtendeeStatusBatchRoute).to(CalendarEventRsvpAtendeeStatusBatchRoute);
    bind<CalendarEventRsvpAtendeeStatusClient>(TYPES.CalendarEventRsvpAtendeeStatusClient).to(CalendarEventRsvpAtendeeStatusClient);
    bind<CalendarEventRsvpAtendeeStatusRoute>(TYPES.CalendarEventRsvpAtendeeStatusRoute).to(CalendarEventRsvpAtendeeStatusRoute);

    bind<CalendarEventRsvpBatchClient>(TYPES.CalendarEventRsvpBatchClient).to(CalendarEventRsvpBatchClient);
    bind<CalendarEventRsvpBatchRoute>(TYPES.CalendarEventRsvpBatchRoute).to(CalendarEventRsvpBatchRoute);
    bind<CalendarEventRsvpClient>(TYPES.CalendarEventRsvpClient).to(CalendarEventRsvpClient);
    bind<CalendarEventRsvpRoute>(TYPES.CalendarEventRsvpRoute).to(CalendarEventRsvpRoute);

    bind<CalendarEventRsvpInvitationTypeBatchClient>(TYPES.CalendarEventRsvpInvitationTypeBatchClient).to(CalendarEventRsvpInvitationTypeBatchClient);
    bind<CalendarEventRsvpInvitationTypeBatchRoute>(TYPES.CalendarEventRsvpInvitationTypeBatchRoute).to(CalendarEventRsvpInvitationTypeBatchRoute);
    bind<CalendarEventRsvpInvitationTypeClient>(TYPES.CalendarEventRsvpInvitationTypeClient).to(CalendarEventRsvpInvitationTypeClient);
    bind<CalendarEventRsvpInvitationTypeRoute>(TYPES.CalendarEventRsvpInvitationTypeClient).to(CalendarEventRsvpInvitationTypeRoute);

    bind<CalendarEventStatusBatchClient>(TYPES.CalendarEventStatusBatchClient).to(CalendarEventStatusBatchClient);
    bind<CalendarEventStatusBatchRoute>(TYPES.CalendarEventStatusBatchRoute).to(CalendarEventStatusBatchRoute);
    bind<CalendarEventStatusClient>(TYPES.CalendarEventStatusClient).to(CalendarEventStatusClient);
    bind<CalendarEventStatusRoute>(TYPES.CalendarEventStatusRoute).to(CalendarEventStatusRoute);

    bind<CalendarEventTypeBatchClient>(TYPES.CalendarEventTypeBatchClient).to(CalendarEventTypeBatchClient);
    bind<CalendarEventTypeBatchRoute>(TYPES.CalendarEventTypeBatchRoute).to(CalendarEventTypeBatchRoute);
    bind<CalendarEventTypeRoute>(TYPES.CalendarEventTypeRoute).to(CalendarEventTypeRoute);
    bind<CalendarEventTypeClient>(TYPES.CalendarEventTypeClient).to(CalendarEventTypeClient);

    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };