import { IModel } from '../../../common/contracts';

import { ICalendarUserInfo } from './';

export interface ICalendar extends IModel {
    Abrv?: string;
    Description?: string;
    Json?: string;
    Name: string;
    Owner: ICalendarUserInfo;
    OwnerId: string;
}