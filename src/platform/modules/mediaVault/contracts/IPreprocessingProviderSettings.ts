import { IModel } from '../../../common/contracts';;

export interface IPreprocessingProviderSettings extends IModel {
    abrv: string,
    name: string
}