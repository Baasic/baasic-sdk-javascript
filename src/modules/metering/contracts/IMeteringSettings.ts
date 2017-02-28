import { IBaasicModel } from 'common/contracts';

export interface IMeteringSettings extends IBaasicModel {
    dataRetentionPerion: number
}