import { IModel } from '../../../common/contracts';;
import { IOwner } from './';

export interface IResourceSchema extends IModel {
    description?: string,
    enforceSchemaValidation?: boolean,
    name: string,
    owner?: IOwner,
    ownerId?: string,
    schema: any
}