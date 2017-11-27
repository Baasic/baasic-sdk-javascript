import { IModel } from '../../../common/contracts';

import { ICalendarEventRsvpAttendeeStatus, ICalendarEventRsvpAttendeeInvitationType, ICalendarUserInfo, ICalendarEventAttendeeOptions} from './';

export interface ICalendarEventAttendee extends IModel {
    AttendeeStatus?: ICalendarEventRsvpAttendeeStatus;
    AttendeeStatusId: string;
    Email?: string;
    EventId: string;
    FullName?: string;
    InvitationType?: ICalendarEventRsvpAttendeeInvitationType;
    InvitationTypeId?: string;
    Json?: string;
    Options?: ICalendarEventAttendeeOptions;
    Slots: number;
    SlotsRequested?: number;
    User?: ICalendarUserInfo;
    UserId?: string;
}