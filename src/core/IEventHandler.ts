export interface IEventHandler {
    pushMessage(message: any, args: any[]): void;
    triggerEvent(eventName: string, data: any): void;
    addEvent(eventName: string, func: any): void;
}