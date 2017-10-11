import { IModel } from '../../../common/contracts';

export interface IEmbedDerivedEntry extends IModel  {
    fileSize?: number,
    height?: number,
    metaData?: Object,
    width?: number
}