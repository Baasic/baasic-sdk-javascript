import { IApplicationRole } from 'modules/applicationSettings/contracts';
import { ISNProvider } from 'modules/applicationSettings/contracts';
import { IModel } from 'common/contracts';

export interface IApplication extends IModel {
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