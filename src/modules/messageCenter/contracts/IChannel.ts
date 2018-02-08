import { IModel } from '../../../common/contracts';
import { IMember } from './';

export interface IChannel extends IModel {
   initatorId: string, 
   name?: string,
   memberIds?: string[],
   members?: IMember[]
}
