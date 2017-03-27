import { IModel } from '../../../common/contracts';;

export interface IOwner extends IModel {
    displayName?: string,
    id: string
}