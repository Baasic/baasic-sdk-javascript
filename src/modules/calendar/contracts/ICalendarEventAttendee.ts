import { IModel } from '../../../common/contracts';

import { ICalendarEventRSVPAttendeeStatus, ICalendarEventRSVPAttendeeInvitationType, IUserInfo} from './';

export interface ICalendarEventAttendee extends IModel {
    CalendarEventAttendeeStatus?: ICalendarEventRSVPAttendeeStatus;
    AttendeeStatusId: string;
    Email?: string;
    EventId: string;
    FullName?: string;
    CalendarEventAttendeeInvitationType?: ICalendarEventRSVPAttendeeInvitationType;
    InvitationTypeId?: string;
    Json?: string;
    Slots: number;
    SlotsRequested?: number;
    User?: IUserInfo;
    UserId?: string;
}