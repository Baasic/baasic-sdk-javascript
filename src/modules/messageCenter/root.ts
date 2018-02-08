import {
    ChannelClient,
    MemberClient,
    MessageClient
    TYPES
} from './';

import { injectable, inject } from "inversify"; 

@injectable()
export class Root {
    constructor (
        @inject(TYPES.ChannelClient) public channel: ChannelClient,
        @inject(TYPES.MemberClient) public member: MemberClient,
        @inject(TYPES.MessageClient) public message: MessageClient
    ){ }
}