import { IOptions } from '../../../common/contracts';

export interface ICouponOptions extends IOptions {
    productId: string;
    productCategoryId?: string;
    code: string;
    couponTypeId?: string;
    percentage?: string,
    amount?: string;
    numberOfUses?: number;
    activeFrom?: Date,
    activeTo?: Date,
    name?: string,
    description?: string,
    recurringCyclePeriodTypeId?: string;
    numberOfSubscriptionPeriods?: number;
}