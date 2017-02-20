import { IApplicationRole } from 'applicationSettings/contracts';
import { ISNProvider } from 'applicationSettings/contracts';
import { IBaasicModel } from 'common/contracts';

export interface IApplication extends IBaasicModel {
    allowAnyOrigin?: boolean,
    allowUserRegistration?: boolean,
    applicationTitle: string,
    captchaPrivateKey?: string,
    identifier?: string,
    isActive?: boolean,
    mailFromAddress?: string,
    origins?: string[],
    role?: IApplicationRole[],
    snProvider?: ISNProvider[]
}