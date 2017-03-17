import { ContainerModule } from "inversify";
import {
    CommerceCustomerPaymentMethodClient,
    CommerceCustomerPaymentMethodRouteDefinition,
    CommerceCustomerClient,
    CommerceCustomerRouteDefinition,
    CommerceInvoiceClient,
    CommerceInvoiceRouteDefinition,
    CommerceInvoiceStreamsClient,
    CommerceInvoiceStreamsRouteDefinition,
    CommercePaymentTransactionClient,
    CommercePaymentTransactionRouteDefinition,
    CommerceProductClient,
    CommerceProductRouteDefinition,
    CommerceClient,
    CommerceRouteDefinition,
    CommerceLookupsAddressTypesBatchClient,
    CommerceLookupsAddressTypeBatchRouteDefinition,
    CommerceLookupsAddressTypesClient,
    CommerceLookupsAddressTypeRouteDefinition,
    CommerceLookupsCountryBatchClient,
    CommerceLookupsCountryBatchRouteDefinition,
    CommerceLookupsCountryClient,
    CommerceLookupsCountryRouteDefinition,
    CommerceLookupsCountryStateBatchClient,
    CommerceLookupsCountryStateBatchRouteDefinition,
    CommerceLookupsCountryStateClient,
    CommerceLookupsCountryStateRouteDefinition,
    CommerceLookupsPaymentMethodBatchClient,
    CommerceLookupsPaymentMethodBatchRouteDefinition,
    CommerceLookupsPaymentMethodClient,
    CommerceLookupsPaymentMethodRouteDefinition,
    CommerceLookupsPaymentTransactionStatusBatchClient,
    CommerceLookupsPaymentTransactionStatusBatchRouteDefinition,
    CommerceLookupsPaymentTransactionStatusClient,
    CommerceLookupsPaymentTransactionStatusRouteDefinition,
    CommerceLookupsRecurringCyclePeriodTypeBatchClient,
    CommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition,
    CommerceLookupsRecurringCyclePeriodTypeClient,
    CommerceLookupsRecurringCyclePeriodTypeRouteDefinition,
    CommerceLookupsSubscriptionStatusBatchClient,
    CommerceLookupsSubscriptionStatusBatchRouteDefinition,
    CommerceLookupsSubscriptionStatusClient,
    CommerceLookupsSubscriptionStatusRouteDefinition,
    CommerceLookupsInvoiceStatusBatchRouteDefinition,
    CommerceLookupsInvoiceStatusRouteDefinition,
    CommerceLookupsInvoiceStatusBatchClient,
    CommerceLookupsInvoiceStatusClient,
    Lookups
} from 'modules/commerce';

const TYPES = {
    CommerceCustomerPaymentMethodClient: Symbol("CommerceCustomerPaymentMethodClient"),
    CommerceCustomerPaymentMethodRouteDefinition: Symbol("CommerceCustomerPaymentMethodRouteDefinition"),
    CommerceCustomerClient: Symbol("CommerceCustomerClient"),
    CommerceCustomerRouteDefinition: Symbol("CommerceCustomerRouteDefinition"),
    CommerceInvoiceClient: Symbol("CommerceInvoiceClient"),
    CommerceInvoiceRouteDefinition: Symbol("CommerceInvoiceRouteDefinition"),
    CommerceInvoiceStreamsClient: Symbol("CommerceInvoiceStreamsClient"),
    CommerceInvoiceStreamsRouteDefinition: Symbol("CommerceInvoiceStreamsRouteDefinition"),
    CommercePaymentTransactionClient: Symbol("CommercePaymentTransactionClient"),
    CommercePaymentTransactionRouteDefinition: Symbol("CommercePaymentTransactionRouteDefinition"),
    CommerceProductClient: Symbol("CommerceProductClient"),
    CommerceProductRouteDefinition: Symbol("CommerceProductRouteDefinition"),
    CommerceClient: Symbol("CommerceClient"),
    CommerceRouteDefinition: Symbol("CommerceRouteDefinition"),
    CommerceLookupsAddressTypesBatchClient: Symbol("CommerceLookupsAddressTypesBatchClient"),
    CommerceLookupsAddressTypeBatchRouteDefinition: Symbol("CommerceLookupsAddressTypeBatchRouteDefinition"),
    CommerceLookupsAddressTypesClient: Symbol("CommerceLookupsAddressTypesClient"),
    CommerceLookupsAddressTypeRouteDefinition: Symbol("CommerceLookupsAddressTypeRouteDefinition"),
    CommerceLookupsCountryBatchClient: Symbol("CommerceLookupsCountryBatchClient"),
    CommerceLookupsCountryBatchRouteDefinition: Symbol("CommerceLookupsCountryBatchRouteDefinition"),
    CommerceLookupsCountryClient: Symbol("CommerceLookupsCountryClient"),
    CommerceLookupsCountryRouteDefinition: Symbol("CommerceLookupsCountryRouteDefinition"),
    CommerceLookupsCountryStateBatchClient: Symbol("CommerceLookupsCountryStateBatchClient"),
    CommerceLookupsCountryStateBatchRouteDefinition: Symbol("CommerceLookupsCountryStateBatchRouteDefinition"),
    CommerceLookupsCountryStateClient: Symbol("CommerceLookupsCountryStateClient"),
    CommerceLookupsCountryStateRouteDefinition: Symbol("CommerceLookupsCountryStateRouteDefinition"),
    CommerceLookupsPaymentMethodBatchClient: Symbol("CommerceLookupsPaymentMethodBatchClient"),
    CommerceLookupsPaymentMethodBatchRouteDefinition: Symbol("CommerceLookupsPaymentMethodBatchRouteDefinition"),
    CommerceLookupsPaymentMethodClient: Symbol("CommerceLookupsPaymentMethodClient"),
    CommerceLookupsPaymentMethodRouteDefinition: Symbol("CommerceLookupsPaymentMethodRouteDefinition"),
    CommerceLookupsPaymentTransactionStatusBatchClient: Symbol("CommerceLookupsPaymentTransactionStatusBatchClient"),
    CommerceLookupsPaymentTransactionStatusBatchRouteDefinition: Symbol("CommerceLookupsPaymentTransactionStatusBatchRouteDefinition"),
    CommerceLookupsPaymentTransactionStatusClient: Symbol("CommerceLookupsPaymentTransactionStatusClient"),
    CommerceLookupsPaymentTransactionStatusRouteDefinition: Symbol("CommerceLookupsPaymentTransactionStatusRouteDefinition"),
    CommerceLookupsRecurringCyclePeriodTypeBatchClient: Symbol("CommerceLookupsRecurringCyclePeriodTypeBatchClient"),
    CommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition: Symbol("CommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition"),
    CommerceLookupsRecurringCyclePeriodTypeClient: Symbol("CommerceLookupsRecurringCyclePeriodTypeClient"),
    CommerceLookupsRecurringCyclePeriodTypeRouteDefinition: Symbol("CommerceLookupsRecurringCyclePeriodTypeRouteDefinition"),
    CommerceLookupsSubscriptionStatusBatchClient: Symbol("CommerceLookupsSubscriptionStatusBatchClient"),
    CommerceLookupsSubscriptionStatusBatchRouteDefinition: Symbol("CommerceLookupsSubscriptionStatusBatchRouteDefinition"),
    CommerceLookupsSubscriptionStatusClient: Symbol("CommerceLookupsSubscriptionStatusClient"),
    CommerceLookupsSubscriptionStatusRouteDefinition: Symbol("CommerceLookupsSubscriptionStatusRouteDefinition"),
    CommerceLookupsInvoiceStatusBatchRouteDefinition: Symbol("CommerceLookupsInvoiceStatusBatchRouteDefinition"),
    CommerceLookupsInvoiceStatusRouteDefinition: Symbol("CommerceLookupsInvoiceStatusRouteDefinition"),
    CommerceLookupsInvoiceStatusBatchClient: Symbol("CommerceLookupsInvoiceStatusBatchClient"),
    CommerceLookupsInvoiceStatusClient: Symbol("CommerceLookupsInvoiceStatusClient"),
    Lookups: Symbol("Lookups")

};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<CommerceCustomerPaymentMethodRouteDefinition>(TYPES.CommerceCustomerPaymentMethodRouteDefinition).to(CommerceCustomerPaymentMethodRouteDefinition);
    bind<CommerceCustomerPaymentMethodClient>(TYPES.CommerceCustomerPaymentMethodClient).to(CommerceCustomerPaymentMethodClient);
    bind<CommerceCustomerRouteDefinition>(TYPES.CommerceCustomerRouteDefinition).to(CommerceCustomerRouteDefinition);
    bind<CommerceCustomerClient>(TYPES.CommerceCustomerClient).to(CommerceCustomerClient);
    bind<CommerceInvoiceStreamsRouteDefinition>(TYPES.CommerceInvoiceStreamsRouteDefinition).to(CommerceInvoiceStreamsRouteDefinition);
    bind<CommerceInvoiceStreamsClient>(TYPES.CommerceInvoiceStreamsClient).to(CommerceInvoiceStreamsClient);
    bind<CommerceInvoiceClient>(TYPES.CommerceInvoiceClient).to(CommerceInvoiceClient);
    bind<CommerceInvoiceRouteDefinition>(TYPES.CommerceInvoiceRouteDefinition).to(CommerceInvoiceRouteDefinition);
    bind<CommercePaymentTransactionRouteDefinition>(TYPES.CommercePaymentTransactionRouteDefinition).to(CommercePaymentTransactionRouteDefinition);
    bind<CommercePaymentTransactionClient>(TYPES.CommercePaymentTransactionClient).to(CommercePaymentTransactionClient);
    bind<CommerceProductRouteDefinition>(TYPES.CommerceProductRouteDefinition).to(CommerceProductRouteDefinition);
    bind<CommerceProductClient>(TYPES.CommerceProductClient).to(CommerceProductClient);
    bind<CommerceRouteDefinition>(TYPES.CommerceRouteDefinition).to(CommerceRouteDefinition);
    bind<CommerceClient>(TYPES.CommerceClient).to(CommerceClient);
    bind<CommerceLookupsAddressTypeBatchRouteDefinition>(TYPES.CommerceLookupsAddressTypeBatchRouteDefinition).to(CommerceLookupsAddressTypeBatchRouteDefinition);
    bind<CommerceLookupsAddressTypesBatchClient>(TYPES.CommerceLookupsAddressTypesBatchClient).to(CommerceLookupsAddressTypesBatchClient);
    bind<CommerceLookupsAddressTypeRouteDefinition>(TYPES.CommerceLookupsAddressTypeRouteDefinition).to(CommerceLookupsAddressTypeRouteDefinition);
    bind<CommerceLookupsAddressTypesClient>(TYPES.CommerceLookupsAddressTypesClient).to(CommerceLookupsAddressTypesClient);
    bind<CommerceLookupsCountryBatchRouteDefinition>(TYPES.CommerceLookupsCountryBatchRouteDefinition).to(CommerceLookupsCountryBatchRouteDefinition);
    bind<CommerceLookupsCountryBatchClient>(TYPES.CommerceLookupsCountryBatchClient).to(CommerceLookupsCountryBatchClient);
    bind<CommerceLookupsCountryRouteDefinition>(TYPES.CommerceLookupsCountryRouteDefinition).to(CommerceLookupsCountryRouteDefinition);
    bind<CommerceLookupsCountryClient>(TYPES.CommerceLookupsCountryClient).to(CommerceLookupsCountryClient);
    bind<CommerceLookupsCountryStateBatchRouteDefinition>(TYPES.CommerceLookupsCountryStateBatchRouteDefinition).to(CommerceLookupsCountryStateBatchRouteDefinition);
    bind<CommerceLookupsCountryStateBatchClient>(TYPES.CommerceLookupsCountryStateBatchClient).to(CommerceLookupsCountryStateBatchClient);
    bind<CommerceLookupsCountryStateRouteDefinition>(TYPES.CommerceLookupsCountryStateRouteDefinition).to(CommerceLookupsCountryStateRouteDefinition);
    bind<CommerceLookupsCountryStateClient>(TYPES.CommerceLookupsCountryStateClient).to(CommerceLookupsCountryStateClient);
    bind<CommerceLookupsPaymentMethodBatchRouteDefinition>(TYPES.CommerceLookupsPaymentMethodBatchRouteDefinition).to(CommerceLookupsPaymentMethodBatchRouteDefinition);
    bind<CommerceLookupsPaymentMethodBatchClient>(TYPES.CommerceLookupsPaymentMethodBatchClient).to(CommerceLookupsPaymentMethodBatchClient);
    bind<CommerceLookupsPaymentMethodRouteDefinition>(TYPES.CommerceLookupsPaymentMethodRouteDefinition).to(CommerceLookupsPaymentMethodRouteDefinition);
    bind<CommerceLookupsPaymentMethodClient>(TYPES.CommerceLookupsPaymentMethodClient).to(CommerceLookupsPaymentMethodClient);
    bind<CommerceLookupsPaymentTransactionStatusBatchRouteDefinition>(TYPES.CommerceLookupsPaymentTransactionStatusBatchRouteDefinition).to(CommerceLookupsPaymentTransactionStatusBatchRouteDefinition);
    bind<CommerceLookupsPaymentTransactionStatusBatchClient>(TYPES.CommerceLookupsPaymentTransactionStatusBatchClient).to(CommerceLookupsPaymentTransactionStatusBatchClient);
    bind<CommerceLookupsPaymentTransactionStatusRouteDefinition>(TYPES.CommerceLookupsPaymentTransactionStatusRouteDefinition).to(CommerceLookupsPaymentTransactionStatusRouteDefinition);
    bind<CommerceLookupsPaymentTransactionStatusClient>(TYPES.CommerceLookupsPaymentTransactionStatusClient).to(CommerceLookupsPaymentTransactionStatusClient);
    bind<CommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition>(TYPES.CommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition).to(CommerceLookupsRecurringCyclePeriodTypeBatchRouteDefinition);
    bind<CommerceLookupsRecurringCyclePeriodTypeBatchClient>(TYPES.CommerceLookupsRecurringCyclePeriodTypeBatchClient).to(CommerceLookupsRecurringCyclePeriodTypeBatchClient);
    bind<CommerceLookupsRecurringCyclePeriodTypeRouteDefinition>(TYPES.CommerceLookupsRecurringCyclePeriodTypeRouteDefinition).to(CommerceLookupsRecurringCyclePeriodTypeRouteDefinition);
    bind<CommerceLookupsRecurringCyclePeriodTypeClient>(TYPES.CommerceLookupsRecurringCyclePeriodTypeClient).to(CommerceLookupsRecurringCyclePeriodTypeClient);
    bind<CommerceLookupsSubscriptionStatusBatchRouteDefinition>(TYPES.CommerceLookupsSubscriptionStatusBatchRouteDefinition).to(CommerceLookupsSubscriptionStatusBatchRouteDefinition);
    bind<CommerceLookupsSubscriptionStatusBatchClient>(TYPES.CommerceLookupsSubscriptionStatusBatchClient).to(CommerceLookupsSubscriptionStatusBatchClient);
    bind<CommerceLookupsSubscriptionStatusRouteDefinition>(TYPES.CommerceLookupsSubscriptionStatusRouteDefinition).to(CommerceLookupsSubscriptionStatusRouteDefinition);
    bind<CommerceLookupsSubscriptionStatusClient>(TYPES.CommerceLookupsSubscriptionStatusClient).to(CommerceLookupsSubscriptionStatusClient);
    bind<CommerceLookupsInvoiceStatusBatchRouteDefinition>(TYPES.CommerceLookupsInvoiceStatusBatchRouteDefinition).to(CommerceLookupsInvoiceStatusBatchRouteDefinition);
    bind<CommerceLookupsInvoiceStatusRouteDefinition>(TYPES.CommerceLookupsInvoiceStatusRouteDefinition).to(CommerceLookupsInvoiceStatusRouteDefinition);
    bind<CommerceLookupsInvoiceStatusBatchClient>(TYPES.CommerceLookupsInvoiceStatusBatchClient).to(CommerceLookupsInvoiceStatusBatchClient);
    bind<CommerceLookupsInvoiceStatusClient>(TYPES.CommerceLookupsInvoiceStatusClient).to(CommerceLookupsInvoiceStatusClient);
    bind<Lookups>(TYPES.Lookups).to(Lookups);
});

export { diModule };