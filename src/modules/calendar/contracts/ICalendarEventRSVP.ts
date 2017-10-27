import { IModel } from '../../../common/contracts';

import { ICalendarEventRSVPInvitationType } from './';

export interface ICalendarEventRSVP extends IModel {
    InvitationOnly?: boolean;
    InvitationType?: ICalendarEventRSVPInvitationType;
    InvitationTypeId?: string;
    Json?: string;
    MaxSlots?: number;
    MinSlots?: number;
    RegistrationCloseDate?: string;
    TotalSlots?: number;
}