import { IOptions } from 'common/contracts';

export interface IGetCalendarOptions extends IOptions {
    from?: string;
    to?: string;
    ids?: string[];   
}