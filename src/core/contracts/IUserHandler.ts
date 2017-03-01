import { IUser } from 'core/contracts';

export interface IUserHandler {
    getUser(): IUser;
    setUser(userInfo: IUser): void;
}