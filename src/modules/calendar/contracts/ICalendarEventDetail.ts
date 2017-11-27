import { IModel } from '../../../common/contracts';

import { ICalendarUserInfo } from './';

export interface ICalendarEventDetail extends IModel {
    ContactAddress?: string;
    ContactCity?: string;
    ContactCountry?: string;
    ContactEmail?: string;
    ContactFirstName?: string;
    ContactLastName?: string;
    ContactPhone?: string;
    ContactTimeZoneId?: string;
    ContactUser?: ICalendarUserInfo;
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