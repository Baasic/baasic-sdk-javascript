import { IModel } from '../../../common/contracts';;

export interface ISkill extends IModel {
    description?: string,
    name: string,
    slug?: string
}