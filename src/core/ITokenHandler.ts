import { IToken, TokenType } from 'core';

export interface ITokenHandler {
    store(token: IToken): void,
    get(type?: TokenType): IToken
}