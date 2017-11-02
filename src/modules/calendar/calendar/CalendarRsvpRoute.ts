/* globals module */
/**
 * @module calendarRsvpRoute
 * @description BaasicCalendarRsvpRoute Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicCalendarRsvpRoute Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../../common';
import { IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';

import { ICalendar, ICalendarEventRSVP, IGetCalendarRsvpOptions, ICalendarEvent } from '../contracts';

export class CalendarRsvpRoute extends BaseRoute {

    public readonly findRoute: string = 'calendars/{calendarId}/rsvp-details/{?searchQuery,page,rpp,sort,embed,fields,ids,invitationTypeIds,invitationOnly,statusIds,typeIds,registrationCloseFrom,registrationCloseTo,from,to}';
    public readonly getRoute: string = 'calendars/{calendarId}/rsvp-details/{id}';
    public readonly createRoute: string = 'calendars/{calendarId}/rsvp-details';
    public readonly updateRoute: string = 'calendars/{calendarId}/rsvp-details/{id}';
    public readonly deleteRoute: string = 'calendars/{calendarId}/rsvp-details/{id}';
    public readonly purgeRoute: string = 'calendars/{calendarId}/rsvp-details/{id}/purge';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    //TODO: check these param descriptoons
    /**
     * Parses find route which can be expanded with additional GetCalendarOptions. Supported items are:
     * - `searchQuery` - A string referencing CalendarEventRsvp properties using the phrase or BQL (Baasic Query Language) search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain CalendarEventRsvp subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the CalendarEventRsvp property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `ids` - CalendarRsvp ids which uniquely identify CalendarRsvp resources that need to be retrieved.
	 * - `invitationTypeIds` - InvatationType ids which uniquely identify CalendarEventRsvpInvitationType resources used for filtering.
	 * - `invitationOnly` - A value used to filter events which are invitation-only.
	 * - `statusIds` - CalendarEventStatus ids which uniquely identify CalendarEventStatus resources used for filtering.
	 * - `typeIds` - CalendarEventType ids which uniquely identify CalendarEventType resources used for filtering.
     * - `from` - Fluent syntax for 'From' date. Used to limit the dataset to only use resources starting from this date
     * - `to` - Fluent syntax for 'To' date. Used to limit the dataset to only use resources ending to this date.
	 * - `registrationCloseFrom` - A value used to filter eventRsvps where registration is open from this date.
	 * - `registrationCloseTo` - A value used to filter eventRsvps where registration is closed to this date,
     * @method
     * @param calendarId calendarId which uniquely identifies Calendar resource.
     * @param options Query resource GetCalendarOptions object.
     * @example calendarRsvpRoute.find({searchQuery: '<search-phrase>'});
     **/
    find(calendarId: string, options?: IGetCalendarRsvpOptions): any {
        var opt;
        if(options){
            opt = options;
            opt.to = this.getToDate(opt);
            opt.from = this.getFromDate(opt);
            opt.registrationCloseFrom = this.getRegistrationCloseFromDate(opt);
            opt.registrationCloseTo = this.getRegistrationCloseToDate(opt);
        } else {
            opt = {};
        }
        let params = this.modelMapper.findParams(opt);
        params.calendarId = calendarId;
        return super.baseFind(this.findRoute, params);
    }

    /**
     * Parses get route which must be expanded with the id of the previously created CalendarEventRsvp resource. This route can be expanded using additional GetRequestOptions. Supported items are:
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param id CalendarEventRsvp id which uniquely identifies CalendarEventRsvp resource that needs to be retrieved.
     * @param options Query resource options object.
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @example calendarRsvpRoute.get(id, options);
     **/
    get(calendarId: string, id: string, options?: IGetRequestOptions): any {
        let params = this.modelMapper.getParams(options);
        params.calendarId = calendarId;
        return super.baseGet(this.getRoute, id, params);
    }

    /**
     * Parses create route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventRsvp object that needs to be inserted into the system.
     * @param calendarId Calendar Id which uniquely identifies Calendar resource.
     * @example calendarRsvpRoute.create(data);
     **/
    create(calendarId: string, data: ICalendarEventRSVP): any {
        let params = this.utility.extend({}, data);
        params.calendarId = calendarId;
        return super.baseCreate(this.createRoute, params);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventRsvp object used to update specified CalendarEventRsvp resource.
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @example calendarRsvpRoute.update(data);
     **/
    update(calendarId: string, data: ICalendarEventRSVP): any {
        let params = this.utility.extend({}, data);
        params.calendarId = calendarId;
        return super.baseUpdate(this.updateRoute, params);
    }

    /**
     * Parses delte route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEvent object used to delete specified CalendarEvent resource.
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @example calendarRsvpRoute.delete(data);
     **/
    delete(calendarId: string, data: ICalendarEventRSVP): any {
        let params = this.utility.extend({}, data);
        params.calendarId = calendarId;
        return super.baseDelete(this.deleteRoute, params);
    }

    /**
     * Parses purge route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEvent object that will have its rsvp's purged
     * @example calendarRsvpRoute.purge(data);
     */
    purgeForEvent(data: ICalendarEvent): any {
        return super.baseDelete(this.purgeRoute, data);
    }

    protected getToDate(options: any) {
        if (!this.utility.isUndefined(options.to) && options.to !== null) {
            return options.to.toISOString();
        }
        return undefined;
    }

    protected getFromDate(options: any) {
        if (!this.utility.isUndefined(options.from) && options.from !== null) {
            return options.from.toISOString();
        }
        return undefined;
    }

    protected getRegistrationCloseFromDate(options: any) {
        if (!this.utility.isUndefined(options.registrationCloseFrom) && options.registrationCloseFrom !== null) {
            return options.registrationCloseFrom.toISOString();
        }
        return undefined;
    }

    protected getRegistrationCloseToDate(options: any) {
        if (!this.utility.isUndefined(options.registrationCloseTo) && options.registrationCloseTo !== null) {
            return options.registrationCloseTo.toISOString();
        }
        return undefined;
    }
}

/**
 * @overview
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
 - All end-point objects are transformed by the associated route service.
 */