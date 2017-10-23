/* globals module */
/**
 * @module calendarEventRsvpRoute
 * @description BaasicCalendarEventRsvpRoute Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicCalendarEventRsvpRoute Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

import { ICalendarEvent, ICalendarEventRSVP, IGetCalendarEventRsvpOptions } from './contracts';

export class CalendarEventRsvpRoute extends BaseRoute {

    public readonly findRoute: string = 'calendar-rsvps/{?searchQuery,ids,page,rpp,sort,embed,fields,from,to}';
    public readonly getRoute: string = 'calendar-rsvps/{id}/{?embed, fields}';
    public readonly createRoute: string = 'calendar-rsvps';
    public readonly updateRoute: string = 'calendar-rsvps/{id}';
    public readonly deleteRoute: string = 'calendar-rsvps/{id}';
    public readonly purgeRoute: string = 'calendar-rsvps/purge';
    public readonly purgeForEventRoute: string = '{id}/purge';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }


    /**
     * Parses find route which can be expanded with additional options. Supported items are:
     * - `searchQuery` - A string referencing CalendarEventRsvp properties using the phrase or BQL (Baasic Query Language) search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain CalendarEventRsvp subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the CalendarEventRsvp property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `from` - Fluent syntax for 'From' date. Used to limit the dataset to only use resources starting from this date
     * - `to` - Fluent syntax for 'To' date. Used to limit the dataset to only use resources ending to this date.
     * - `ids` TODO: what are ids?
     * @method
     * @param options Query resource options object.
     * @example calendarEventRsvpRoute.find({searchQuery: '<search-phrase>'});
     **/
    find(options?: IGetCalendarEventRsvpOptions): any {
        var opt;
        if(options){
            opt = options;
            opt.to = this.getToDate(opt);
            opt.from = this.getFromDate(opt);
        } else {
            opt = {};
        }
        return super.baseFind(this.findRoute, opt);
    }

    /**
     * Parses get route; this route doesn't expose any properties.
     * @method
     * @param id CalendarEventRsvp id which uniquely identifies CalendarEventRsvp resource that needs to be retrieved.
     * @param options Query resource options object.
     * @example calendarEventRsvpRoute.get(id);
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses create route; this URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventRsvp object that needs to be inserted into the system.
     * @example calendarEventRsvpRoute.create(data);
     **/
    create(data: ICalendarEventRSVP): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**
     * Parses update route; this URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventRsvp object used to update specified CalendarEventRsvp resource.
     * @example calendarEventRsvpRoute.update(data);
     **/
    update(data: ICalendarEventRSVP): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delte route; this URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventRsvp object used to delete specified CalendarEventRsvp resource.
     * @example calendarEventRsvpRoute.delete(data);
     **/
    delete(data: ICalendarEventRSVP): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
     * Parses purge route; this URI template does not expose any additional options.
     * @method
     * @example calendarEventRsvpRoute.purge();
     */
    purge(): any {
        return super.parse(this.purgeRoute);
    }

    /**
     * Parses purgeForEvent Route. this URI template does not expose any additional options
     * @param data A CalendarEvent object that will have it's CalendarEventRsvps purged.
     * @example calendarEventRsvpRoute.purgeForEvent(calendarEvent)
     */
    purgeForEvent(data: ICalendarEvent): any {
        return super.parse(this.purgeForEventRoute)
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
}

/**
 * @overview
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
 - All end-point objects are transformed by the associated route service.
 */