import { IModel } from '../../../common/contracts';;

export interface INotification extends IModel {
    channels: string[],
    templateContext?: Object,
    templateId: string
}