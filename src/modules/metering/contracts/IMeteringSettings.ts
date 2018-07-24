import { IModel } from 'common/contracts';;

export interface IMeteringSettings extends IModel {
    dataRetentionPerion: number
}