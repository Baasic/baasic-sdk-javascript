import { IToken, TokenType, TokenTypes, ITokenHandler, IEventHandler, IStorageHandler } from 'core/contracts';
import { TYPES as coreTYPES } from 'core';
import { IBaasicApp, TYPES as rootTYPES } from '../';
import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class TokenHandler implements ITokenHandler {

    private token: IToken;
    private tokenKey: string;
    private userAccessTokenTimerHandle: number

    constructor(
        @inject(coreTYPES.IEventHandler) protected eventHandler: IEventHandler,
        @inject(coreTYPES.IStorageHandler) protected storageHandler: IStorageHandler,
        @inject(rootTYPES.IBaasicApp) private application: IBaasicApp
    ) {
        this.initEventing();

        this.tokenKey = 'baasic-auth-token-' + this.application.apiKey;
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
        }, [data]);
    }

    triggerTokenUpdated(app: IBaasicApp) {
        var data = { app: app };
        this.eventHandler.triggerEvent('tokenUpdated', data);

        this.eventHandler.pushMessage({
            type: this.messageTypes.tokenUpdated
        }, [data]);
    }

    setExpirationTimer(token: IToken): any {
        if (token && token.expireTime) {
            var expiresIn = this.token.expireTime - new Date().getTime();
            if (expiresIn > 0) {
                return setTimeout(function () {
                    this.store(null);
                    this.triggerTokenExpired(this.application);
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