import {
    CalendarLookups,
    CalendarACLClient,
    CalendarEventRsvpAttendeeClient,
    CalendarClient,
    CalendarEventClient,
    CalendarEventRsvpClient,
    TYPES
} from './';

import { injectable, inject } from "inversify";

@injectable()
export class Root {

    constructor(
        @inject(TYPES.CalendarLookups) public lookups: CalendarLookups,
        @inject(TYPES.CalendarACLClient) public ACL: CalendarACLClient,
        @inject(TYPES.CalendarEventRsvpAttendeeClient) public attendee: CalendarEventRsvpAttendeeClient,
        @inject(TYPES.CalendarClient) public calendar: CalendarClient,
        @inject(TYPES.CalendarEventClient) public event: CalendarEventClient,             
        @inject(TYPES.CalendarEventRsvpClient) public rsvp: CalendarEventRsvpClient,
    ) {

    }

}