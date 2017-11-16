import {
    TYPES
} from '../';
import {
    CalendarEventRsvpAttendeeStatusBatchClient,
    CalendarEventRsvpInvitationTypeBatchClient,
    CalendarEventStatusClient,
    CalendarEventTypeClient
} from './';


import { injectable, inject } from "inversify";

@injectable()
export class CalendarLookups {

    constructor(
        @inject(TYPES.CalendarEventRsvpAttendeeClient) public eventRsvpAttendeeStatus: CalendarEventRsvpAttendeeStatusBatchClient,
        @inject(TYPES.CalendarEventRsvpInvitationTypeClient) public eventRsvpInvitationType: CalendarEventRsvpInvitationTypeBatchClient,
        @inject(TYPES.CalendarEventStatusClient) public eventStatus: CalendarEventStatusClient,
        @inject(TYPES.CalendarEventTypeClient) public eventType: CalendarEventTypeClient
    ) {
    }

}