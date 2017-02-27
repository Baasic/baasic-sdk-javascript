import { Utility } from 'common';
import { IEventHandler } from 'core';

declare var $: any;
let utility = new Utility();

export class BrowserEventHandler implements IEventHandler {

	constructor() {

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

					return;
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

					return;
				} else {
					event = document.createEvent('CustomEvent');
					event.eventType = eventName;

					if (additionalData) {
						utility.extend(event, additionalData);
					}
					element.fireEvent('on' + event.eventType, event);

					return;
				}

				if (element.dispatchEvent) {
					element.dispatchEvent(event);
				} else if (element.fireEvent) {
					element.fireEvent('on' + event.eventType, event);
				} else {
					var handler = element['on' + event.eventType];
					if (handler) {
						handler(event);
					}
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
};



