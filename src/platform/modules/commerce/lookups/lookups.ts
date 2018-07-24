import {
    TYPES
} from '../';
import {
    CommerceLookupsAddressTypesClient,
    CommerceLookupsCountryClient,
    CommerceLookupsCountryStateClient,
    CommerceLookupsPaymentMethodClient,
    CommerceLookupsPaymentTransactionStatusClient,
    CommerceLookupsRecurringCyclePeriodTypeClient,
    CommerceLookupsSubscriptionStatusClient,
    CommerceLookupsInvoiceStatusClient,
    CommerceLookupsCouponTypesClient
} from './';


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
        @inject(TYPES.CommerceLookupsInvoiceStatusClient) public invoiceStatuses: CommerceLookupsInvoiceStatusClient,
        @inject(TYPES.CommerceLookupsCouponTypesClient) public couponTypes: CommerceLookupsCouponTypesClient
    ) {
    }

}