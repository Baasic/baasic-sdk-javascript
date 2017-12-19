import { IOptions } from '../../../common/contracts';

export interface IProductOptions extends IOptions {
    productCategoryId?: string,
    from?: string,
    to: string,
    productCategoryAbrv?: string
}