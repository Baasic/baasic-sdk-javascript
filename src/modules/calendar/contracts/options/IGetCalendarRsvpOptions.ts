import { IOptions } from '../common/contracts';

export interface IGetCalendarRsvpOptions extends IOptions {
    ids?: string[];
	calendarIds?: string[];
	calendarNames?: string[];
	invitationTypeIds?: string[];
	invitationOnly?: boolean;
	statusIds?: string[];
	typeIds?: string[];
	from?: string;
	to?: string;
	registrationCloseFrom?: string;
	registrationCloseTo?: string;
}