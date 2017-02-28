import { ITokenHandler, IToken, TokenType, IBaasicAppOptions } from 'core';

export interface IBaasicApp {
    apiKey: string,
    tokenHandler: ITokenHandler,
    settings: Partial<IBaasicAppOptions>,
    getAccessToken(): IToken;
    updateAccessToken(value: IToken);
}