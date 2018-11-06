import { IModel } from '../../../common/contracts';

export interface ICountry extends IModel {
    abrv? : string, 
    countryCode? : string, 
    euMember?: boolean,
    json?: string,
    name?: string,
    phoneCode?: string,
    taxRate?: number
}