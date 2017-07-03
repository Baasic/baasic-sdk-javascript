import { IToken, TokenType } from './';

export interface ITokenHandler {
    store(token: IToken): void,
    get(type?: TokenType): IToken,
    syncToken(newToken: IToken): void
}