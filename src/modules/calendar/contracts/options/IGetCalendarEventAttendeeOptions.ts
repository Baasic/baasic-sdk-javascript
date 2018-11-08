import { IOptions } from '../../../../common/contracts'

export interface IGetCalendarEventAttendeeOptions extends IOptions {
    ids?: string[];
    calendarIds?: string[];
    calendarNames?: string[];
    eventIds?: string[];
    invitationTypeIds?: string[];
    attendeeStatusIds?: string[];
    userIds?: string[];
    slotDifference?: boolean;
    emails?: string[];
    from?: string;
    to?: string;
}