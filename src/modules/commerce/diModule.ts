import { ContainerModule } from "inversify";
import {
    CommerceCustomerPaymentMethodClient,
    BaasicCommerceCustomerPaymentMethodRouteDefinition,
    CommerceCustomerClient,
    BaasicCommerceCustomerRouteDefinition,
    CommerceInvoiceClient,
    BaasicCommerceInvoiceRouteDefinition,
    CommerceInvoiceStreamsClient,
    BaasicCommerceInvoiceStreamsRouteDefinition,
    CommercePaymentTransactionClient,
    BaasicCommercePaymentTransactionRouteDefinition,
    CommerceProductClient,
    BaasicCommerceProductRouteDefinition,
    CommerceClient,
    BaasicCommerceRouteDefinition,
    CommerceLookupsAddressTypesBatchClient,
    BaasicCommerceLookupsAddressTypeBatchRouteDefinition,
    CommerceLookupsAddressTypesClient,
    BaasicCommerceLookupsAddressTypeRouteDefinition,
    CommerceLookupsCountryBatchClient,
    BaasicCommerceLookupsCountryBatchRouteDefinition,
    CommerceLookupsCountryClient,
    BaasicCommerceLookupsCountryRouteDefinition,
    CommerceLookupsCountryStateBatchClient,
    BaasicCommerceLookupsCountryStateBatchRouteDefinition,
    CommerceLookupsCountryStateClient,
    BaasicCommerceLookupsCountryStateRouteDefinition,
    CommerceLookupsPaymentMethodBatchClient,
    BaasicCommerceLookupsPaymentMethodBatchRouteDefinition,
    CommerceLookupsPaymentMethodClient,
    BaasicCommerceLookupsPaymentMethodRouteDefinition,
    CommerceLookupsPaymentTransactionStatusBatchClient,
    BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition,
    CommerceLookupsPaymentTransactionStatusClient,
    BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition,
    CommerceLookupsRecurringCyclePeriodTypeBatchClient,
    BaasicCommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition,
    CommerceLookupsRecurringCyclePeriodTypeClient,
    BaasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition,
    CommerceLookupsSubscriptionStatusBatchClient,
    BaasicCommerceLookupsSubscriptionStatusBatchRouteDefinition,
    CommerceLookupsSubscriptionStatusClient,
    BaasicCommerceLookupsSubscriptionStatusRouteDefinition,
    BaasicCommerceLookupsInvoiceStatusBatchRouteDefinition,
    BaasicCommerceLookupsInvoiceStatusRouteDefinition,
    CommerceLookupsInvoiceStatusBatchClient,
    CommerceLookupsInvoiceStatusClient,
    Lookups
} from 'modules/commerce';

const TYPES = {
    CommerceCustomerPaymentMethodClient: Symbol("CommerceCustomerPaymentMethodClient"),
    BaasicCommerceCustomerPaymentMethodRouteDefinition: Symbol("BaasicCommerceCustomerPaymentMethodRouteDefinition"),
    CommerceCustomerClient: Symbol("CommerceCustomerClient"),
    BaasicCommerceCustomerRouteDefinition: Symbol("BaasicCommerceCustomerRouteDefinition"),
    CommerceInvoiceClient: Symbol("CommerceInvoiceClient"),
    BaasicCommerceInvoiceRouteDefinition: Symbol("BaasicCommerceInvoiceRouteDefinition"),
    CommerceInvoiceStreamsClient: Symbol("CommerceInvoiceStreamsClient"),
    BaasicCommerceInvoiceStreamsRouteDefinition: Symbol("BaasicCommerceInvoiceStreamsRouteDefinition"),
    CommercePaymentTransactionClient: Symbol("CommercePaymentTransactionClient"),
    BaasicCommercePaymentTransactionRouteDefinition: Symbol("BaasicCommercePaymentTransactionRouteDefinition"),
    CommerceProductClient: Symbol("CommerceProductClient"),
    BaasicCommerceProductRouteDefinition: Symbol("BaasicCommerceProductRouteDefinition"),
    CommerceClient: Symbol("CommerceClient"),
    BaasicCommerceRouteDefinition: Symbol("BaasicCommerceRouteDefinition"),
    CommerceLookupsAddressTypesBatchClient: Symbol("CommerceLookupsAddressTypesBatchClient"),
    BaasicCommerceLookupsAddressTypeBatchRouteDefinition: Symbol("BaasicCommerceLookupsAddressTypeBatchRouteDefinition"),
    CommerceLookupsAddressTypesClient: Symbol("CommerceLookupsAddressTypesClient"),
    BaasicCommerceLookupsAddressTypeRouteDefinition: Symbol("BaasicCommerceLookupsAddressTypeRouteDefinition"),
    CommerceLookupsCountryBatchClient: Symbol("CommerceLookupsCountryBatchClient"),
    BaasicCommerceLookupsCountryBatchRouteDefinition: Symbol("BaasicCommerceLookupsCountryBatchRouteDefinition"),
    CommerceLookupsCountryClient: Symbol("CommerceLookupsCountryClient"),
    BaasicCommerceLookupsCountryRouteDefinition: Symbol("BaasicCommerceLookupsCountryRouteDefinition"),
    CommerceLookupsCountryStateBatchClient: Symbol("CommerceLookupsCountryStateBatchClient"),
    BaasicCommerceLookupsCountryStateBatchRouteDefinition: Symbol("BaasicCommerceLookupsCountryStateBatchRouteDefinition"),
    CommerceLookupsCountryStateClient: Symbol("CommerceLookupsCountryStateClient"),
    BaasicCommerceLookupsCountryStateRouteDefinition: Symbol("BaasicCommerceLookupsCountryStateRouteDefinition"),
    CommerceLookupsPaymentMethodBatchClient: Symbol("CommerceLookupsPaymentMethodBatchClient"),
    BaasicCommerceLookupsPaymentMethodBatchRouteDefinition: Symbol("BaasicCommerceLookupsPaymentMethodBatchRouteDefinition"),
    CommerceLookupsPaymentMethodClient: Symbol("CommerceLookupsPaymentMethodClient"),
    BaasicCommerceLookupsPaymentMethodRouteDefinition: Symbol("BaasicCommerceLookupsPaymentMethodRouteDefinition"),
    CommerceLookupsPaymentTransactionStatusBatchClient: Symbol("CommerceLookupsPaymentTransactionStatusBatchClient"),
    BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition: Symbol("BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition"),
    CommerceLookupsPaymentTransactionStatusClient: Symbol("CommerceLookupsPaymentTransactionStatusClient"),
    BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition: Symbol("BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition"),
    CommerceLookupsRecurringCyclePeriodTypeBatchClient: Symbol("CommerceLookupsRecurringCyclePeriodTypeBatchClient"),
    BaasicCommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition: Symbol("BaasicCommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition"),
    CommerceLookupsRecurringCyclePeriodTypeClient: Symbol("CommerceLookupsRecurringCyclePeriodTypeClient"),
    BaasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition: Symbol("BaasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition"),
    CommerceLookupsSubscriptionStatusBatchClient: Symbol("CommerceLookupsSubscriptionStatusBatchClient"),
    BaasicCommerceLookupsSubscriptionStatusBatchRouteDefinition: Symbol("BaasicCommerceLookupsSubscriptionStatusBatchRouteDefinition"),
    CommerceLookupsSubscriptionStatusClient: Symbol("CommerceLookupsSubscriptionStatusClient"),
    BaasicCommerceLookupsSubscriptionStatusRouteDefinition: Symbol("BaasicCommerceLookupsSubscriptionStatusRouteDefinition"),
    BaasicCommerceLookupsInvoiceStatusBatchRouteDefinition: Symbol("BaasicCommerceLookupsInvoiceStatusBatchRouteDefinition"),
    BaasicCommerceLookupsInvoiceStatusRouteDefinition: Symbol("BaasicCommerceLookupsInvoiceStatusRouteDefinition"),
    CommerceLookupsInvoiceStatusBatchClient: Symbol("CommerceLookupsInvoiceStatusBatchClient"),
    CommerceLookupsInvoiceStatusClient: Symbol("CommerceLookupsInvoiceStatusClient"),
    Lookups: Symbol("Lookups")

};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicCommerceCustomerPaymentMethodRouteDefinition>(TYPES.BaasicCommerceCustomerPaymentMethodRouteDefinition).to(BaasicCommerceCustomerPaymentMethodRouteDefinition);
    bind<CommerceCustomerPaymentMethodClient>(TYPES.CommerceCustomerPaymentMethodClient).to(CommerceCustomerPaymentMethodClient);
    bind<BaasicCommerceCustomerRouteDefinition>(TYPES.BaasicCommerceCustomerRouteDefinition).to(BaasicCommerceCustomerRouteDefinition);
    bind<CommerceCustomerClient>(TYPES.CommerceCustomerClient).to(CommerceCustomerClient);
    bind<BaasicCommerceInvoiceStreamsRouteDefinition>(TYPES.BaasicCommerceInvoiceStreamsRouteDefinition).to(BaasicCommerceInvoiceStreamsRouteDefinition);
    bind<CommerceInvoiceStreamsClient>(TYPES.CommerceInvoiceStreamsClient).to(CommerceInvoiceStreamsClient);
    bind<CommerceInvoiceClient>(TYPES.CommerceInvoiceClient).to(CommerceInvoiceClient);
    bind<BaasicCommerceInvoiceRouteDefinition>(TYPES.BaasicCommerceInvoiceRouteDefinition).to(BaasicCommerceInvoiceRouteDefinition);
    bind<BaasicCommercePaymentTransactionRouteDefinition>(TYPES.BaasicCommercePaymentTransactionRouteDefinition).to(BaasicCommercePaymentTransactionRouteDefinition);
    bind<CommercePaymentTransactionClient>(TYPES.CommercePaymentTransactionClient).to(CommercePaymentTransactionClient);
    bind<BaasicCommerceProductRouteDefinition>(TYPES.BaasicCommerceProductRouteDefinition).to(BaasicCommerceProductRouteDefinition);
    bind<CommerceProductClient>(TYPES.CommerceProductClient).to(CommerceProductClient);
    bind<BaasicCommerceRouteDefinition>(TYPES.BaasicCommerceRouteDefinition).to(BaasicCommerceRouteDefinition);
    bind<CommerceClient>(TYPES.CommerceClient).to(CommerceClient);
    bind<BaasicCommerceLookupsAddressTypeBatchRouteDefinition>(TYPES.BaasicCommerceLookupsAddressTypeBatchRouteDefinition).to(BaasicCommerceLookupsAddressTypeBatchRouteDefinition);
    bind<CommerceLookupsAddressTypesBatchClient>(TYPES.CommerceLookupsAddressTypesBatchClient).to(CommerceLookupsAddressTypesBatchClient);
    bind<BaasicCommerceLookupsAddressTypeRouteDefinition>(TYPES.BaasicCommerceLookupsAddressTypeRouteDefinition).to(BaasicCommerceLookupsAddressTypeRouteDefinition);
    bind<CommerceLookupsAddressTypesClient>(TYPES.CommerceLookupsAddressTypesClient).to(CommerceLookupsAddressTypesClient);
    bind<BaasicCommerceLookupsCountryBatchRouteDefinition>(TYPES.BaasicCommerceLookupsCountryBatchRouteDefinition).to(BaasicCommerceLookupsCountryBatchRouteDefinition);
    bind<CommerceLookupsCountryBatchClient>(TYPES.CommerceLookupsCountryBatchClient).to(CommerceLookupsCountryBatchClient);
    bind<BaasicCommerceLookupsCountryRouteDefinition>(TYPES.BaasicCommerceLookupsCountryRouteDefinition).to(BaasicCommerceLookupsCountryRouteDefinition);
    bind<CommerceLookupsCountryClient>(TYPES.CommerceLookupsCountryClient).to(CommerceLookupsCountryClient);
    bind<BaasicCommerceLookupsCountryStateBatchRouteDefinition>(TYPES.BaasicCommerceLookupsCountryStateBatchRouteDefinition).to(BaasicCommerceLookupsCountryStateBatchRouteDefinition);
    bind<CommerceLookupsCountryStateBatchClient>(TYPES.CommerceLookupsCountryStateBatchClient).to(CommerceLookupsCountryStateBatchClient);
    bind<BaasicCommerceLookupsCountryStateRouteDefinition>(TYPES.BaasicCommerceLookupsCountryStateRouteDefinition).to(BaasicCommerceLookupsCountryStateRouteDefinition);
    bind<CommerceLookupsCountryStateClient>(TYPES.CommerceLookupsCountryStateClient).to(CommerceLookupsCountryStateClient);
    bind<BaasicCommerceLookupsPaymentMethodBatchRouteDefinition>(TYPES.BaasicCommerceLookupsPaymentMethodBatchRouteDefinition).to(BaasicCommerceLookupsPaymentMethodBatchRouteDefinition);
    bind<CommerceLookupsPaymentMethodBatchClient>(TYPES.CommerceLookupsPaymentMethodBatchClient).to(CommerceLookupsPaymentMethodBatchClient);
    bind<BaasicCommerceLookupsPaymentMethodRouteDefinition>(TYPES.BaasicCommerceLookupsPaymentMethodRouteDefinition).to(BaasicCommerceLookupsPaymentMethodRouteDefinition);
    bind<CommerceLookupsPaymentMethodClient>(TYPES.CommerceLookupsPaymentMethodClient).to(CommerceLookupsPaymentMethodClient);
    bind<BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition>(TYPES.BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition).to(BaasicCommerceLookupsPaymentTransactionStatusBatchRouteDefinition);
    bind<CommerceLookupsPaymentTransactionStatusBatchClient>(TYPES.CommerceLookupsPaymentTransactionStatusBatchClient).to(CommerceLookupsPaymentTransactionStatusBatchClient);
    bind<BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition>(TYPES.BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition).to(BaasicCommerceLookupsPaymentTransactionStatusRouteDefinition);
    bind<CommerceLookupsPaymentTransactionStatusClient>(TYPES.CommerceLookupsPaymentTransactionStatusClient).to(CommerceLookupsPaymentTransactionStatusClient);
    bind<BaasicCommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition>(TYPES.BaasicCommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition).to(BaasicCommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition);
    bind<CommerceLookupsRecurringCyclePeriodTypeBatchClient>(TYPES.CommerceLookupsRecurringCyclePeriodTypeBatchClient).to(CommerceLookupsRecurringCyclePeriodTypeBatchClient);
    bind<BaasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition>(TYPES.BaasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition).to(BaasicCommerceLookupsRecurringCyclePeriodTypeRouteDefinition);
    bind<CommerceLookupsRecurringCyclePeriodTypeClient>(TYPES.CommerceLookupsRecurringCyclePeriodTypeClient).to(CommerceLookupsRecurringCyclePeriodTypeClient);
    bind<BaasicCommerceLookupsSubscriptionStatusBatchRouteDefinition>(TYPES.BaasicCommerceLookupsSubscriptionStatusBatchRouteDefinition).to(BaasicCommerceLookupsSubscriptionStatusBatchRouteDefinition);
    bind<CommerceLookupsSubscriptionStatusBatchClient>(TYPES.CommerceLookupsSubscriptionStatusBatchClient).to(CommerceLookupsSubscriptionStatusBatchClient);
    bind<BaasicCommerceLookupsSubscriptionStatusRouteDefinition>(TYPES.BaasicCommerceLookupsSubscriptionStatusRouteDefinition).to(BaasicCommerceLookupsSubscriptionStatusRouteDefinition);
    bind<CommerceLookupsSubscriptionStatusClient>(TYPES.CommerceLookupsSubscriptionStatusClient).to(CommerceLookupsSubscriptionStatusClient);
    bind<BaasicCommerceLookupsInvoiceStatusBatchRouteDefinition>(TYPES.BaasicCommerceLookupsInvoiceStatusBatchRouteDefinition).to(BaasicCommerceLookupsInvoiceStatusBatchRouteDefinition);
    bind<BaasicCommerceLookupsInvoiceStatusRouteDefinition>(TYPES.BaasicCommerceLookupsInvoiceStatusRouteDefinition).to(BaasicCommerceLookupsInvoiceStatusRouteDefinition);
    bind<CommerceLookupsInvoiceStatusBatchClient>(TYPES.CommerceLookupsInvoiceStatusBatchClient).to(CommerceLookupsInvoiceStatusBatchClient);
    bind<CommerceLookupsInvoiceStatusClient>(TYPES.CommerceLookupsInvoiceStatusClient).to(CommerceLookupsInvoiceStatusClient);
    bind<Lookups>(TYPES.Lookups).to(Lookups);
});

export { diModule };