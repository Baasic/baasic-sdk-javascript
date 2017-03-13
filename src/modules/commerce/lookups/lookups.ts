import {
    TYPES
} from 'modules/commerce';
import {
    BaasicCommerceLookupsAddressTypesClient,
    BaasicCommerceLookupsCountryClient,
    BaasicCommerceLookupsCountryStateClient,
    BaasicCommerceLookupsPaymentMethodClient,
    BaasicCommerceLookupsPaymentTransactionStatusClient,
    BaasicCommerceLookupsRecurringCyclePeriodTypeClient,
    BaasicCommerceLookupsSubscriptionStatusClient
} from 'modules/commerce/lookups';


import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class Lookups {

    constructor(
        @inject(TYPES.BaasicCommerceLookupsAddressTypesClient) public addressTypes: BaasicCommerceLookupsAddressTypesClient,
        @inject(TYPES.BaasicCommerceLookupsCountryClient) public countries: BaasicCommerceLookupsCountryClient,
        @inject(TYPES.BaasicCommerceLookupsCountryStateClient) public countryStates: BaasicCommerceLookupsCountryStateClient,
        @inject(TYPES.BaasicCommerceLookupsPaymentMethodClient) public paymentMethods: BaasicCommerceLookupsPaymentMethodClient,
        @inject(TYPES.BaasicCommerceLookupsPaymentTransactionStatusClient) public paymentTransactionStatuses: BaasicCommerceLookupsPaymentTransactionStatusClient,
        @inject(TYPES.BaasicCommerceLookupsRecurringCyclePeriodTypeClient) public recurringCyclePerioedTypes: BaasicCommerceLookupsRecurringCyclePeriodTypeClient,
        @inject(TYPES.BaasicCommerceLookupsSubscriptionStatusClient) public subscriptionStatuses: BaasicCommerceLookupsSubscriptionStatusClient

    ) {
    }

}