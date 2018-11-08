import { IOptions } from '../../../../common/contracts';

export interface IGetCalendarEventsOptions extends IOptions {
	ids?: string[];
	ownerIds?: string[];
	statusIds?: string[];
	typeIds?: string[];
	from?: string;
	to?: string;
}