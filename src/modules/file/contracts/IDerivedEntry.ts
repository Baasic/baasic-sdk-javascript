import { IModel } from 'common/contracts';

export interface IDerivedEntry extends IModel {
    fileSize?: number,
    height?: number,
    metaData?: Object,
    width?: number,
    fileEntryId?: string
}