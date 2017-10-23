import {
    CalendarEventBatchClient,
    CalendarEventClient,

    CalendarEventRsvpAtendeeStatusBatchClient,
    CalendarEventRsvpAtendeeStatusClient,

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
        @inject(TYPES.CalendarEventBatchClient) public calendarEventBatchClient: CalendarEventBatchClient,
        @inject(TYPES.CalendarEventClient) public calendarEventClient: CalendarEventClient,        
        
        @inject(TYPES.CalendarEventRsvpAtendeeStatusBatchClient) public calendarEventRsvpAtendeeStatusBatchClient: CalendarEventRsvpAtendeeStatusBatchClient,
        @inject(TYPES.CalendarEventRsvpAtendeeStatusClient) public calendarEventRsvpAtendeeStatusClient: CalendarEventRsvpAtendeeStatusClient,

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