import { ITokenHandler, IToken, TokenType, IBaasicAppOptions, IUserHandler, IUser } from 'core';

export interface IBaasicApp {
    apiKey: string;
    tokenHandler: ITokenHandler;
    userHandler: IUserHandler;
    settings: Partial<IBaasicAppOptions>;
    getAccessToken(): IToken;
    updateAccessToken(value: IToken);
    getApiKey(): string;
    getApiUrl(): URL;
    getUser(): IUser;
    setUser(userInfo: IUser): void;
}