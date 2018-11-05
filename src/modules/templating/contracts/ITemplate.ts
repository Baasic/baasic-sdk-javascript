import { IModel } from 'common/contracts';;

export interface ITemplate extends IModel {
    type?: Object,
    isBuiltin?: boolean,
    isOverridden?: boolean,
    moduleName?: string,
    templateId: string,
    provider?: string
}