import { IModel } from 'common/contracts';

import { ICalendar, ICalendarEventDetail, ICalendarEventRsvp, ICalendarUserInfo, ICalendarEventOptions } from './';

export interface ICalendarEvent extends IModel {

    Author?: ICalendarUserInfo;
    AuthorId?: string;
    Calendar?: ICalendar;
    CalendarId: string;
    Description?: string;
    Detail?: ICalendarEventDetail;
    EndTime: string;
    EventRsvp?: ICalendarEventRsvp;
    IsAllDay?: boolean;
    IsRecurring?: Boolean;
    Json?: string;
    Options?: ICalendarEventOptions;
    StartTime: string;
    Title: string;
}