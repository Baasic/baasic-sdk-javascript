import { IToken, TokenType } from 'core/contracts';

export interface ITokenHandler {
    store(token: IToken): void,
    get(type?: TokenType): IToken
}