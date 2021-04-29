import { IToken, TokenType, ITokenStoreOptions } from './';

export interface ITokenHandler {
    tokenExpiredEventName: string;
    tokenUpdatedEventName: string;
    store(token: IToken, options?: ITokenStoreOptions): void,
    get(type?: TokenType): IToken
}