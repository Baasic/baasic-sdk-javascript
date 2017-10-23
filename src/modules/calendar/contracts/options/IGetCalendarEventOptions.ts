import { IOptions } from '../../../../common/contracts';

export interface IGetCalendarEventOptions extends IOptions {
    ids: string[];
	ownerIds: string[];
	calendarIds: string[];
    calendarNames: string[];
	statusIds: string[];
	typeIds: string[];
	from: string;
	to: string;
}