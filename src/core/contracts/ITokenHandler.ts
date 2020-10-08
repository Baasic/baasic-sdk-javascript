import { IToken, TokenType } from './';

export interface ITokenHandler {
    tokenExpiredEventName: string;
    tokenUpdatedEventName: string;
    store(token: IToken): void,
    get(type?: TokenType): IToken
}