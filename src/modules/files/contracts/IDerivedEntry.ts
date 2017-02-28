import { IBaasicModel } from 'common/contracts';

export interface IDerivedEntry extends IBaasicModel {
    fileSize?: number,
    height?: number,
    width?: number,
    fileEntryId?: string
}