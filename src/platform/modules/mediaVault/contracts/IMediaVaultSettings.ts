import { IModel } from 'common/contracts';;

export interface IMediaVaultSettings extends IModel {
    derivedItemCount: number,
    uploadAllowedExtensions: string
}