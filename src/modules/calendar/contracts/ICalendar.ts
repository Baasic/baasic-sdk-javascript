import { IModel } from '../../../common/contracts';

import { IUserInfo } from './';

export interface ICalendar extends IModel {
    Abrv?: string;
    Description?: string;
    Json?: string;
    Name: string;
    Owner: IUserInfo;
    OwnerId: string;
}