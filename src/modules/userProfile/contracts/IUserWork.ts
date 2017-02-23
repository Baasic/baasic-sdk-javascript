import { IBaasicModel } from 'common/contracts';
import { ICompany } from 'modules/userProfile/contracts';

export interface IUserWork extends IBaasicModel {
    company?: ICompany,
    companyId?: string,
    companyName?: string,
    endDate?: string,
    startDate?: string,
    summary?: string   
}