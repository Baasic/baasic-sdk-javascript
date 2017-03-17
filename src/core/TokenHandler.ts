import { Utility } from 'common';
import { IToken, TokenType, TokenTypes, ITokenHandler, IEventHandler, IStorageHandler, IBaasicApp, TYPES as coreTYPES } from 'core/contracts';
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

    store(token: IToken): void {
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
            this.storageHandler.set(this.tokenKey, JSON.stringify(token));
        }

        if (token === undefined || token === null) {
            this.triggerTokenExpired(this.application);
        } else {
            this.triggerTokenUpdated(this.application);
        }

    }

    get(type?: TokenType): IToken {
        return JSON.parse(this.storageHandler.get(this.tokenKey));
    }

    triggerTokenExpired(app: IBaasicApp) {
        var data = { app: app };
        this.eventHandler.triggerEvent('tokenExpired', data);

        this.eventHandler.pushMessage({
            type: this.messageTypes.tokenExpired
        }, {});
    }

    triggerTokenUpdated(app: IBaasicApp) {
        var data = { app: app };
        this.eventHandler.triggerEvent('tokenUpdated', data);

        this.eventHandler.pushMessage({
            type: this.messageTypes.tokenUpdated
        }, {});
    }

    setExpirationTimer(token: IToken): any {
        if (token && token.expireTime) {
            var expiresIn = token.expireTime - new Date().getTime();
            if (expiresIn > 0) {
                var self = this;
                return setTimeout(function () {
                    self.store(null);
                    self.triggerTokenExpired(self.application);
                }, expiresIn);
            } else {
                this.store(null);
            }
        }

        return null;
    }

    syncToken(newToken: IToken): void {
        clearTimeout(this.userAccessTokenTimerHandle);
        if (newToken !== undefined && newToken !== null) {
            if (!newToken.expireTime) {
                let expiresIn = newToken.expires_in;
                let slidingWindow = newToken.sliding_window;
                /*jshint camelcase: true */
                if (expiresIn) {
                    newToken.expireTime = new Date().getTime() + (expiresIn * 1000);
                } else if (slidingWindow) {
                    newToken.expireTime = new Date().getTime() + (slidingWindow * 1000);
                }
            }
            this.userAccessTokenTimerHandle = this.setExpirationTimer(newToken);
        }
    }


    initEventing(): void {
        this.eventHandler.addEvent('tokenExpired', function (e) {
            e = e || event;
            if (e.originalEvent) {
                e = e.originalEvent;
            }
            this.syncToken(null);
        });
    }


};