import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    ShoppingCartItemClient, 
    ShoppingCartPaymentClient, 
    ShoppingCartItemBatchClient, 
    ShoppingCartItemRoute,
    ShoppingCartPaymentRoute,
    ShoppingCartItemBatchRoute,
    Root
} from './';

const TYPES = {
    ShoppingCartItemClient: Symbol("ShoppingCartItemClient"),
    ShoppingCartPaymentClient: Symbol("ShoppingCartPaymentClient"),
    ShoppingCartItemBatchClient: Symbol("ShoppingCartItemBatchClient"),
    ShoppingCartItemRoute: Symbol("ShoppingCartItemRoute"),
    ShoppingCartPaymentRoute: Symbol("ShoppingCartPaymentRoute"),
    ShoppingCartItemBatchRoute: Symbol("ShoppingCartItemBatchRoute"),
    Root: Symbol("Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ShoppingCartItemClient>(TYPES.ShoppingCartItemClient).to(ShoppingCartItemClient);
    bind<ShoppingCartPaymentClient>(TYPES.ShoppingCartPaymentClient).to(ShoppingCartPaymentClient);
    bind<ShoppingCartItemBatchClient>(TYPES.ShoppingCartItemBatchClient).to(ShoppingCartItemBatchClient);
    bind<ShoppingCartItemRoute>(TYPES.ShoppingCartItemRoute).to(ShoppingCartItemRoute);
    bind<ShoppingCartPaymentRoute>(TYPES.ShoppingCartPaymentRoute).to(ShoppingCartPaymentRoute);
    bind<ShoppingCartItemBatchRoute>(TYPES.ShoppingCartItemBatchRoute).to(ShoppingCartItemBatchRoute);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };