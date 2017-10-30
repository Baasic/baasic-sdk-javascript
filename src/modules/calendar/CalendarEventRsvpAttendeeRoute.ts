/* globals module */
/**
 * @module calendarEventRsvpAttendeeRoute
 * @description BaasicCalendarEventRsvpAttendeeRoute Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicCalendarEventRsvpAttendeeRoute Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

import { ICalendarEvent, ICalendarEventAttendee, IGetCalendarEventAttendeeOptions } from './contracts';

export class CalendarEventRsvpAttendeeRoute extends BaseRoute {

    public readonly findRoute: string = 'calendar-event-attendees/{?searchQuery,page,rpp,sort,embed,fields,calendarIds,calendarNames,eventIds,invitationTypeIds,attendeeStatusIds,userIds,slotDifference,emails,from,to,ids}';
    public readonly getRoute: string = 'calendar-event-attendees/{id}/{?embed, fields}';
    public readonly createRoute: string = 'calendar-event-attendees';
    public readonly updateRoute: string = 'calendar-event-attendees/{id}';
    public readonly deleteRoute: string = 'calendar-event-attendees/{id}';
    public readonly purgeRoute: string = 'calendar-event-attendees/{id}/purge';
    public readonly updateStatusRoute: string = '{id}/status/{attendeeStatusId}';
    public readonly updateStatusEmailRoute: string = '{id}/user/{emailOrFullName}/status/{attendeeStatusId}';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }
    
    /**
     * Parses find route which can be expanded with additional GetCalendarLookupOptions. Supported items are:
     * - `searchQuery` - A string referencing CalendarEventAttendee properties using the phrase or BQL (Baasic Query Language) search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain CalendarEventAttendee subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the CalendarEventAttendee property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `calendarIds` - calendar ids which identify CalendarEventAttendee resources.
     * - `calendarNames` - calendar names which identify CalendarEventAttendee resources.
     * - `eventIds` - eventIds which identify CalendarEventAttendee resources.
     * - `invitationTypeIds` - invitationTypeIds which identify CalendarEventAttendee resources.
     * - `attendeeStatusIds` - statusIds which identify CalendarEventAttendee resources.
     * - `userIds` - CalendarEventAttende userIds which identify CalendarEventAttendee resources.
     * - `slotDifference` - TODO
     * - `emails` - CalendarEventAttendee emails which identify CalendarEventAttendee resources.
     * - `from` - Fluent syntax for 'From' date. Used to limit the dataset to only use resources starting from this date.
     * - `to` - Fluent syntax for 'To' date. Used to limit the dataset to only use resources ending to this date.
     * - `ids` - CalendarEventAttendee ids which uniquely identify CalendarEventAttendee resources that need to be retrieved.
     * @method
     * @param options Query resource GetCalendarLookupOptions object.
     * @example calendarEventRsvpAttendeeRoute.find({searchQuery: '<search-phrase>'});
     **/
    find(options?: IGetCalendarEventAttendeeOptions): any {
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
     * @param options Query resource GetRequestOptions object.
     * @example calendarEventRsvpAttendeeRoute.get(id);
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses create route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventAttendee object that needs to be inserted into the system.
     * @example calendarEventRsvpAttendeeRoute.create(data);
     **/
    create(data: ICalendarEventAttendee): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventAttendee object used to update specified CalendarEventAttendee resource.
     * @example calendarEventRsvpAttendeeRoute.update(data);
     **/
    update(data: ICalendarEventAttendee): any {
        return super.baseUpdate(this.updateRoute, data);
    }

     /**
     * Parses update Status route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventAttendee object used to update specified CalendarEventAttendee resource.
     * @example calendarEventRsvpAttendeeRoute.update(data);
     **/
    updateStatus(data: ICalendarEventAttendee): any {
        return super.baseUpdate(this.updateStatusRoute, data);
    }

     /**
     * Parses update status email or name route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventAttendee object used to update specified CalendarEventAttendee resource.
     * @example calendarEventRsvpAttendeeRoute.update(data);
     **/
    updateStatusEmailOrName(data: ICalendarEventAttendee): any {
        //TODO:
        //return super.baseUpdate(this.updateStatusEmailRoute, data);
    }

    /**
     * Parses delte route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventAttendee object used to delete specified CalendarEventAttendee resource.
     * @example calendarEventRsvpAttendeeRoute.delete(data);
     **/
    delete(data: ICalendarEventAttendee): any {
        return super.baseDelete(this.deleteRoute, data);
    }


    /**
     * Parses purge route. This URI template does not expose any additional options.
     * @method
     * @example calendarEventRsvpAttendeeRoute.purge();
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