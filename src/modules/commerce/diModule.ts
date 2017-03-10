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
    BaasicCommerceRouteDefinition,
    BaasicCommerceLookupsAddressTypesBatchClient,
    BaasicCommerceLookupsAddressTypeBatchRouteDefinition,
    BaasicCommerceLookupsAddressTypesClient,
    BaasicCommerceLookupsAddressTypeRouteDefinition,
    BaasicCommerceCountryBatchClient,
    BaasicCommerceLookupsCountryBatchRouteDefinition,
    BaasicCommerceLookupsCountryClient,
    BaasicCommerceLookupsCountryRouteDefinition,
    BaasicCommerceCountryStateBatchClient,
    BaasicCommerceLookupsCountryStateBatchRouteDefinition,
    BaasicCommerceLookupsCountryStateClient,
    BaasicCommerceLookupsCountryStateRouteDefinition
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
    BaasicCommerceRouteDefinition: Symbol("BaasicCommerceRouteDefinition"),
    BaasicCommerceLookupsAddressTypesBatchClient: Symbol("BaasicCommerceLookupsAddressTypesBatchClient"),
    BaasicCommerceLookupsAddressTypeBatchRouteDefinition: Symbol("BaasicCommerceLookupsAddressTypeBatchRouteDefinition"),
    BaasicCommerceLookupsAddressTypesClient: Symbol("BaasicCommerceLookupsAddressTypesClient"),
    BaasicCommerceLookupsAddressTypeRouteDefinition: Symbol("BaasicCommerceLookupsAddressTypeRouteDefinition"),
    BaasicCommerceCountryBatchClient: Symbol("BaasicCommerceCountryBatchClient"),
    BaasicCommerceLookupsCountryBatchRouteDefinition: Symbol("BaasicCommerceLookupsCountryBatchRouteDefinition"),
    BaasicCommerceLookupsCountryClient: Symbol("BaasicCommerceLookupsCountryClient"),
    BaasicCommerceLookupsCountryRouteDefinition: Symbol("BaasicCommerceLookupsCountryRouteDefinition"),
    BaasicCommerceCountryStateBatchClient: Symbol("BaasicCommerceCountryStateBatchClient"),
    BaasicCommerceLookupsCountryStateBatchRouteDefinition: Symbol("BaasicCommerceLookupsCountryStateBatchRouteDefinition"),
    BaasicCommerceLookupsCountryStateClient: Symbol("BaasicCommerceLookupsCountryStateClient"),
    BaasicCommerceLookupsCountryStateRouteDefinition: Symbol("BaasicCommerceLookupsCountryStateRouteDefinition")
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
    bind<BaasicCommerceLookupsAddressTypeBatchRouteDefinition>(TYPES.BaasicCommerceLookupsAddressTypeBatchRouteDefinition).to(BaasicCommerceLookupsAddressTypeBatchRouteDefinition);
    bind<BaasicCommerceLookupsAddressTypesBatchClient>(TYPES.BaasicCommerceLookupsAddressTypesBatchClient).to(BaasicCommerceLookupsAddressTypesBatchClient);
    bind<BaasicCommerceLookupsAddressTypeRouteDefinition>(TYPES.BaasicCommerceLookupsAddressTypeRouteDefinition).to(BaasicCommerceLookupsAddressTypeRouteDefinition);
    bind<BaasicCommerceLookupsAddressTypesClient>(TYPES.BaasicCommerceLookupsAddressTypesClient).to(BaasicCommerceLookupsAddressTypesClient);
    bind<BaasicCommerceLookupsCountryBatchRouteDefinition>(TYPES.BaasicCommerceLookupsCountryBatchRouteDefinition).to(BaasicCommerceLookupsCountryBatchRouteDefinition);
    bind<BaasicCommerceCountryBatchClient>(TYPES.BaasicCommerceCountryBatchClient).to(BaasicCommerceCountryBatchClient);
    bind<BaasicCommerceLookupsCountryRouteDefinition>(TYPES.BaasicCommerceLookupsCountryRouteDefinition).to(BaasicCommerceLookupsCountryRouteDefinition);
    bind<BaasicCommerceLookupsCountryClient>(TYPES.BaasicCommerceLookupsCountryClient).to(BaasicCommerceLookupsCountryClient);
    bind<BaasicCommerceLookupsCountryStateBatchRouteDefinition>(TYPES.BaasicCommerceLookupsCountryStateBatchRouteDefinition).to(BaasicCommerceLookupsCountryStateBatchRouteDefinition);
    bind<BaasicCommerceCountryStateBatchClient>(TYPES.BaasicCommerceCountryStateBatchClient).to(BaasicCommerceCountryStateBatchClient);
    bind<BaasicCommerceLookupsCountryStateRouteDefinition>(TYPES.BaasicCommerceLookupsCountryStateRouteDefinition).to(BaasicCommerceLookupsCountryStateRouteDefinition);
    bind<BaasicCommerceLookupsCountryStateClient>(TYPES.BaasicCommerceLookupsCountryStateClient).to(BaasicCommerceLookupsCountryStateClient);
});

export { diModule };