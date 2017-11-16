import { IModel } from '../../../common/contracts';

import { ICalendarEventRsvpAttendeeStatus, ICalendarEventRsvpAttendeeInvitationType, ICalendarUserInfo} from './';

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
    User?: ICalendarUserInfo;
    UserId?: string;
}