import { IModel } from '../../../../common/contracts'

export interface ICalendarEventStatus extends IModel {
    Abrv?: string;
    Json?: string;
    Name: string;
}