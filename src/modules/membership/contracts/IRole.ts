import { IModel } from '../../../common/contracts';;

export interface IRole extends IModel {
    description?: string,
    name: string
}