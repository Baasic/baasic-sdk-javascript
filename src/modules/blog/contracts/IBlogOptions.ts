import { IOptions } from '../../../common/contracts';

export interface IBlogOptions extends IOptions {
    ids?: string;
    from?: string;
    to?: string;
    languageIds?: string;
    abrv?: string;           
}