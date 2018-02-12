import { IModel } from '../../../common/contracts';

export interface IProduct extends IModel {
    abrv? : string, 
    description?: string,
    longDescription?: string, 
    shortDescription?: string, 
    name?: string, 
    json?: string,
    price? : number,
    slug? : string
}