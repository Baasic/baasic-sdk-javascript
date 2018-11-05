import { IModel } from '../../../common/contracts';
import { ICountry, ICountryState } from './'

export interface IUserAddress extends IModel {
    address1? : string, 
    address2? : string, 
    addressTypeId?: string,
    city?: string,
    country?: ICountry,
    countryId?: string, 
    countryState?: ICountryState,
    faxNumber?: string,
    json?: string,
    phoneNumber?: string,
    state?: string,
    stateId?: string, 
    userId?: string,
    zipPostalCode?: string
}