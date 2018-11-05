import { IModel } from 'common/contracts';;

export interface IRequestPasswordReset extends IModel {
    challengeIdentifier?: string,
    challengeResponse?: string,
    recoverUrl: string,
    userName: string
}