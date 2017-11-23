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
        @inject(TYPES.CalendarEventRsvpInvitationTypeClient) public RsvpInvitationType: CalendarEventRsvpInvitationTypeClient,
        @inject(TYPES.CalendarEventRsvpAttendeeStatusClient) public RsvpAttendeeStatus: CalendarEventRsvpAttendeeStatusClient,        
        @inject(TYPES.CalendarEventStatusClient) public eventStatus: CalendarEventStatusClient,
        @inject(TYPES.CalendarEventTypeClient) public eventType: CalendarEventTypeClient
    ) {
    }

}