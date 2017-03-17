import { IModel } from 'common/contracts';

export interface ISnProvider extends IModel {
    abrv?: string,
    hasEmail?: string,
    name?: string
}