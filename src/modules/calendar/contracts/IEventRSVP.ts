import { IModel } from '../../../common/contracts';

import { IEventRSVPInvitationType } from './';

export interface IEventRSVP extends IModel {
    InvitationOnly?: boolean;
    InvitationType?: IEventRSVPInvitationType;
    InvitationTypeId?: string;
    Json?: string;
    MaxSlots?: number;
    MinSlots?: number;
    RegistrationCloseDate?: string;
    TotalSlots?: number;
}