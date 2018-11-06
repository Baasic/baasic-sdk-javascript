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
        @inject(TYPES.CalendarEventRsvpInvitationTypeClient) public rsvpInvitationType: CalendarEventRsvpInvitationTypeClient,
        @inject(TYPES.CalendarEventRsvpAttendeeStatusClient) public rsvpAttendeeStatus: CalendarEventRsvpAttendeeStatusClient,        
        @inject(TYPES.CalendarEventStatusClient) public eventStatus: CalendarEventStatusClient,
        @inject(TYPES.CalendarEventTypeClient) public eventType: CalendarEventTypeClient
    ) {
    }

}