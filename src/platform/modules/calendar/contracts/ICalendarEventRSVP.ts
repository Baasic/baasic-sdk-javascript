import { IModel } from 'common/contracts';

import { ICalendarEventRsvpInvitationType } from './';

export interface ICalendarEventRsvp extends IModel {
    InvitationOnly?: boolean;
    InvitationType?: ICalendarEventRsvpInvitationType;
    InvitationTypeId?: string;
    Json?: string;
    MaxSlots?: number;
    MinSlots?: number;
    RegistrationCloseDate?: string;
    TotalSlots?: number;
}