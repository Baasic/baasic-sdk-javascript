import { IUser } from 'core';

export interface IUserHandler {
    getUser(): IUser;
    setUser(userInfo: IUser): void;
}