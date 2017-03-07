import { IBaasicModel } from 'common/contracts';

export interface ISnProvider extends IBaasicModel {
    abrv?: string,
    hasEmail?: string,
    name?: string
}