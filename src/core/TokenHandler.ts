import { Utility } from '../common';
import { IToken, ITokenStoreOptions, TokenType, TokenTypes, ITokenHandler, IEventHandler, IStorageHandler, IBaasicApp, TYPES as coreTYPES } from './contracts';
import { injectable, inject } from "inversify";

@injectable()
export class TokenHandler implements ITokenHandler {

    private utility = new Utility();
    private token: IToken;
    private tokenKey: string;
    private userAccessTokenTimerHandle: number

    constructor(
        @inject(coreTYPES.IEventHandler) protected eventHandler: IEventHandler,
        @inject(coreTYPES.IStorageHandler) protected storageHandler: IStorageHandler,
        @inject(coreTYPES.IBaasicApp) private application: IBaasicApp
    ) {
        this.initEventing();

        this.tokenKey = 'baasic-auth-token-' + this.application.getApiKey();
        this.token = this.get(<TokenType>TokenTypes.Access);
        if (this.token) {
            this.userAccessTokenTimerHandle = this.setExpirationTimer(this.token);
        }
    }

    protected readonly messageTypes = {
        tokenExpired: 'tokenExpired',
        tokenUpdated: 'tokenUpdated'
    };

    public get tokenExpiredEventName() {
        return `tokenExpired-${this.application.getApiKey()}`;
    }

    public get tokenUpdatedEventName() {
        return `tokenUpdated-${this.application.getApiKey()}`;
    }

    store(token: IToken, options?: ITokenStoreOptions): void {
        //Type guard for plain JavaScript
        var anyToken: IToken | any = token;
        if (anyToken && !this.utility.isUndefined(anyToken.access_token)) {
            let t: IToken = {
                token: anyToken.access_token,
                expires_in: anyToken.expires_in,
                sliding_window: anyToken.sliding_window,
                tokenUrl: anyToken.access_url_token,
                type: anyToken.token_type
            };
            token = t;
        }

        this.syncToken(token);

        if (token === undefined || token === null) {
            this.storageHandler.remove(this.tokenKey);
        } else {
            this.storageHandler.set(this.tokenKey, token);
        }

        if (options && options.skipTokenEvents) {
            return;
        }

        this.handleTokenEvent(token);
    }

    protected handleTokenEvent(token?: IToken) {
        if (token === undefined || token === null) {
            this.triggerTokenExpired(this.application);
        } else {
            this.triggerTokenUpdated(this.application);
        }
    }

    get(type?: TokenType): IToken {
        const token = this.storageHandler.get(this.tokenKey);
        if (typeof token === 'string') {
            return JSON.parse(token);
        }
        return token;
    }

    triggerTokenExpired(app: IBaasicApp) {
        var data = { app: app };
        this.eventHandler.triggerEvent(this.tokenExpiredEventName, data);

        this.eventHandler.pushMessage({
            type: this.tokenExpiredEventName
        }, {});
    }

    triggerTokenUpdated(app: IBaasicApp) {
        var data = { app: app };
        this.eventHandler.triggerEvent(this.tokenUpdatedEventName, data);

        this.eventHandler.pushMessage({
            type: this.tokenUpdatedEventName
        }, {});
    }

    setExpirationTimer(token: IToken): any {
        if (token && token.expireTime) {
            var expiresIn = token.expireTime - new Date().getTime();
            if (expiresIn > 0) {
                return setTimeout(() => {
                    this.store(null);
                }, expiresIn);
            } else {
                this.store(null);
            }
        }

        return null;
    }

    syncToken(newToken: IToken): void {
        clearTimeout(this.userAccessTokenTimerHandle);
        if (newToken) {
            if (newToken.expires_in && !newToken.expireTime) {
                newToken.expireTime = new Date().getTime() + (newToken.expires_in * 1000);
            } else if (newToken.sliding_window) {
                newToken.expireTime = new Date().getTime() + (newToken.sliding_window * 1000);
            }
            this.userAccessTokenTimerHandle = this.setExpirationTimer(newToken);
        }
    }


    initEventing(): void {
        this.eventHandler.addEvent(this.tokenExpiredEventName, e => {
            e = e || event;
            if (e.originalEvent) {
                e = e.originalEvent;
            }
            this.syncToken(null);
        });
    }


};