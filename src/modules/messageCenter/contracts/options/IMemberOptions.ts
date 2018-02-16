import { IOptions } from '../../../../common/contracts';

export interface IMemberOptions extends IOptions {
    ids? : string[]; 
    channelIds? : string[]; 
    userIds? : string[]; 
}