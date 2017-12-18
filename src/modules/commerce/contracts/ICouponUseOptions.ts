import { IOptions } from '../../../common/contracts';

export interface ICouponUseOptions extends IOptions {
    couponId: string;
    userId: string;
}