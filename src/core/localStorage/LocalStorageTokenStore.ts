import { IToken, TokenType, ITokenStore, IEventHandler } from 'core';
import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class LocalStorageTokenStore implements ITokenStore {

    constructor(
        protected eventHandler: IEventHandler
    ) {
        if (!localStorage) {
            throw new Error("Local storage not found.");
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

    }


    private pushMessage(message) {
        localStorage.removeItem(this.messageBusKey);

        localStorage.setItem(this.messageBusKey, JSON.stringify(message));
    }

    // triggerTokenExpired(app) {
    //     triggerEvent(document, 'tokenExpired', { app: app });

    //     this.pushMessage({
    //         type: this.messageTypes.tokenExpired
    //     });
    // }

    // triggerTokenUpdated(app) {
    //     triggerEvent(document, 'tokenUpdated', { app: app });

    //     this.pushMessage({
    //         type: this.messageTypes.tokenUpdated
    //     });
    // }



    // addEvent('storage', window, function (e) {
    //     e = e || event;
    //     if (e.originalEvent) {
    //         e = e.originalEvent;
    //     }

    //     if (e.key === messageBusKey) {
    //         var value = e.newValue;
    //         if (value && value !== '') {
    //             var message = JSON.parse(value);

    //             switch (message.type) {
    //                 case messageTypes.userChanged:
    //                     triggerEvent(document, 'userChange', { user: app.getUser(), app: app });
    //                     break;
    //                 case messageTypes.tokenExpired:
    //                     syncToken(null);
    //                     triggerEvent(document, 'tokenExpired', { app: app });
    //                     break;
    //                 case messageTypes.tokenUpdated:
    //                     triggerEvent(document, 'tokenUpdated', { app: app });
    //                     break;
    //             }
    //         }
    //     }

    // }
};