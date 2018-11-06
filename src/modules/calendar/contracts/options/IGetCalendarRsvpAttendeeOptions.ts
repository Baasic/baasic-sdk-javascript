import { IOptions } from 'common/contracts'

export interface IGetCalendarRsvpAttendeeOptions extends IOptions {
    ids?: string[];
    userIds?: string[];
    emails?: string[];
    fullNames?: string[];
    invitationTypeIds?: string[];
    from?: string;
    to?: string;
}