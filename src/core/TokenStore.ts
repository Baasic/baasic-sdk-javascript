import { IToken, TokenType, TokenTypes, ITokenStore, IEventHandler, IStorageHandler } from 'core';
import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class TokenStore implements ITokenStore {

    private token: IToken;
    private userAccessTokenTimerHandle: number

    constructor(
        protected eventHandler: IEventHandler,
        protected storageHandler: IStorageHandler
    ) {
        this.initEventing();
        if (this.token) {
            userAccessTokenTimerHandle = setExpirationTimer(this.token);
        }
    }

    protected readonly messageBusKey: string = 'baasic-message-bus';
    protected readonly messageTypes = {
        tokenExpired: 'tokenExpired',
        tokenUpdated: 'tokenUpdated'
    };

    store(token: IToken): void {

    }
    get(type?: TokenType): IToken {
        return {
            expireTime: null,
            token: '',
            type: <TokenType>TokenTypes.Access
        };
    }


    private pushMessage(message) {
        this.storageHandler.remove(this.messageBusKey);

        this.storageHandler.set(this.messageBusKey, JSON.stringify(message));
    }

    triggerTokenExpired(app) {
        this.eventHandler.triggerEvent('tokenExpired', { app: app });

        this.pushMessage({
            type: this.messageTypes.tokenExpired
        });
    }

    triggerTokenUpdated(app) {
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
                    settings.storeToken(null);
                    this.triggerTokenExpired(app);
                }, expiresIn);
            } else {
                settings.storeToken(null);
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
                            this.eventHandler.triggerEvent('userChange', { user: app.getUser(), app: app });
                            break;
                        case this.messageTypes.tokenExpired:
                            syncToken(null);
                            this.eventHandler.triggerEvent('tokenExpired', { app: app });
                            break;
                        case this.messageTypes.tokenUpdated:
                            this.eventHandler.triggerEvent('tokenUpdated', { app: app });
                            break;
                    }
                }
            }

        };
    }


};