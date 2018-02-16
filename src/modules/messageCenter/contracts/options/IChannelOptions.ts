import { IOptions } from '../../../../common/contracts';

export interface IChannelOptions extends IOptions {
    ids? : string[]; 
    memberIds? : string[]; 
}