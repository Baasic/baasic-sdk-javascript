export interface IEventHandler {
    triggerEvent(eventName: string, data: any): void;
    addEvent(eventName: string, func: any): void;
}