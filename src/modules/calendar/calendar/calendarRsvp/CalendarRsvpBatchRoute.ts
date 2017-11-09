/* globals module */
/**
 * @module calendarRsvpBatchRoute
 * @description BaasicCalendarRsvpBatchRoute Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicCalendarRsvpBatch Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../../../common';
import { IAppOptions, TYPES as coreTypes } from '../../../../core/contracts';

export class CalendarRsvpBatchRoute extends BaseRoute {

    public readonly linkRoute: string = 'calendars/{calendarId}/rsvp-details/batch';
    public readonly updateRoute: string = 'calendars/{calendarId}/rsvp-details/batch';
    public readonly unlinkRoute: string = 'calendars/{calendarId}/rsvp-details/batch';


    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**
     * Parses link route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @example calendarRsvpBatchRoute.link(calendarId);
     **/
    link(calendarId: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        return super.baseCreate(this.linkRoute, params);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @example calendarRsvpBatchRoute.update(calendarId);
     **/
    update(calendarId: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        return super.baseUpdate(this.updateRoute, params);
    }

    /**
     * Parses unlink route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @example calendarRsvpBatchRoute.unlink(calendarId);
     **/
    unlink(calendarId: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        return super.baseDelete(this.unlinkRoute, params);
    }
}

/**  
 * @overview  
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
 - All end-point objects are transformed by the associated route service.
 */