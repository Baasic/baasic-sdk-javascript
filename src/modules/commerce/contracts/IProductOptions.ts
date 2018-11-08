import { IOptions } from '../../../common/contracts';

export interface IProductOptions extends IOptions {
    productCategoryIds?: string[],
    from?: string,
    to: string,
    productCategoryAbrvs?: string[]
}