import { ITokenHandler, IToken, TokenType, IBaasicAppOptions, IUserHandler, IUser } from 'core/contracts';

export interface IBaasicApp {
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