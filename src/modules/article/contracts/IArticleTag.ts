import { IBaasicModel } from 'common/contracts';

export interface IArticleTag extends IBaasicModel {
    slug?: string,
    sortOrder?: number,
    tag: string
}