import { ContainerModule } from "inversify";
import {
    BaasicCommerceCustomerPaymentMethodClient,
    BaasicCommerceCustomerPaymentMethodRouteDefinition,
    BaasicCommerceCustomerClient,
    BaasicCommerceCustomerRouteDefinition,
    BaasicCommerceInvoiceClient,
    BaasicCommerceInvoiceRouteDefinition,
    BaasicCommerceInvoiceStreamsClient,
    BaasicCommerceInvoiceStreamsRouteDefinition,
    BaasicCommercePaymentTransactionClient,
    BaasicCommercePaymentTransactionRouteDefinition,
    BaasicCommerceProductClient,
    BaasicCommerceProductRouteDefinition,
    BaasicCommerceClient,
    BaasicCommerceRouteDefinition
} from 'modules/commerce';

const TYPES = {
    BaasicCommerceCustomerPaymentMethodClient: Symbol("BaasicCommerceCustomerPaymentMethodClient"),
    BaasicCommerceCustomerPaymentMethodRouteDefinition: Symbol("BaasicCommerceCustomerPaymentMethodRouteDefinition"),
    BaasicCommerceCustomerClient: Symbol("BaasicCommerceCustomerClient"),
    BaasicCommerceCustomerRouteDefinition: Symbol("BaasicCommerceCustomerRouteDefinition"),
    BaasicCommerceInvoiceClient: Symbol("BaasicCommerceInvoiceClient"),
    BaasicCommerceInvoiceRouteDefinition: Symbol("BaasicCommerceInvoiceRouteDefinition"),
    BaasicCommerceInvoiceStreamsClient: Symbol("BaasicCommerceInvoiceStreamsClient"),
    BaasicCommerceInvoiceStreamsRouteDefinition: Symbol("BaasicCommerceInvoiceStreamsRouteDefinition"),
    BaasicCommercePaymentTransactionClient: Symbol("BaasicCommercePaymentTransactionClient"),
    BaasicCommercePaymentTransactionRouteDefinition: Symbol("BaasicCommercePaymentTransactionRouteDefinition"),
    BaasicCommerceProductClient: Symbol("BaasicCommerceProductClient"),
    BaasicCommerceProductRouteDefinition: Symbol("BaasicCommerceProductRouteDefinition"),
    BaasicCommerceClient: Symbol("BaasicCommerceClient"),
    BaasicCommerceRouteDefinition: Symbol("BaasicCommerceRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicCommerceCustomerPaymentMethodRouteDefinition>(TYPES.BaasicCommerceCustomerPaymentMethodRouteDefinition).to(BaasicCommerceCustomerPaymentMethodRouteDefinition);
    bind<BaasicCommerceCustomerPaymentMethodClient>(TYPES.BaasicCommerceCustomerPaymentMethodClient).to(BaasicCommerceCustomerPaymentMethodClient);
    bind<BaasicCommerceCustomerRouteDefinition>(TYPES.BaasicCommerceCustomerRouteDefinition).to(BaasicCommerceCustomerRouteDefinition);
    bind<BaasicCommerceCustomerClient>(TYPES.BaasicCommerceCustomerClient).to(BaasicCommerceCustomerClient);
    bind<BaasicCommerceInvoiceStreamsRouteDefinition>(TYPES.BaasicCommerceInvoiceStreamsRouteDefinition).to(BaasicCommerceInvoiceStreamsRouteDefinition);
    bind<BaasicCommerceInvoiceStreamsClient>(TYPES.BaasicCommerceInvoiceStreamsClient).to(BaasicCommerceInvoiceStreamsClient);
    bind<BaasicCommerceInvoiceClient>(TYPES.BaasicCommerceInvoiceClient).to(BaasicCommerceInvoiceClient);
    bind<BaasicCommerceInvoiceRouteDefinition>(TYPES.BaasicCommerceInvoiceRouteDefinition).to(BaasicCommerceInvoiceRouteDefinition);
    bind<BaasicCommercePaymentTransactionRouteDefinition>(TYPES.BaasicCommercePaymentTransactionRouteDefinition).to(BaasicCommercePaymentTransactionRouteDefinition);
    bind<BaasicCommercePaymentTransactionClient>(TYPES.BaasicCommercePaymentTransactionClient).to(BaasicCommercePaymentTransactionClient);
    bind<BaasicCommerceProductRouteDefinition>(TYPES.BaasicCommerceProductRouteDefinition).to(BaasicCommerceProductRouteDefinition);
    bind<BaasicCommerceProductClient>(TYPES.BaasicCommerceProductClient).to(BaasicCommerceProductClient);
    bind<BaasicCommerceRouteDefinition>(TYPES.BaasicCommerceRouteDefinition).to(BaasicCommerceRouteDefinition);
    bind<BaasicCommerceClient>(TYPES.BaasicCommerceClient).to(BaasicCommerceClient);
});

export { diModule };