import { IBaasicModel } from 'common/contracts';

export interface IPreprocessingProviderSettings extends IBaasicModel {
    abrv: string,
    name: string
}