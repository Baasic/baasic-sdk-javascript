import { IUser } from './';

export interface IUserHandler {
    getUser(): IUser;
    setUser(userInfo: IUser): void;
}