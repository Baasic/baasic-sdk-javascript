import { IModel } from 'common/contracts';;

export interface IOrganization extends IModel {
    description?: string,
    name: string,
    slug?: string
}