import {
    CalendarLookups,

    CalendarACLClient,

    CalendarEventRsvpAttendeeBatchClient,
    CalendarEventRsvpAttendeeClient,

    CalendarRsvpAttendeeBatchClient,
    CalendarRsvpAttendeeClient,
    
    CalendarEventsClient,

    CalendarBatchClient,
    CalendarClient,

    CalendarRsvpBatchClient,
    CalendarRsvpClient,

    CalendarEventBatchClient,
    CalendarEventClient,

    CalendarEventRsvpAttendeeStatusBatchClient,
    CalendarEventRsvpAttendeeStatusClient,

    CalendarEventRsvpBatchClient,
    CalendarEventRsvpClient,

    CalendarEventRsvpInvitationTypeBatchClient,
    CalendarEventRsvpInvitationTypeClient,

    CalendarEventStatusBatchClient,
    CalendarEventStatusClient,

    CalendarEventTypeBatchClient,    
    CalendarEventTypeClient,

    TYPES
} from './';

import { injectable, inject } from "inversify";

@injectable()
export class Root {

    constructor(
        @inject(TYPES.CalendarLookups) public calendarLookups: CalendarLookups,

        @inject(TYPES.CalendarACLClient) public calendarACLClient: CalendarACLClient,

        @inject(TYPES.CalendarEventRsvpAttendeeBatchClient) public calendarEventRsvpAttendeeBatchClient: CalendarEventRsvpAttendeeBatchClient,
        @inject(TYPES.CalendarEventRsvpAttendeeClient) public calendarEventRsvpAttendeeClient: CalendarEventRsvpAttendeeClient,

        @inject(TYPES.CalendarRsvpAttendeeBatchClient) public calendarRsvpAttendeeBatchClient: CalendarRsvpAttendeeBatchClient,
        @inject(TYPES.CalendarRsvpAttendeeClient) public calendarRsvpAttendeeClient: CalendarRsvpAttendeeClient,

        @inject(TYPES.CalendarEventsClient) public calendarEventsClient: CalendarEventsClient,

        @inject(TYPES.CalendarBatchClient) public calendarBatchClient: CalendarBatchClient,
        @inject(TYPES.CalendarClient) public calendarClient: CalendarClient,

        @inject(TYPES.CalendarRsvpBatchClient) public calendarRsvpBatchClient: CalendarRsvpBatchClient,
        @inject(TYPES.CalendarRsvpClient) public calendarRsvpClient: CalendarRsvpClient,   

        @inject(TYPES.CalendarEventBatchClient) public calendarEventBatchClient: CalendarEventBatchClient,
        @inject(TYPES.CalendarEventClient) public calendarEventClient: CalendarEventClient,        
        
        @inject(TYPES.CalendarEventRsvpAttendeeStatusBatchClient) public calendarEventRsvpAttendeeStatusBatchClient: CalendarEventRsvpAttendeeStatusBatchClient,
        @inject(TYPES.CalendarEventRsvpAttendeeStatusClient) public calendarEventRsvpAttendeeStatusClient: CalendarEventRsvpAttendeeStatusClient,

        @inject(TYPES.CalendarEventRsvpBatchClient) public calendarEventRsvpBatchClient: CalendarEventRsvpBatchClient,
        @inject(TYPES.CalendarEventRsvpClient) public calendarEventRsvpClient: CalendarEventRsvpClient,

        @inject(TYPES.CalendarEventRsvpInvitationTypeBatchClient) public calendarEventRsvpInvitationTypeBatchClient: CalendarEventRsvpInvitationTypeBatchClient,
        @inject(TYPES.CalendarEventRsvpInvitationTypeClient) public calendarEventRsvpInvitationTypeClient: CalendarEventRsvpInvitationTypeClient,

        @inject(TYPES.CalendarEventStatusBatchClient) public calendarEventStatusBatchClient: CalendarEventStatusBatchClient,
        @inject(TYPES.CalendarEventStatusClient) public calendarEventStatusClient: CalendarEventStatusClient,

        @inject(TYPES.CalendarEventTypeClient) public calendarEventTypeClient: CalendarEventTypeClient,
        @inject(TYPES.CalendarEventTypeBatchClient) public calendarEventTypeBatchClient: CalendarEventTypeBatchClient,
    ) {

    }

}