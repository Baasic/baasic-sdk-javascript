import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    CalendarEventsClient,
    CalendarEventsRoute,

    CalendarBatchClient,
    CalendarBatchRoute,
    CalendarClient,
    CalendarRoute,

    CalendarRsvpBatchClient,
    CalendarRsvpBatchRoute,
    CalendarRsvpClient,
    CalendarRsvpRoute,

    CalendarEventBatchClient,
    CalendarEventBatchRoute,
    CalendarEventClient,
    CalendarEventRoute,

    CalendarEventRsvpAttendeeStatusBatchClient,
    CalendarEventRsvpAttendeeStatusBatchRoute,
    CalendarEventRsvpAttendeeStatusClient,
    CalendarEventRsvpAttendeeStatusRoute,

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
    CalendarEventsClient: Symbol("CalendarEventsClient"),
    CalendarEventsRoute: Symbol("CalendarEventsRoute"),

    CalendarBatchClient: Symbol("CalendarBatchClient"),
    CalendarBatchRoute: Symbol("CalendarBatchRoute"),
    CalendarClient: Symbol("CalendarClient"),
    CalendarRoute: Symbol("CalendarRoute"),

    CalendarRsvpBatchClient: Symbol("CalendarRsvpBatchClient"),
    CalendarRsvpBatchRoute: Symbol("CalendarRsvpBatchRoute"),
    CalendarRsvpClient: Symbol("CalendarRsvpClient"),
    CalendarRsvpRoute: Symbol("CalendarRsvpRoute"),

    CalendarEventBatchClient: Symbol("CalendarEventBatchClient"),
    CalendarEventBatchRoute: Symbol("CalendarEventBatchRoute"),
    CalendarEventClient: Symbol("CalendarEventClient"),
    CalendarEventRoute: Symbol("CalendarEventRoute"),

    CalendarEventRsvpAttendeeStatusBatchClient: Symbol("CalendarEventRsvpAttendeeStatusBatchClient"),
    CalendarEventRsvpAttendeeStatusBatchRoute: Symbol("CalendarEventRsvpAttendeeStatusBatchRoute"),
    CalendarEventRsvpAttendeeStatusClient: Symbol("CalendarEventRsvpAttendeeStatusClient"),
    CalendarEventRsvpAttendeeStatusRoute: Symbol("CalendarEventRsvpAttendeeStatusRoute"),

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
    bind<CalendarEventsClient>(TYPES.CalendarEventsClient).to(CalendarEventsClient);
    bind<CalendarEventsRoute>(TYPES.CalendarEventsRoute).to(CalendarEventsRoute);

    bind<CalendarBatchClient>(TYPES.CalendarBatchClient).to(CalendarBatchClient);
    bind<CalendarBatchRoute>(TYPES.CalendarBatchRoute).to(CalendarBatchRoute);
    bind<CalendarClient>(TYPES.CalendarClient).to(CalendarClient);
    bind<CalendarRoute>(TYPES.CalendarRoute).to(CalendarRoute);

    bind<CalendarRsvpBatchClient>(TYPES.CalendarRsvpBatchClient).to(CalendarRsvpBatchClient);
    bind<CalendarRsvpBatchRoute>(TYPES.CalendarRsvpBatchRoute).to(CalendarRsvpBatchRoute);
    bind<CalendarRsvpClient>(TYPES.CalendarRsvpClient).to(CalendarRsvpClient);
    bind<CalendarRsvpRoute>(TYPES.CalendarRsvpRoute).to(CalendarRsvpRoute);

    bind<CalendarEventBatchClient>(TYPES.CalendarEventBatchClient).to(CalendarEventBatchClient);
    bind<CalendarEventBatchRoute>(TYPES.CalendarEventBatchRoute).to(CalendarEventBatchRoute);
    bind<CalendarEventClient>(TYPES.CalendarEventClient).to(CalendarEventClient);
    bind<CalendarEventRoute>(TYPES.CalendarEventRoute).to(CalendarEventRoute);

    bind<CalendarEventRsvpAttendeeStatusBatchClient>(TYPES.CalendarEventRsvpAttendeeStatusBatchClient).to(CalendarEventRsvpAttendeeStatusBatchClient);
    bind<CalendarEventRsvpAttendeeStatusBatchRoute>(TYPES.CalendarEventRsvpAttendeeStatusBatchRoute).to(CalendarEventRsvpAttendeeStatusBatchRoute);
    bind<CalendarEventRsvpAttendeeStatusClient>(TYPES.CalendarEventRsvpAttendeeStatusClient).to(CalendarEventRsvpAttendeeStatusClient);
    bind<CalendarEventRsvpAttendeeStatusRoute>(TYPES.CalendarEventRsvpAttendeeStatusRoute).to(CalendarEventRsvpAttendeeStatusRoute);

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