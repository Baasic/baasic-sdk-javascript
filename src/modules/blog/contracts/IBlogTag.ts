import { IModel } from '../../../common/contracts';

export interface IBlogTag extends IModel {
    slug: string;
    tag: string;
}