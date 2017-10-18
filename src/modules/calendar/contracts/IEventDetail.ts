import { IModel } from '../../../common/contracts';

import { IUserInfo } from './';

export interface IEventDetail extends IModel {
    ContactAddress?: string;
    ContactCity?: string;
    ContactCountry?: string;
    ContactEmail?: string;
    ContactFirstName?: string;
    ContactLastName?: string;
    ContactPhone?: string;
    ContactTimeZoneId?: string;
    ContactUser?: IUserInfo;
    ContactUserId?: string;
    ContactZipCode?: string;
    EventStatusId?: string;
    EventTypeId?: string;
    GeoLocation?: string;
    HostAddress?: string;
    HostCity?: string;
    HostCountry?: string;
    HostEmail?: string;
    HostName?: string;
    HostPhone?: string;
    HostTimeZoneId?: string;
    HostZipCode?: string;
    Json?: string;
    VenueAddress?: string;
}