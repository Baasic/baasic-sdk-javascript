import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    ShoppingCartItemClient, 
    ShoppingCartItemBatchClient, 
    ShoppingCartItemRoute,
    ShoppingCartItemBatchRoute,
    Root
} from './';

const TYPES = {
    ShoppingCartItemClient: Symbol("ShoppingCartItemClient"),
    ShoppingCartItemBatchClient: Symbol("ShoppingCartItemBatchClient"),
    ShoppingCartItemRoute: Symbol("ShoppingCartItemRoute"),
    ShoppingCartItemBatchRoute: Symbol("ShoppingCartItemBatchRoute"),
    Root: Symbol("Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ShoppingCartItemClient>(TYPES.ShoppingCartItemClient).to(ShoppingCartItemClient);
    bind<ShoppingCartItemBatchClient>(TYPES.ShoppingCartItemBatchClient).to(ShoppingCartItemBatchClient);
    bind<ShoppingCartItemRoute>(TYPES.ShoppingCartItemRoute).to(ShoppingCartItemRoute);
    bind<ShoppingCartItemBatchRoute>(TYPES.ShoppingCartItemBatchRoute).to(ShoppingCartItemBatchRoute);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };