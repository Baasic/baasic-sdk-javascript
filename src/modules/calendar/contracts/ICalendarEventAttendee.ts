import { IModel } from '../../../common/contracts';

import { ICalendarEventRSVPAttendeeStatus, ICalendarEventRSVPAttendeeInvitationType, IUserInfo} from './';

export interface ICalendarEventAttendee extends IModel {
    AttendeeStatus?: ICalendarEventRSVPAttendeeStatus;
    AttendeeStatusId: string;
    Email?: string;
    EventId: string;
    FullName?: string;
    InvitationType?: ICalendarEventRSVPAttendeeInvitationType;
    InvitationTypeId?: string;
    Json?: string;
    Slots: number;
    SlotsRequested?: number;
    User?: IUserInfo;
    UserId?: string;
}