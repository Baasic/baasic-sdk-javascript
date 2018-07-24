import { IModel } from '../../../common/contracts';;

export interface IKeyValue extends IModel {
    key: string,
    value: string
}