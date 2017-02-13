import { IBaasicModel } from '.';

export class BaasicModel implements IBaasicModel {
    dateCreated?: string;
    dateUpdated?: string;
    id?: string;
    embed?: string[];
}