import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    ShoppingCartItemClient, 
    ShoppingCartItemRoute,
    Root
} from './';

const TYPES = {
    ShoppingCartItemClient: Symbol("ShoppingCartItemClient"),
    MediaGalleryRoute: Symbol("ShoppingCartItemRoute"),
    Root: Symbol("Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<ShoppingCartItemClient>(TYPES.ShoppingCartItemClient).to(ShoppingCartItemClient);
    bind<ShoppingCartItemRoute>(TYPES.ShoppingCartItemRoute).to(ShoppingCartItemRoute);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };