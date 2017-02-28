import { IToken, TokenType, TokenTypes, ITokenHandler, IEventHandler, IStorageHandler } from 'core';
import { IBaasicApp } from '../';
import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class TokenHandler implements ITokenHandler {

    private token: IToken;
    private tokenKey: string;
    private userAccessTokenTimerHandle: number

    constructor(
        protected eventHandler: IEventHandler,
        protected storageHandler: IStorageHandler,
        private application: IBaasicApp
    ) {
        this.initEventing();

        this.tokenKey = 'baasic-auth-token-' + this.application.apiKey;

        if (this.token) {
            this.userAccessTokenTimerHandle = setExpirationTimer(this.token);
        }
    }

    protected readonly messageBusKey: string = 'baasic-message-bus';
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


    private pushMessage(message) {
        this.storageHandler.remove(this.messageBusKey);

        this.storageHandler.set(this.messageBusKey, JSON.stringify(message));
    }

    triggerTokenExpired(app: IBaasicApp) {
        this.eventHandler.triggerEvent('tokenExpired', { app: app });

        this.pushMessage({
            type: this.messageTypes.tokenExpired
        });
    }

    triggerTokenUpdated(app: IBaasicApp) {
        this.eventHandler.triggerEvent('tokenUpdated', { app: app });

        this.pushMessage({
            type: this.messageTypes.tokenUpdated
        });
    }

    setExpirationTimer(token: IToken): any {
        if (token && token.expireTime) {
            var expiresIn = this.token.expireTime.getTime() - new Date().getTime();
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
                /*jshint camelcase: false */
                var expiresIn = newToken.expires_in;
                var slidingWindow = newToken.sliding_window;
                /*jshint camelcase: true */
                if (expiresIn) {
                    newToken.expireTime = new Date().getTime() + (expiresIn * 1000);
                } else if (slidingWindow) {
                    newToken.expireTime = new Date().getTime() + (slidingWindow * 1000);
                }
            }
            this.userAccessTokenTimerHandle = setExpirationTimer(newToken);
        }
    }


    initEventing(): void {
        this.eventHandler.addEvent('storage', function (e) {
            e = e || event;
            if (e.originalEvent) {
                e = e.originalEvent;
            }

            if (e.key === this.messageBusKey) {
                var value = e.newValue;
                if (value && value !== '') {
                    var message = JSON.parse(value);

                    switch (message.type) {
                        case this.messageTypes.userChanged:
                            this.eventHandler.triggerEvent('userChange', { user: app.getUser(), app: this.application });
                            break;
                        case this.messageTypes.tokenExpired:
                            syncToken(null);
                            this.eventHandler.triggerEvent('tokenExpired', { app: this.application });
                            break;
                        case this.messageTypes.tokenUpdated:
                            this.eventHandler.triggerEvent('tokenUpdated', { app: this.application });
                            break;
                    }
                }
            }

        };
    }


};