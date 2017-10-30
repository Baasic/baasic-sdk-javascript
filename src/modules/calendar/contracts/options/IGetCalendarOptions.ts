import { IOptions } from '../../../../common/contracts';

export interface IGetCalendarOptions extends IOptions {
	ids?: string[];
	invitationTypeIds?: string[];
	invitationOnly?: boolean;
	statusIds?: string[];
	typeIds?: string[];
	from?: string;
	to?: string;
	registrationCloseFrom?: string;
	registrationCloseTo?: string;    
}