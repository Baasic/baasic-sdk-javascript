import { IOptions } from '../../../../common/contracts'

export interface IGetCalendarLookupOptions extends IOptions {
    from?: string;
    to?: string;
    ids?: string[];
}