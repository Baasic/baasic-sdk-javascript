import { Utility } from 'common';
import { IEventHandler, IStorageHandler, TYPES as coreTYPES } from 'core/contracts';
import { injectable, inject } from "inversify";
import 'reflect-metadata';

declare var $: any;
let utility = new Utility();

@injectable()
export class BrowserEventHandler implements IEventHandler {

	protected readonly messageBusKey: string = 'baasic-message-bus';

	constructor(
		@inject(coreTYPES.IStorageHandler) protected storageHandler: IStorageHandler
	) {
		this.initEventing();
	}

	pushMessage(message: any, args: any[]) {
		this.storageHandler.remove(this.messageBusKey);

		this.storageHandler.set(this.messageBusKey, JSON.stringify({
			message: message,
			args: args
		}));
	}


	triggerEvent(eventName: string, data: any): void {
		var element = document;

		$ !== undefined ?
			function (element, eventName, additionalData) {
				var event = utility.extend($.Event(eventName), additionalData);
				$(element).trigger(event);
			} :
			function (element, eventName, additionalData) {
				var event; // The custom event that will be created

				if (CustomEvent && typeof CustomEvent === 'function') {
					event = utility.extend(new CustomEvent(eventName));
					element.dispatchEvent(event);
				} else if (document.createEvent) {
					event = document.createEvent('CustomEvent');
					event.initEvent(eventName, true, true);

					if (additionalData) {
						utility.extend(event, additionalData);
					}

					if (element.dispatchEvent) {
						element.dispatchEvent(event);
					} else {
						document.dispatchEvent(event);
					}
				} else {
					event = document.createEvent('CustomEvent');
					event.eventType = eventName;

					if (additionalData) {
						utility.extend(event, additionalData);
					}
					element.fireEvent('on' + event.eventType, event);
				}
			};
	}

	addEvent(eventName: string, func: any): void {
		var elem = window;

		$ !== undefined ?
			function (evnt, elem, func) {
				$(elem).on(evnt, func);
			} :
			function (evnt, elem, func) {
				if (elem.addEventListener) {
					elem.addEventListener(evnt, func, false);
				}
				else if (elem.attachEvent) {
					elem.attachEvent('on' + evnt, func);
				}
				else {
					elem['on' + evnt] = func;
				}
			};
	}

	initEventing(): void {
		this.addEvent('storage', function (e) {
			e = e || event;
			if (e.originalEvent) {
				e = e.originalEvent;
			}

			if (e.key === this.messageBusKey) {
				var value = e.newValue;
				if (value && value !== '') {
					var data = JSON.parse(value);
					this.eventHandler.triggerEvent(data.message.type, data.args);
				}
			}

		});
	}
};



