import { IModel } from '../../../common/contracts';

export interface IMessage extends IModel {
    ChannelId: string,
    UserId?: string, 
    Message?: string
}