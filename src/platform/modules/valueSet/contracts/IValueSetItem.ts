import { IModel } from 'common/contracts';;

export interface IValueSetItem extends IModel {
    setId?: string,
    setName?: string,
    value: string
}