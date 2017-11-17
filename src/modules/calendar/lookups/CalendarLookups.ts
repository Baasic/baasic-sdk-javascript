import {
    TYPES
} from '../';
import {
    CalendarEventRsvpAttendeeStatusClient,
    CalendarEventRsvpInvitationTypeClient,
    CalendarEventStatusClient,
    CalendarEventTypeClient
} from './';


import { injectable, inject } from "inversify";

@injectable()
export class CalendarLookups {

    constructor(
        @inject(TYPES.CalendarEventRsvpAttendeeClient) public RsvpAttendeeStatus: CalendarEventRsvpAttendeeStatusClient,
        @inject(TYPES.CalendarEventRsvpInvitationTypeClient) public RsvpInvitationType: CalendarEventRsvpInvitationTypeClient,
        @inject(TYPES.CalendarEventStatusClient) public eventStatus: CalendarEventStatusClient,
        @inject(TYPES.CalendarEventTypeClient) public eventType: CalendarEventTypeClient
    ) {
    }

}