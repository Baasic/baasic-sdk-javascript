import { IBaasicModel } from 'common/contracts';

export interface IMediaVaultSettings extends IBaasicModel {
    derivedItemCount: number,
    uploadAllowedExtensions: string
}