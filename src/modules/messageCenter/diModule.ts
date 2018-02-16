import { ContainerModule } from "inversify"; 
import * as Symbol from "es6-symbol"; 

import {
    ChannelBatchRoute,
    ChannelBatchClient,
    ChannelRoute,
    ChannelClient,
    MemberBatchRoute,
    MemberBatchClient,
    MemberRoute,
    MemberClient,
    MessageBatchRoute,
    MessageBatchClient,
    MessageRoute, 
    MessageClient,
    Root
}from './';

const TYPES = {
    ChannelBatchClient: Symbol("ChannelBatchClient"), 
    ChannelBatchRoute: Symbol("ChannelBatchRoute"),
    ChannelClient: Symbol("ChannelClient"), 
    ChannelRoute: Symbol("ChannelRoute"),
    MemberBatchRoute: Symbol ("MemberBatchRoute"),
    MemberBatchClient: Symbol("MemberBatchClient"),
    MemberRoute: Symbol("MemberRoute"),
    MemberClient: Symbol("MemberClient"),
    MessageBatchRoute: Symbol("MessageBatchRoute"),
    MessageBatchClient: Symbol("MessageBatchClient"),
    MessageRoute: Symbol("MessageRoute"), 
    MessageClient: Symbol("MessageClient"),
    Root: Symbol("Root")
};

export { TYPES }; 

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ChannelBatchRoute>(TYPES.ChannelBatchRoute).to(ChannelBatchRoute); 
    bind<ChannelBatchClient>(TYPES.ChannelBatchClient).to(ChannelBatchClient);
    bind<ChannelRoute>(TYPES.ChannelRoute).to(ChannelRoute);
    bind<ChannelClient>(TYPES.ChannelClient).to(ChannelClient);
    bind<MemberBatchRoute>(TYPES.MemberBatchRoute).to(MemberBatchRoute);
    bind<MemberBatchClient>(TYPES.MemberBatchClient).to(MemberBatchClient);
    bind<MemberRoute>(TYPES.MemberRoute).to(MemberRoute);
    bind<MemberClient>(TYPES.MemberClient).to(MemberClient);
    bind<MessageBatchRoute>(TYPES.MessageBatchRoute).to(MessageBatchRoute);
    bind<MessageBatchClient>(TYPES.MessageBatchClient).to(MessageBatchClient);
    bind<MessageRoute>(TYPES.MessageRoute).to(MessageRoute);
    bind<MessageClient>(TYPES.MessageClient).to(MessageClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };