import { IModel } from '../../../common/contracts';

import { ICalendar, IEventDetail, IEventRSVP, IUserInfo } from './';

export interface ICalendarEvent extends IModel {

    Author?: IUserInfo;
    AuthorId?: string;
    Calendar?: ICalendar;
    CalendarId: string;
    Description?: string;
    Detail?: IEventDetail;
    EndTime: string;
    EventRSVp?: IEventRSVP;
    IsAllDay?: boolean;
    IsRecurring?: Boolean;
    Json?: string;
    StartTIme: string;
    Title: string;
}