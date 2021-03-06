import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    CommerceCustomerPaymentMethodClient,
    CommerceCustomerPaymentMethodRoute,
    CommerceCustomerClient,
    CommerceCustomerRoute,
    CommerceInvoiceClient,
    CommerceInvoiceRoute,
    CommerceInvoiceStreamsClient,
    CommerceInvoiceStreamsRoute,
    CommercePaymentTransactionClient,
    CommercePaymentTransactionRoute,
    CommerceProductClient,
    CommerceProductRoute,
    CommerceAddOnClient,
    CommerceAddOnRoute,
    CommerceProductFilesStreamsClient,
    CommerceProductFilesStreamsRoute,
    CommerceProductFilesBatchClient,
    CommerceProductFilesBatchRoute,
    CommerceProductFilesClient,
    CommerceProductFilesRoute,
    CommerceProductSettingsClient,
    CommerceProductSettingsRoute,
    CommerceProductInstanceFilesBatchClient,
    CommerceProductInstanceFilesBatchRoute,
    CommerceProductInstanceFilesClient,
    CommerceProductInstanceFilesRoute,
    CommerceCouponClient,
    CommerceCouponRoute,
    CommerceCouponUseClient,
    CommerceCouponUseRoute,
    CommerceClient,
    CommerceRoute,
    CommerceLookupsAddressTypesBatchClient,
    CommerceLookupsAddressTypeBatchRoute,
    CommerceLookupsAddressTypesClient,
    CommerceLookupsAddressTypeRoute,
    CommerceLookupsCountryBatchClient,
    CommerceLookupsCountryBatchRoute,
    CommerceLookupsCountryClient,
    CommerceLookupsCountryRoute,
    CommerceLookupsCountryStateBatchClient,
    CommerceLookupsCountryStateBatchRoute,
    CommerceLookupsCountryStateClient,
    CommerceLookupsCountryStateRoute,
    CommerceLookupsPaymentMethodBatchClient,
    CommerceLookupsPaymentMethodBatchRoute,
    CommerceLookupsPaymentMethodClient,
    CommerceLookupsPaymentMethodRoute,
    CommerceLookupsPaymentTransactionStatusBatchClient,
    CommerceLookupsPaymentTransactionStatusBatchRoute,
    CommerceLookupsPaymentTransactionStatusClient,
    CommerceLookupsPaymentTransactionStatusRoute,
    CommerceLookupsRecurringCyclePeriodTypeBatchClient,
    CommerceLookupsRecurringCyclePeriodTypeBatchRoute,
    CommerceLookupsRecurringCyclePeriodTypeClient,
    CommerceLookupsRecurringCyclePeriodTypeRoute,
    CommerceLookupsSubscriptionStatusBatchClient,
    CommerceLookupsSubscriptionStatusBatchRoute,
    CommerceLookupsSubscriptionStatusClient,
    CommerceLookupsSubscriptionStatusRoute,
    CommerceLookupsInvoiceStatusBatchRoute,
    CommerceLookupsInvoiceStatusRoute,
    CommerceLookupsInvoiceStatusBatchClient,
    CommerceLookupsInvoiceStatusClient,
    CommerceLookupsCouponTypeBatchRoute,
    CommerceLookupsCouponTypeRoute,
    CommerceLookupsCouponTypesBatchClient,
    CommerceLookupsCouponTypesClient,
    Lookups
} from './';

const TYPES = {
    CommerceCustomerPaymentMethodClient: Symbol("CommerceCustomerPaymentMethodClient"),
    CommerceCustomerPaymentMethodRoute: Symbol("CommerceCustomerPaymentMethodRoute"),
    CommerceCustomerClient: Symbol("CommerceCustomerClient"),
    CommerceCustomerRoute: Symbol("CommerceCustomerRoute"),
    CommerceInvoiceClient: Symbol("CommerceInvoiceClient"),
    CommerceInvoiceRoute: Symbol("CommerceInvoiceRoute"),
    CommerceInvoiceStreamsClient: Symbol("CommerceInvoiceStreamsClient"),
    CommerceInvoiceStreamsRoute: Symbol("CommerceInvoiceStreamsRoute"),
    CommercePaymentTransactionClient: Symbol("CommercePaymentTransactionClient"),
    CommercePaymentTransactionRoute: Symbol("CommercePaymentTransactionRoute"),
    CommerceAddOnClient: Symbol("CommerceAddOnClient"),
    CommerceAddOnRoute: Symbol("CommerceAddOnRoute"),
    CommerceProductClient: Symbol("CommerceProductClient"),
    CommerceProductRoute: Symbol("CommerceProductRoute"),
    CommerceProductFilesStreamsClient: Symbol("CommerceProductFilesStreamsClient"),
    CommerceProductFilesStreamsRoute: Symbol("CommerceProductFilesStreamsRoute"),
    CommerceProductFilesBatchClient: Symbol("CommerceProductFilesBatchClient"),
    CommerceProductFilesBatchRoute: Symbol("CommerceProductFilesBatchRoute"),
    CommerceProductFilesClient: Symbol("CommerceProductFilesClient"),
    CommerceProductFilesRoute: Symbol("CommerceProductFilesRoute"),
    CommerceProductSettingsClient: Symbol("CommerceProductSettingsClient"),
    CommerceProductSettingsRoute: Symbol("CommerceProductSettingsRoute"),
    CommerceProductInstanceFilesClient: Symbol("CommerceProductInstanceFilesClient"),
    CommerceProductInstanceFilesRoute: Symbol("CommerceProductInstanceFilesRoute"),
    CommerceProductInstanceFilesBatchClient: Symbol("CommerceProductInstanceFilesBatchClient"),
    CommerceProductInstanceFilesBatchRoute: Symbol("CommerceProductInstanceFilesBatchRoute"),
    CommerceCouponClient: Symbol("CommerceCouponClient"),
    CommerceCouponRoute: Symbol("CommerceCouponRoute"),
    CommerceCouponUseClient: Symbol("CommerceCouponUseClient"),
    CommerceCouponUseRoute: Symbol("CommerceCouponUseRoute"),    
    CommerceClient: Symbol("CommerceClient"),
    CommerceRoute: Symbol("CommerceRoute"),
    CommerceLookupsAddressTypesBatchClient: Symbol("CommerceLookupsAddressTypesBatchClient"),
    CommerceLookupsAddressTypeBatchRoute: Symbol("CommerceLookupsAddressTypeBatchRoute"),
    CommerceLookupsAddressTypesClient: Symbol("CommerceLookupsAddressTypesClient"),
    CommerceLookupsAddressTypeRoute: Symbol("CommerceLookupsAddressTypeRoute"),
    CommerceLookupsCountryBatchClient: Symbol("CommerceLookupsCountryBatchClient"),
    CommerceLookupsCountryBatchRoute: Symbol("CommerceLookupsCountryBatchRoute"),
    CommerceLookupsCountryClient: Symbol("CommerceLookupsCountryClient"),
    CommerceLookupsCountryRoute: Symbol("CommerceLookupsCountryRoute"),
    CommerceLookupsCountryStateBatchClient: Symbol("CommerceLookupsCountryStateBatchClient"),
    CommerceLookupsCountryStateBatchRoute: Symbol("CommerceLookupsCountryStateBatchRoute"),
    CommerceLookupsCountryStateClient: Symbol("CommerceLookupsCountryStateClient"),
    CommerceLookupsCountryStateRoute: Symbol("CommerceLookupsCountryStateRoute"),
    CommerceLookupsPaymentMethodBatchClient: Symbol("CommerceLookupsPaymentMethodBatchClient"),
    CommerceLookupsPaymentMethodBatchRoute: Symbol("CommerceLookupsPaymentMethodBatchRoute"),
    CommerceLookupsPaymentMethodClient: Symbol("CommerceLookupsPaymentMethodClient"),
    CommerceLookupsPaymentMethodRoute: Symbol("CommerceLookupsPaymentMethodRoute"),
    CommerceLookupsPaymentTransactionStatusBatchClient: Symbol("CommerceLookupsPaymentTransactionStatusBatchClient"),
    CommerceLookupsPaymentTransactionStatusBatchRoute: Symbol("CommerceLookupsPaymentTransactionStatusBatchRoute"),
    CommerceLookupsPaymentTransactionStatusClient: Symbol("CommerceLookupsPaymentTransactionStatusClient"),
    CommerceLookupsPaymentTransactionStatusRoute: Symbol("CommerceLookupsPaymentTransactionStatusRoute"),
    CommerceLookupsRecurringCyclePeriodTypeBatchClient: Symbol("CommerceLookupsRecurringCyclePeriodTypeBatchClient"),
    CommerceLookupsRecurringCyclePeriodTypeBatchRoute: Symbol("CommerceLookupsRecurringCyclePeriodTypeBatchRoute"),
    CommerceLookupsRecurringCyclePeriodTypeClient: Symbol("CommerceLookupsRecurringCyclePeriodTypeClient"),
    CommerceLookupsRecurringCyclePeriodTypeRoute: Symbol("CommerceLookupsRecurringCyclePeriodTypeRoute"),
    CommerceLookupsSubscriptionStatusBatchClient: Symbol("CommerceLookupsSubscriptionStatusBatchClient"),
    CommerceLookupsSubscriptionStatusBatchRoute: Symbol("CommerceLookupsSubscriptionStatusBatchRoute"),
    CommerceLookupsSubscriptionStatusClient: Symbol("CommerceLookupsSubscriptionStatusClient"),
    CommerceLookupsSubscriptionStatusRoute: Symbol("CommerceLookupsSubscriptionStatusRoute"),
    CommerceLookupsInvoiceStatusBatchRoute: Symbol("CommerceLookupsInvoiceStatusBatchRoute"),
    CommerceLookupsInvoiceStatusRoute: Symbol("CommerceLookupsInvoiceStatusRoute"),
    CommerceLookupsInvoiceStatusBatchClient: Symbol("CommerceLookupsInvoiceStatusBatchClient"),
    CommerceLookupsInvoiceStatusClient: Symbol("CommerceLookupsInvoiceStatusClient"),
    CommerceLookupsCouponTypeBatchRoute: Symbol("CommerceLookupsCouponTypeBatchRoute"),
    CommerceLookupsCouponTypeRoute: Symbol("CommerceLookupsCouponTypeRoute"),
    CommerceLookupsCouponTypesBatchClient: Symbol("CommerceLookupsCouponTypesBatchClient"),
    CommerceLookupsCouponTypesClient: Symbol("CommerceLookupsCouponTypesClient"),
    Lookups: Symbol("Lookups")

};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<CommerceCustomerPaymentMethodRoute>(TYPES.CommerceCustomerPaymentMethodRoute).to(CommerceCustomerPaymentMethodRoute);
    bind<CommerceCustomerPaymentMethodClient>(TYPES.CommerceCustomerPaymentMethodClient).to(CommerceCustomerPaymentMethodClient);
    bind<CommerceCustomerRoute>(TYPES.CommerceCustomerRoute).to(CommerceCustomerRoute);
    bind<CommerceCustomerClient>(TYPES.CommerceCustomerClient).to(CommerceCustomerClient);
    bind<CommerceInvoiceStreamsRoute>(TYPES.CommerceInvoiceStreamsRoute).to(CommerceInvoiceStreamsRoute);
    bind<CommerceInvoiceStreamsClient>(TYPES.CommerceInvoiceStreamsClient).to(CommerceInvoiceStreamsClient);
    bind<CommerceInvoiceClient>(TYPES.CommerceInvoiceClient).to(CommerceInvoiceClient);
    bind<CommerceInvoiceRoute>(TYPES.CommerceInvoiceRoute).to(CommerceInvoiceRoute);
    bind<CommercePaymentTransactionRoute>(TYPES.CommercePaymentTransactionRoute).to(CommercePaymentTransactionRoute);
    bind<CommercePaymentTransactionClient>(TYPES.CommercePaymentTransactionClient).to(CommercePaymentTransactionClient);
    bind<CommerceAddOnRoute>(TYPES.CommerceAddOnRoute).to(CommerceAddOnRoute);
    bind<CommerceAddOnClient>(TYPES.CommerceAddOnClient).to(CommerceAddOnClient);
    bind<CommerceProductRoute>(TYPES.CommerceProductRoute).to(CommerceProductRoute);
    bind<CommerceProductClient>(TYPES.CommerceProductClient).to(CommerceProductClient);
    bind<CommerceProductFilesStreamsRoute>(TYPES.CommerceProductFilesStreamsRoute).to(CommerceProductFilesStreamsRoute);
    bind<CommerceProductFilesStreamsClient>(TYPES.CommerceProductFilesStreamsClient).to(CommerceProductFilesStreamsClient);
    bind<CommerceProductFilesBatchRoute>(TYPES.CommerceProductFilesBatchRoute).to(CommerceProductFilesBatchRoute);
    bind<CommerceProductFilesBatchClient>(TYPES.CommerceProductFilesBatchClient).to(CommerceProductFilesBatchClient);
    bind<CommerceProductFilesClient>(TYPES.CommerceProductFilesClient).to(CommerceProductFilesClient);
    bind<CommerceProductFilesRoute>(TYPES.CommerceProductFilesRoute).to(CommerceProductFilesRoute);
    bind<CommerceProductSettingsClient>(TYPES.CommerceProductSettingsClient).to(CommerceProductSettingsClient);
    bind<CommerceProductSettingsRoute>(TYPES.CommerceProductSettingsRoute).to(CommerceProductSettingsRoute);
    bind<CommerceCouponClient>(TYPES.CommerceCouponClient).to(CommerceCouponClient);
    bind<CommerceCouponRoute>(TYPES.CommerceCouponRoute).to(CommerceCouponRoute);
    bind<CommerceCouponUseClient>(TYPES.CommerceCouponUseClient).to(CommerceCouponUseClient);
    bind<CommerceCouponUseRoute>(TYPES.CommerceCouponUseRoute).to(CommerceCouponUseRoute);    
    bind<CommerceRoute>(TYPES.CommerceRoute).to(CommerceRoute);
    bind<CommerceClient>(TYPES.CommerceClient).to(CommerceClient);
    bind<CommerceLookupsAddressTypeBatchRoute>(TYPES.CommerceLookupsAddressTypeBatchRoute).to(CommerceLookupsAddressTypeBatchRoute);
    bind<CommerceLookupsAddressTypesBatchClient>(TYPES.CommerceLookupsAddressTypesBatchClient).to(CommerceLookupsAddressTypesBatchClient);
    bind<CommerceLookupsAddressTypeRoute>(TYPES.CommerceLookupsAddressTypeRoute).to(CommerceLookupsAddressTypeRoute);
    bind<CommerceLookupsAddressTypesClient>(TYPES.CommerceLookupsAddressTypesClient).to(CommerceLookupsAddressTypesClient);
    bind<CommerceLookupsCountryBatchRoute>(TYPES.CommerceLookupsCountryBatchRoute).to(CommerceLookupsCountryBatchRoute);
    bind<CommerceLookupsCountryBatchClient>(TYPES.CommerceLookupsCountryBatchClient).to(CommerceLookupsCountryBatchClient);
    bind<CommerceLookupsCountryRoute>(TYPES.CommerceLookupsCountryRoute).to(CommerceLookupsCountryRoute);
    bind<CommerceLookupsCountryClient>(TYPES.CommerceLookupsCountryClient).to(CommerceLookupsCountryClient);
    bind<CommerceLookupsCountryStateBatchRoute>(TYPES.CommerceLookupsCountryStateBatchRoute).to(CommerceLookupsCountryStateBatchRoute);
    bind<CommerceLookupsCountryStateBatchClient>(TYPES.CommerceLookupsCountryStateBatchClient).to(CommerceLookupsCountryStateBatchClient);
    bind<CommerceLookupsCountryStateRoute>(TYPES.CommerceLookupsCountryStateRoute).to(CommerceLookupsCountryStateRoute);
    bind<CommerceLookupsCountryStateClient>(TYPES.CommerceLookupsCountryStateClient).to(CommerceLookupsCountryStateClient);
    bind<CommerceLookupsPaymentMethodBatchRoute>(TYPES.CommerceLookupsPaymentMethodBatchRoute).to(CommerceLookupsPaymentMethodBatchRoute);
    bind<CommerceLookupsPaymentMethodBatchClient>(TYPES.CommerceLookupsPaymentMethodBatchClient).to(CommerceLookupsPaymentMethodBatchClient);
    bind<CommerceLookupsPaymentMethodRoute>(TYPES.CommerceLookupsPaymentMethodRoute).to(CommerceLookupsPaymentMethodRoute);
    bind<CommerceLookupsPaymentMethodClient>(TYPES.CommerceLookupsPaymentMethodClient).to(CommerceLookupsPaymentMethodClient);
    bind<CommerceLookupsPaymentTransactionStatusBatchRoute>(TYPES.CommerceLookupsPaymentTransactionStatusBatchRoute).to(CommerceLookupsPaymentTransactionStatusBatchRoute);
    bind<CommerceLookupsPaymentTransactionStatusBatchClient>(TYPES.CommerceLookupsPaymentTransactionStatusBatchClient).to(CommerceLookupsPaymentTransactionStatusBatchClient);
    bind<CommerceLookupsPaymentTransactionStatusRoute>(TYPES.CommerceLookupsPaymentTransactionStatusRoute).to(CommerceLookupsPaymentTransactionStatusRoute);
    bind<CommerceLookupsPaymentTransactionStatusClient>(TYPES.CommerceLookupsPaymentTransactionStatusClient).to(CommerceLookupsPaymentTransactionStatusClient);
    bind<CommerceLookupsRecurringCyclePeriodTypeBatchRoute>(TYPES.CommerceLookupsRecurringCyclePeriodTypeBatchRoute).to(CommerceLookupsRecurringCyclePeriodTypeBatchRoute);
    bind<CommerceLookupsRecurringCyclePeriodTypeBatchClient>(TYPES.CommerceLookupsRecurringCyclePeriodTypeBatchClient).to(CommerceLookupsRecurringCyclePeriodTypeBatchClient);
    bind<CommerceLookupsRecurringCyclePeriodTypeRoute>(TYPES.CommerceLookupsRecurringCyclePeriodTypeRoute).to(CommerceLookupsRecurringCyclePeriodTypeRoute);
    bind<CommerceLookupsRecurringCyclePeriodTypeClient>(TYPES.CommerceLookupsRecurringCyclePeriodTypeClient).to(CommerceLookupsRecurringCyclePeriodTypeClient);
    bind<CommerceLookupsSubscriptionStatusBatchRoute>(TYPES.CommerceLookupsSubscriptionStatusBatchRoute).to(CommerceLookupsSubscriptionStatusBatchRoute);
    bind<CommerceLookupsSubscriptionStatusBatchClient>(TYPES.CommerceLookupsSubscriptionStatusBatchClient).to(CommerceLookupsSubscriptionStatusBatchClient);
    bind<CommerceLookupsSubscriptionStatusRoute>(TYPES.CommerceLookupsSubscriptionStatusRoute).to(CommerceLookupsSubscriptionStatusRoute);
    bind<CommerceLookupsSubscriptionStatusClient>(TYPES.CommerceLookupsSubscriptionStatusClient).to(CommerceLookupsSubscriptionStatusClient);
    bind<CommerceLookupsInvoiceStatusBatchRoute>(TYPES.CommerceLookupsInvoiceStatusBatchRoute).to(CommerceLookupsInvoiceStatusBatchRoute);
    bind<CommerceLookupsInvoiceStatusRoute>(TYPES.CommerceLookupsInvoiceStatusRoute).to(CommerceLookupsInvoiceStatusRoute);
    bind<CommerceLookupsInvoiceStatusBatchClient>(TYPES.CommerceLookupsInvoiceStatusBatchClient).to(CommerceLookupsInvoiceStatusBatchClient);
    bind<CommerceLookupsInvoiceStatusClient>(TYPES.CommerceLookupsInvoiceStatusClient).to(CommerceLookupsInvoiceStatusClient);
    bind<CommerceLookupsCouponTypeBatchRoute>(TYPES.CommerceLookupsCouponTypeBatchRoute).to(CommerceLookupsCouponTypeBatchRoute);
    bind<CommerceLookupsCouponTypeRoute>(TYPES.CommerceLookupsCouponTypeRoute).to(CommerceLookupsCouponTypeRoute);
    bind<CommerceLookupsCouponTypesBatchClient>(TYPES.CommerceLookupsCouponTypesBatchClient).to(CommerceLookupsCouponTypesBatchClient);
    bind<CommerceLookupsCouponTypesClient>(TYPES.CommerceLookupsCouponTypesClient).to(CommerceLookupsCouponTypesClient);     
    bind<Lookups>(TYPES.Lookups).to(Lookups);
});

export { diModule };