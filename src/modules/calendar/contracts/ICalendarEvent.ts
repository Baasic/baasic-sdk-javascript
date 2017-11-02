import { IModel } from '../../../common/contracts';

import { ICalendar, ICalendarEventDetail, ICalendarEventRSVP, IUserInfo, ICalendarEventOptions } from './';

export interface ICalendarEvent extends IModel {

    Author?: IUserInfo;
    AuthorId?: string;
    Calendar?: ICalendar;
    CalendarId: string;
    Description?: string;
    Detail?: ICalendarEventDetail;
    EndTime: string;
    EventRSVp?: ICalendarEventRSVP;
    IsAllDay?: boolean;
    IsRecurring?: Boolean;
    Json?: string;
    Options?: ICalendarEventOptions;
    StartTime: string;
    Title: string;
}