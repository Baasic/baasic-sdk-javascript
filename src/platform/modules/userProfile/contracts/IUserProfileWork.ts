import { IModel } from 'common/contracts';;
import { ICompany } from './';

export interface IUserProfileWork extends IModel {
    company?: ICompany,
    companyId?: string,
    companyName?: string,
    endDate?: string,
    startDate?: string,
    summary?: string   
}