import {
    TYPES
} from 'modules/commerce';
import {
    CommerceLookupsAddressTypesClient,
    CommerceLookupsCountryClient,
    CommerceLookupsCountryStateClient,
    CommerceLookupsPaymentMethodClient,
    CommerceLookupsPaymentTransactionStatusClient,
    CommerceLookupsRecurringCyclePeriodTypeClient,
    CommerceLookupsSubscriptionStatusClient,
    CommerceLookupsInvoiceStatusClient
} from 'modules/commerce/lookups';


import { injectable, inject } from "inversify";

@injectable()
export class Lookups {

    constructor(
        @inject(TYPES.CommerceLookupsAddressTypesClient) public addressTypes: CommerceLookupsAddressTypesClient,
        @inject(TYPES.CommerceLookupsCountryClient) public countries: CommerceLookupsCountryClient,
        @inject(TYPES.CommerceLookupsCountryStateClient) public countryStates: CommerceLookupsCountryStateClient,
        @inject(TYPES.CommerceLookupsPaymentMethodClient) public paymentMethods: CommerceLookupsPaymentMethodClient,
        @inject(TYPES.CommerceLookupsPaymentTransactionStatusClient) public paymentTransactionStatuses: CommerceLookupsPaymentTransactionStatusClient,
        @inject(TYPES.CommerceLookupsRecurringCyclePeriodTypeClient) public recurringCyclePeriodTypes: CommerceLookupsRecurringCyclePeriodTypeClient,
        @inject(TYPES.CommerceLookupsSubscriptionStatusClient) public subscriptionStatuses: CommerceLookupsSubscriptionStatusClient,
        @inject(TYPES.CommerceLookupsInvoiceStatusClient) public invoiceStatuses: CommerceLookupsInvoiceStatusClient
    ) {
    }

}