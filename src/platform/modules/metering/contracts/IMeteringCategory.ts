import { IModel } from '../../../common/contracts';;

export interface IMeteringCategory extends IModel {
    aggregateFunction: string,
    category: string,
    defaultSamplingRate: string,
    slug?: string,
    unitFactor: number,
    unitName: string,

}