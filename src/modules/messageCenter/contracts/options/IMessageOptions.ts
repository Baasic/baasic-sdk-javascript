import { IOptions } from '../../../../common/contracts';

export interface IMessageOptions extends IOptions {
    ids? : string[]; 
    channelIds? : string[]; 
}