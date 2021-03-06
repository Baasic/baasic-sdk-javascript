import { IEventHandler, IUserHandler, IStorageHandler, IUser, IBaasicApp, TYPES as coreTYPES } from './contracts';
import { injectable, inject } from "inversify";

@injectable()
export class UserHandler implements IUserHandler {

    private userInfoKey: string;
    protected user: IUser;
    protected readonly messageTypes = {
        userChanged: 'userChanged'
    };

    constructor(
        @inject(coreTYPES.IEventHandler) protected eventHandler: IEventHandler,
        @inject(coreTYPES.IStorageHandler) protected storageHandler: IStorageHandler,
        @inject(coreTYPES.IBaasicApp) private application: IBaasicApp
    ) {
        this.userInfoKey = 'baasic-user-info-' + this.application.getApiKey();

        this.user = {
            isAuthenticated: () => {
                var token = this.application.getAccessToken();
                return token !== undefined && token !== null && (token.expireTime === undefined || token.expireTime === null || (token.expireTime - new Date().getTime()) > 0);
            }
        }

    }

    getUser(): IUser {
        var userInfo;
        var json = this.storageHandler.get(this.userInfoKey);
        if (typeof json === 'string') {
            userInfo = JSON.parse(json);
        } else {
            userInfo = json;
        }
        if (userInfo) {
            this.user.user = userInfo;
        } else {
            delete this.user.user;
        }

        return this.user;
    }
    setUser(userInfo: IUser) {
        if (userInfo === undefined || userInfo === null) {
            this.storageHandler.remove(this.userInfoKey);
        } else {
            this.storageHandler.set(this.userInfoKey, userInfo);
        }

        this.eventHandler.pushMessage({
            type: this.messageTypes.userChanged
        }, {
                user: this.getUser()
            });
    }
}