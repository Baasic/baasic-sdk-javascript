import { IOptions } from '../../../../common/contracts';

export interface IGetCalendarEventRsvpOptions extends IOptions {
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