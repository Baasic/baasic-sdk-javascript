import { ITokenHandler, IToken, IBaasicAppOptions, IUserHandler, IUser } from './';

export interface IBaasicApp {
    tokenHandler: ITokenHandler;
    userHandler: IUserHandler;
    settings: Partial<IBaasicAppOptions>;
    getAccessToken(): IToken;
    updateAccessToken(value: IToken);
    getApiKey(): string;
    getApiUrl(): string;
    getUser(): IUser;
    setUser(userInfo: IUser): void;
}