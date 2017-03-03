import { IBaasicModel } from 'common/contracts';

export interface INotification extends IBaasicModel {
    channels: string[],
    templateContext?: Object,
    templateId: string
}