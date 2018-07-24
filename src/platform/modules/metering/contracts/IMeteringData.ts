import { IModel } from '../../../common/contracts';;

export interface IMeteringData extends IModel {
    application?: string,
    applicationId?: string,
    category?: string,
    categoryId?: string,
    endpoint?: string,
    moduleName?: string,
    name: string,
    rawUrl?: string,
    source?: string,
    status?: number,
    value: any
}