import { ILanguage, IModel } from '../../../common/contracts';
import { IBlogOwner } from '.';

export interface IBlog extends IModel {
    abrv: string;
    description: string;
    language?: ILanguage;
    languageId: string;
    name: string;
    owner?: IBlogOwner;
    ownerId: string;
}