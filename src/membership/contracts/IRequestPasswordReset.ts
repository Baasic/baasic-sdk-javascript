import { IBaasicModel } from 'contracts';

export interface IRequestPasswordReset extends IBaasicModel {
    challengeIdentifier?: string,
    challengeResponse?: string,
    recoverUrl: string,
    userName: string
}