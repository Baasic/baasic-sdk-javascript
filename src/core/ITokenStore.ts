import { IToken, TokenType } from 'core';

export interface ITokenStore
{
    store(token: IToken): void,
    get(type?: TokenType): IToken
}