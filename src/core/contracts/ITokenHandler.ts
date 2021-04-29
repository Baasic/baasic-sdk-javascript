import { IToken, TokenType } from './';

export interface ITokenHandler {
    tokenExpiredEventName: string;
    tokenUpdatedEventName: string;
    store(token: IToken, skipSync?: boolean): void,
    get(type?: TokenType): IToken
}