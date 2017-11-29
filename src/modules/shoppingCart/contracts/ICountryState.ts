import { IModel } from '../../../common/contracts';
import { ICountry } from './';

export interface ICountryState extends IModel {
    abrv? : string, 
    country? : ICountry, 
    countryId?: string,
    json?: string,
    name?: string,
}