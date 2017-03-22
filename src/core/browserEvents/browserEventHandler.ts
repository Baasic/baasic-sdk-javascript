import { Utility } from 'common';
import { IEventHandler, IStorageHandler, IBaasicApp, TYPES as coreTYPES } from 'core/contracts';
import { injectable, inject } from "inversify";

declare var $: any;
let utility = new Utility();

@injectable()
export class BrowserEventHandler implements IEventHandler {

	protected readonly messageBusKey: string;

	constructor(
		@inject(coreTYPES.IStorageHandler) protected storageHandler: IStorageHandler,
		@inject(coreTYPES.IBaasicApp) private application: IBaasicApp
	) {
		this.messageBusKey = 'baasic-message-bus-' + this.application.getApiKey();

		let jQueryLoaded: boolean = (window as any).jQuery;

		if (jQueryLoaded) {
			this.triggerEvent = (eventName, data) => {
				var event = utility.extend($.Event(eventName), data);
				$(document).trigger(event);
			};
		} else if (CustomEvent && typeof CustomEvent === 'function') {
			this.triggerEvent = (eventName, data) => {
				var event = utility.extend(new CustomEvent(eventName), data);
				document.dispatchEvent(event);
			};
		} else if (document.createEvent) {
			this.triggerEvent = (eventName, data) => {
				var event = utility.extend(document.createEvent('CustomEvent'), data);
				event.initEvent(eventName, true, true);
				document.dispatchEvent(event);
			};
		} else {
			this.triggerEvent = (eventName, data) => {
				let doc: any = document;
				var event = utility.extend(doc.createEventObject(), data);
				event.eventType = eventName;
				doc.fireEvent('on' + event.eventType, event);
			};
		}

		if (jQueryLoaded) {
			this.addEvent = (eventName, func) => $(window).on(eventName, func);
		} else if (window.addEventListener) {
			this.addEvent = (eventName, func) => window.addEventListener(eventName, func, false);
		} else if ((<any>window).attachEvent) {
			this.addEvent = (eventName, func) => (<any>window).attachEvent('on' + eventName, func);
		} else {
			this.addEvent = (eventName, func) => window['on' + eventName] = func;
		}

		this.initEventing();
	}

	pushMessage(message: any, args: any) {
		this.storageHandler.remove(this.messageBusKey);

		this.storageHandler.set(this.messageBusKey, JSON.stringify({
			message: message,
			args: args
		}));
	}

	triggerEvent: (eventName: string, data: any) => void;

	addEvent: (eventName: string, func: any) => void;

	private initEventing(): void {
		this.addEvent('storage', function (e) {
			e = e || event;
			if (e.originalEvent) {
				e = e.originalEvent;
			}

			if (e.key === this.messageBusKey) {
				var value = e.newValue;
				if (value && value !== '') {
					var data = JSON.parse(value);
					this.eventHandler.triggerEvent(data.message.type, this.utility.extend(data.args, { app: this.application }));
				}
			}

		});
	}
};