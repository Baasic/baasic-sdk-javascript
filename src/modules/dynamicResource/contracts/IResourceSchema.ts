import { IBaasicModel } from 'common/contracts';
import { IOwner } from 'dynamicResource/contracts';

export interface IResourceSchema extends IBaasicModel {
    description?: string,
    enforceSchemaValidation?: boolean,
    name: string,
    owner?: IOwner,
    ownerId?: string,
    schema: any
}