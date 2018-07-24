import { IModel } from '../common/contracts'

export interface ICalendarEventType extends IModel {
    Abrv?: string;
    Json?: String;
    Name: string;
}