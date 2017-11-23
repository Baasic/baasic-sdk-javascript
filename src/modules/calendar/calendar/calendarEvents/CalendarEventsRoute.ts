/* globals module */
/**
 * @module calendarEventsRoute
 * @description BaasicCalendarEventsRoute Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicCalendarEventsRoute Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../../../common';
import { IGetRequestOptions, IOptions } from '../../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../../core/contracts';

import { ICalendar, ICalendarEvent, IGetCalendarEventsOptions } from '../../contracts';

@injectable()
export class CalendarEventsRoute extends BaseRoute {

    public readonly findRoute: string = 'calendars/{calendarId}/events/{?searchQuery,page,rpp,sort,embed,fields,ids,ownerIds,statusIds,typeIds,from,to}';
    public readonly getRoute: string = 'calendars/{calendarId}/events/{id}/{?embed, fields}';
    public readonly getByEmailOrFullNameRoute: string = 'calendars/{calendarId}/events/{id}/emails/{emailOrFullName}';
    public readonly linkRoute: string = 'calendars/{calendarId}/events/{id}';
    public readonly updateRoute: string = 'calendars/{calendarId}/events/{id}';
    public readonly unlinkRoute: string = 'calendars/{calendarId}/events/{id}';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**
     * Parses find route which can be expanded with additional GetCalendarEventOptions. Supported items are:
     * - `searchQuery` - A string referencing CalendarEvent properties using the phrase or BQL (Baasic Query Language) search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain CalendarEvent subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the CalendarEvent property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `ids` - CalendarEvent ids which uniquely identify CalendarEvent resources that need to be retrieved.
	 * - `ownerIds` - Owner ids which uniquely identify event owners used for filtering.
     * - `statusIds` - CalendarEventStatus ids which uniquely idendify CalendarEventStatuses used for filtering.
     * - `typeIds` - CalendarEventType ids which uniquely identify CalendarEventTypes used for filtering.
     * - `from` - Fluent syntax for 'From' date. Used to limit the dataset to only use resources starting from this date
     * - `to` - Fluent syntax for 'To' date. Used to limit the dataset to only use resources ending to this date.
     * @method
     * @param calendarId Calendar identifier which uniquely identifies a calendar resource.
     * @param options Query resource GetCalendarEventsOptions object.
     * @example calendarEventsRoute.find(calendarId, {searchQuery: '<search-phrase>'});
     */
    find(calendarId: string, options?: IGetCalendarEventsOptions): any {
        var opt;
        if(options){
            opt = options;
            opt.to = this.getToDate(opt);
            opt.from = this.getFromDate(opt);
        } else {
            opt = {};
        }
        let params = this.modelMapper.findParams(opt);
        params.calendarId = calendarId;
        return super.baseFind(this.findRoute, params);
    }

    /**
     * Parses get route which must be expanded with the identifier of the previously created CalendarEvent resource. This route can be expanded using additional GetRequestOptions. Supported items are:
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @param id CalendarEvent id which uniquely identifies CalendarEvent resource that needs to be retrieved.
     * @param options Query resource options object.
     * @example calendarEventsRoute.get(id);
     */
    get(calendarId: string, id: string, options?: IGetRequestOptions): any {
        let params = this.modelMapper.getParams(options);
        params.calendarId = calendarId;
        return super.baseGet(this.getRoute, id, params);
    }

    /**
     * Parses getByEmailOrFullName route which must be expanded with the identifier of the previously created CalendarEvent resource
     * The route must also be expanded with the identifier of the previously created CalendarResource and the email/FullName. 
     * @param calendarId Calendar identifier which uniquely identifies previously created calendar resource.
     * @param id CalendarEvent identifier which uniquely identifies previously created CalendarEvent resource.
     * @param emailOrFullName Email or full name.
     * @param options Query resource options object.
     * @example calendarEventsRoute.get(calendarId, id, email@example.com, options);
     */
    getByEmailOrFullName(calendarId: string, id: string, emailOrFullName: string, options?: IGetRequestOptions) {
        let params = this.modelMapper.getParams(options);
        params.calendarId = calendarId;
        params.emailOrFullName = emailOrFullName;
        return super.baseGet(this.getByEmailOrFullNameRoute, id, params);
    }

    /**
     * Parses link route. This URI template does not expose any additional options.
     * @method
     * @param data A calendarEvent resource to be linked.
     * @param calendarId A calendar identifier which uniquely identifies a calendar resource.
     * @example calendarEventsRoute.create(calendarid, eventid);
     */
    link(calendarId: string, data: ICalendarEvent): any {
        let params = this.utility.extend({}, data);
        params.calendarId = calendarId;
        params.eventId = data.id;
        return super.baseCreate(this.linkRoute, params);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEvent object used to update specified CalendarEvent resource.
     * @param calendarId A calendar identifier which uniquely identifies a calendar resourse.
     * @example calendarEventsRoute.update(calendarid, data);
     */
    update(calendarId: string, data: ICalendarEvent): any {
        let params = this.utility.extend({}, data);
        params.calendarId = calendarId;
        return super.baseUpdate(this.updateRoute, params);
    }

    /**
     * Parses unlink route. This URI template does not expose any additional options.
     * @method
     * @param data A calendarEvent resource to be unlinked.
     * @param calendarId A calendar identifier which uniquely identifies a calendar resourse.
     * @example calendarEventsRoute.unlink(calendarid, eventid);
     */
    unlink(calendarId: string, data: ICalendarEvent): any {
        let params = this.utility.extend({}, data);
        params.calendarId = calendarId;
        params.eventId = data.id;
        return super.baseDelete(this.unlinkRoute, params);
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