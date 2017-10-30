/* globals module */
/**
 * @module calendarRsvpAttendeeRoute
 * @description BaasicCalendarRsvpAttendeeRoute Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicCalendarRsvpAttendeeRoute Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

import { ICalendarEvent, ICalendarEventAttendee, IGetCalendarRsvpAttendeeOptions } from './contracts';

export class CalendarRsvpAttendeeRoute extends BaseRoute {

    public readonly findRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/{?searchQuery,page,rpp,sort,embed,fields,ids,userIds,emails,fullNames,invitationTypeIds,from,to}';
    public readonly getRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/{id}';
    public readonly getByEmailOrNameRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/user/{emailOrFullName}'
    public readonly createRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees';
    public readonly updateRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/{id}';
    public readonly updateStatusRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/{id}/status/{attendeeStatusId}';
    public readonly updateStatusByEmailOrNameRoute: string = '{calendarId}/events/{eventId}/attendees/user/{emailOrFullName}/status/{attendeeStatusId}';
    public readonly deleteRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/{id}';
    public readonly purgeRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/purge';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**
     * Parses find route which can be expanded with additional GetCalendarLookupOptions. Supported items are:
     * - `searchQuery` - A string referencing CalendarEventAttendee properties using the phrase or BQL (Baasic Query Language) search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain CalendarEventAttendee subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the CalendarEventAttendee property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `ids` - CalendarEventAttendee ids which uniquely identify CalendarEventAttendee resources that need to be retrieved.
     * - `userIds` - CalendarEventAttende userIds which identify CalendarEventAttendee resources.
     * - `emails` - CalendarEventAttendee emails which identify CalendarEventAttendee resources.
     * - `fullNames` - CalendarEventAttendee full names which identify CalendarEventAttendee resources.
     * - `invitationTypeIds` - invitationTypeIds which identify CalendarEventAttendee resources.
     * - `from` - Fluent syntax for 'From' date. Used to limit the dataset to only use resources starting from this date.
     * - `to` - Fluent syntax for 'To' date. Used to limit the dataset to only use resources ending to this date.
     * @method
     * @param options Query resource GetCalendarLookupOptions object.
     * @example calendarRsvpAttendeeRoute.find({searchQuery: '<search-phrase>'});
     **/
    find(options?: IGetCalendarRsvpAttendeeOptions): any {
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
     * Parses get route which must be expanded with the id of the previously created CalendarEventAttendee resource in the system. The route can be expanded using additional GetRequestOptions. Supported items are
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param id CalendarEventAttendee id which uniquely identifies CalendarEventAttendee resource that needs to be retrieved.
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param options Query resource GetRequestOptions object.
     * @example calendarRsvpAttendeeRoute.get(calendarId, eventId, id);
     **/
    get(calendarId: string, eventId: string, id: string, options?: IGetRequestOptions): any {
        var opt: any = options;
        opt.calendarId = calendarId;
        opt.eventId = eventId;
        return super.baseGet(this.getRoute, id, opt);
    }

    getByEmailOrFullName(): any {
        //TODO:
    }

     /**
     * Parses create route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param data A CalendarEventAttendee object that needs to be inserted into the system.
     * @example calendarRsvpAttendeeRoute.create(calendarId, data);
     **/
    create(calendarId: string, data: ICalendarEventAttendee): any {
        var entry: any = data;
        entry.calendarId = calendarId;
        return super.baseCreate(this.createRoute, calendarId);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param data A CalendarEventAttendee object used to update specified CalendarEventAttendee resource.
     * @example calendarRsvpAttendeeRoute.update(calendarId, data);
     **/
    update(calendarId: string, data: ICalendarEventAttendee): any {
        var entry: any = data;
        entry.calendarId = calendarId;
        return super.baseUpdate(this.updateRoute, entry);
    }

    /**
     * Parses update Status route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param data A CalendarEventAttendee object used to update specified CalendarEventAttendee resource.
     * @example calendarRsvpAttendeeRoute.update(calendarId, data);
     **/
    updateStatus(calendarId: string, data: ICalendarEventAttendee): any {
        var entry: any = data;
        entry.calendarId = calendarId;
        return super.baseUpdate(this.updateStatusRoute, entry);
    }

    /**
     * Parses update status email or name route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param data A CalendarEventAttendee object used to update specified CalendarEventAttendee resource.
     * @example calendarRsvpAttendeeRoute.update(calendarId, data);
     **/
    updateStatusEmailOrName(data: ICalendarEventAttendee): any {
        //TODO:
        //return super.baseUpdate(this.updateStatusEmailRoute, data);
    }

    /**
     * Parses delte route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param data A CalendarEventAttendee object used to delete specified CalendarEventAttendee resource.
     * @example calendarRsvpAttendeeRoute.delete(calendarId, data);
     **/
    delete(calendarId: string, data: ICalendarEventAttendee): any {
        var entry: any = data;
        entry.calendarId = calendarId;
        return super.baseDelete(this.deleteRoute, entry);
    }

    /**
     * Parses purge route. This URI template does not expose any additional options.
     * @method
     * @example calendarRsvpAttendeeRoute.purge(event);
     */
    purge(event: ICalendarEvent): any {
        return super.baseDelete(this.purgeRoute, event);
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