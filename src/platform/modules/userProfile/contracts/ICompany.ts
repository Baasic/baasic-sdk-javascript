import { IModel } from 'common/contracts';;

export interface ICompany extends IModel {
    description?: string,
    name: string,
    slug?: string
}