import { IModel } from '../../../common/contracts';

import { ICalendarEventRsvpAttendeeStatus, ICalendarEventRsvpAttendeeInvitationType, IUserInfo} from './';

export interface ICalendarEventAttendee extends IModel {
    AttendeeStatus?: ICalendarEventRsvpAttendeeStatus;
    AttendeeStatusId: string;
    Email?: string;
    EventId: string;
    FullName?: string;
    InvitationType?: ICalendarEventRsvpAttendeeInvitationType;
    InvitationTypeId?: string;
    Json?: string;
    Slots: number;
    SlotsRequested?: number;
    User?: IUserInfo;
    UserId?: string;
}