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
    BaasicCommerceLookupsCountryBatchClient,
    BaasicCommerceLookupsCountryBatchRouteDefinition,
    BaasicCommerceLookupsCountryClient,
    BaasicCommerceLookupsCountryRouteDefinition,
    BaasicCommerceLookupsCountryStateBatchClient,
    BaasicCommerceLookupsCountryStateBatchRouteDefinition,
    BaasicCommerceLookupsCountryStateClient,
    BaasicCommerceLookupsCountryStateRouteDefinition,
    BaasicCommerceLookupsPaymentMethodBatchClient,
    BaasicCommerceLookupsPaymentMethodBatchRouteDefinition,
    BaasicCommerceLookupsPaymentMethodClient,
    BaasicCommerceLookupsPaymentMethodRouteDefinition,
    BaasicCommerceLookupsPaymentTransactionStatusBatchClient,
    BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition,
    BaasicCommerceLookupsPaymentTransactionStatusClient,
    BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition,
    BaasicCommerceLookupsRecurringCyclePeriodTypeBatchClient,
    BaasicCommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition,
    BaasicCommerceLookupsRecurringCyclePeriodTypeClient,
    BaasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition,
    BaasicCommerceLookupsSubscriptionStatusBatchClient,
    BaasicCommerceLookupsSubscriptionStatusBatchRouteDefinition,
    BaasicCommerceLookupsSubscriptionStatusClient,
    BaasicCommerceLookupsSubscriptionStatusRouteDefinition,
    Lookups
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
    BaasicCommerceLookupsCountryBatchClient: Symbol("BaasicCommerceLookupsCountryBatchClient"),
    BaasicCommerceLookupsCountryBatchRouteDefinition: Symbol("BaasicCommerceLookupsCountryBatchRouteDefinition"),
    BaasicCommerceLookupsCountryClient: Symbol("BaasicCommerceLookupsCountryClient"),
    BaasicCommerceLookupsCountryRouteDefinition: Symbol("BaasicCommerceLookupsCountryRouteDefinition"),
    BaasicCommerceLookupsCountryStateBatchClient: Symbol("BaasicCommerceLookupsCountryStateBatchClient"),
    BaasicCommerceLookupsCountryStateBatchRouteDefinition: Symbol("BaasicCommerceLookupsCountryStateBatchRouteDefinition"),
    BaasicCommerceLookupsCountryStateClient: Symbol("BaasicCommerceLookupsCountryStateClient"),
    BaasicCommerceLookupsCountryStateRouteDefinition: Symbol("BaasicCommerceLookupsCountryStateRouteDefinition"),
    BaasicCommerceLookupsPaymentMethodBatchClient: Symbol("BaasicCommerceLookupsPaymentMethodBatchClient"),
    BaasicCommerceLookupsPaymentMethodBatchRouteDefinition: Symbol("BaasicCommerceLookupsPaymentMethodBatchRouteDefinition"),
    BaasicCommerceLookupsPaymentMethodClient: Symbol("BaasicCommerceLookupsPaymentMethodClient"),
    BaasicCommerceLookupsPaymentMethodRouteDefinition: Symbol("BaasicCommerceLookupsPaymentMethodRouteDefinition"),
    BaasicCommerceLookupsPaymentTransactionStatusBatchClient: Symbol("BaasicCommerceLookupsPaymentTransactionStatusBatchClient"),
    BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition: Symbol("BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition"),
    BaasicCommerceLookupsPaymentTransactionStatusClient: Symbol("BaasicCommerceLookupsPaymentTransactionStatusClient"),
    BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition: Symbol("BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition"),
    BaasicCommerceLookupsRecurringCyclePeriodTypeBatchClient: Symbol("BaasicCommerceLookupsRecurringCyclePeriodTypeBatchClient"),
    BaasicCommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition: Symbol("BaasicCommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition"),
    BaasicCommerceLookupsRecurringCyclePeriodTypeClient: Symbol("BaasicCommerceLookupsRecurringCyclePeriodTypeClient"),
    BaasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition: Symbol("BaasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition"),
    BaasicCommerceLookupsSubscriptionStatusBatchClient: Symbol("BaasicCommerceLookupsSubscriptionStatusBatchClient"),
    BaasicCommerceLookupsSubscriptionStatusBatchRouteDefinition: Symbol("BaasicCommerceLookupsSubscriptionStatusBatchRouteDefinition"),
    BaasicCommerceLookupsSubscriptionStatusClient: Symbol("BaasicCommerceLookupsSubscriptionStatusClient"),
    BaasicCommerceLookupsSubscriptionStatusRouteDefinition: Symbol("BaasicCommerceLookupsSubscriptionStatusRouteDefinition"),
    Lookups: Symbol("Lookups")

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
    bind<BaasicCommerceLookupsCountryBatchClient>(TYPES.BaasicCommerceLookupsCountryBatchClient).to(BaasicCommerceLookupsCountryBatchClient);
    bind<BaasicCommerceLookupsCountryRouteDefinition>(TYPES.BaasicCommerceLookupsCountryRouteDefinition).to(BaasicCommerceLookupsCountryRouteDefinition);
    bind<BaasicCommerceLookupsCountryClient>(TYPES.BaasicCommerceLookupsCountryClient).to(BaasicCommerceLookupsCountryClient);
    bind<BaasicCommerceLookupsCountryStateBatchRouteDefinition>(TYPES.BaasicCommerceLookupsCountryStateBatchRouteDefinition).to(BaasicCommerceLookupsCountryStateBatchRouteDefinition);
    bind<BaasicCommerceLookupsCountryStateBatchClient>(TYPES.BaasicCommerceLookupsCountryStateBatchClient).to(BaasicCommerceLookupsCountryStateBatchClient);
    bind<BaasicCommerceLookupsCountryStateRouteDefinition>(TYPES.BaasicCommerceLookupsCountryStateRouteDefinition).to(BaasicCommerceLookupsCountryStateRouteDefinition);
    bind<BaasicCommerceLookupsCountryStateClient>(TYPES.BaasicCommerceLookupsCountryStateClient).to(BaasicCommerceLookupsCountryStateClient);
    bind<BaasicCommerceLookupsPaymentMethodBatchRouteDefinition>(TYPES.BaasicCommerceLookupsPaymentMethodBatchRouteDefinition).to(BaasicCommerceLookupsPaymentMethodBatchRouteDefinition);
    bind<BaasicCommerceLookupsPaymentMethodBatchClient>(TYPES.BaasicCommerceLookupsPaymentMethodBatchClient).to(BaasicCommerceLookupsPaymentMethodBatchClient);
    bind<BaasicCommerceLookupsPaymentMethodRouteDefinition>(TYPES.BaasicCommerceLookupsPaymentMethodRouteDefinition).to(BaasicCommerceLookupsPaymentMethodRouteDefinition);
    bind<BaasicCommerceLookupsPaymentMethodClient>(TYPES.BaasicCommerceLookupsPaymentMethodClient).to(BaasicCommerceLookupsPaymentMethodClient);
    bind<BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition>(TYPES.BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition).to(BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition);
    bind<BaasicCommerceLookupsPaymentTransactionStatusBatchClient>(TYPES.BaasicCommerceLookupsPaymentTransactionStatusBatchClient).to(BaasicCommerceLookupsPaymentTransactionStatusBatchClient);
    bind<BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition>(TYPES.BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition).to(BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition);
    bind<BaasicCommerceLookupsPaymentTransactionStatusClient>(TYPES.BaasicCommerceLookupsPaymentTransactionStatusClient).to(BaasicCommerceLookupsPaymentTransactionStatusClient);
    bind<BaasicCommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition>(TYPES.BaasicCommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition).to(BaasicCommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition);
    bind<BaasicCommerceLookupsRecurringCyclePeriodTypeBatchClient>(TYPES.BaasicCommerceLookupsRecurringCyclePeriodTypeBatchClient).to(BaasicCommerceLookupsRecurringCyclePeriodTypeBatchClient);
    bind<BaasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition>(TYPES.BaasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition).to(BaasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition);
    bind<BaasicCommerceLookupsRecurringCyclePeriodTypeClient>(TYPES.BaasicCommerceLookupsRecurringCyclePeriodTypeClient).to(BaasicCommerceLookupsRecurringCyclePeriodTypeClient);
    bind<BaasicCommerceLookupsSubscriptionStatusBatchRouteDefinition>(TYPES.BaasicCommerceLookupsSubscriptionStatusBatchRouteDefinition).to(BaasicCommerceLookupsSubscriptionStatusBatchRouteDefinition);
    bind<BaasicCommerceLookupsSubscriptionStatusBatchClient>(TYPES.BaasicCommerceLookupsSubscriptionStatusBatchClient).to(BaasicCommerceLookupsSubscriptionStatusBatchClient);
    bind<BaasicCommerceLookupsSubscriptionStatusRouteDefinition>(TYPES.BaasicCommerceLookupsSubscriptionStatusRouteDefinition).to(BaasicCommerceLookupsSubscriptionStatusRouteDefinition);
    bind<BaasicCommerceLookupsSubscriptionStatusClient>(TYPES.BaasicCommerceLookupsSubscriptionStatusClient).to(BaasicCommerceLookupsSubscriptionStatusClient);
    bind<Lookups>(TYPES.Lookups).to(Lookups);
});

export { diModule };