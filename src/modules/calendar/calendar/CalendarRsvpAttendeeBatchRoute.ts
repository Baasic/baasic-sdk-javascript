/* globals module */
/**
 * @module calendarRsvpAttendeeBatchRoute
 * @description BaasicCalendarRsvpAttendeeBatchRoute Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicCalendarRsvpAttendeeBatch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../../common';
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';

import { ICalendar } from '../contracts';

export class CalendarRsvpAttendeeBatchRoute extends BaseRoute {

    public readonly createRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/batch';
    public readonly updateRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/batch';
    public readonly deleteRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/batch';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**
     * Parses create route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @example calendarRsvpAttendeeBatchRoute.create();
     **/
    create(calendarId: string, eventId: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        params.eventId = eventId;
        return super.baseCreate(this.createRoute, params);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @example calendarRsvpAttendeeBatchRoute.update();
     **/
    update(calendarId: string, eventId: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        params.eventId = eventId;
        return super.baseUpdate(this.updateRoute, params);
    }

    /**
     * Parses delte route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @example calendarRsvpAttendeeBatchRoute.delete();
     **/
    delete(calendarId: string, eventId: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        params.eventId = eventId;
        return super.baseDelete(this.deleteRoute, params);
    }
}

/**  
 * @overview  
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
 - All end-point objects are transformed by the associated route service.
 */