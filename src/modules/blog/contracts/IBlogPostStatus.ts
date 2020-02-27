import { IModel } from '../../../common/contracts';

export interface IBlogPostStatus extends IModel {
    abrv: string;
    description?: string;
    name: string;
}