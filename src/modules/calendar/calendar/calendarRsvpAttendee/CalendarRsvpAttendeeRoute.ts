/* globals module */
/**
 * @module calendarRsvpAttendeeRoute
 * @description BaasicCalendarRsvpAttendeeRoute Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicCalendarRsvpAttendeeRoute Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../../../common';
import { IGetRequestOptions, IOptions } from '../../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../../core/contracts';

import { ICalendarEvent, ICalendarEventAttendee, IGetCalendarRsvpAttendeeOptions } from '../../contracts';

export class CalendarRsvpAttendeeRoute extends BaseRoute {

    public readonly findRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/{?searchQuery,page,rpp,sort,embed,fields,ids,userIds,emails,fullNames,invitationTypeIds,from,to}';
    public readonly getRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/{id}';
    public readonly getByEmailOrFullNameRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/emails/{emailOrFullName}'
    public readonly linkRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees';
    public readonly updateRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/{id}';
    public readonly updateStatusRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/{id}/status/{attendeeStatusId}';
    public readonly updateStatusByEmailOrFullNameRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/emails/{emailOrFullName}/status/{attendeeStatusId}';
    public readonly unlinkRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/{id}';
    public readonly purgeRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/purge';
    public readonly subscribeEmailRoute: string = 'calendars/{calendarId}/events/{eventId}/emails/{email}/subscribe';
    public readonly unsubscribeEmailRoute: string = 'calendars/{calendarId}/events/{eventId}/emails/{email}/unsubscribe';
    public readonly subscribeRoute: string = 'calendars/{calendarId}/events/{eventId}/emails/{email}/subscribe';
    public readonly unsubscribeRoute: string = 'calendars/{calendarId}/events/{eventId}/attendees/{id}/unsubscribe';


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
     * @param calendarId Calendar identifier which uniquely identifies a calendar resource.
     * @param eventId calendarEvent identifier which uniquely identifies a CalendarEvent resource.
     * @example calendarRsvpAttendeeRoute.find(calendarid, eventid, {searchQuery: '<search-phrase>'});
     */
    find(calendarId: string, eventId: string, options?: IGetCalendarRsvpAttendeeOptions): any {
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
        params.eventId = eventId;
        return super.baseFind(this.findRoute, params);
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
     */
    get(calendarId: string, eventId: string, id: string, options?: IGetRequestOptions): any {
        let params = this.modelMapper.getParams(options);
        params.calendarId = calendarId;
        params.eventId = eventId;
        return super.baseGet(this.getRoute, id, params);
    }

    /**
     * @method
     * @param calendarId Calendar Id which uniquely identifies a Calendar resource.
     * @param eventId CalendarEvent Id which uniquely identifies a calendarEvent resource
     * @param emailOrFullName Email or full name which identify a CalendarEventRsvpAttendee resource.
     * @param options Query resource options ovject.
     * @example calendarRsvpAttendeeRoute.getByEmailOrFullName(calendarId, eventId, fullname);
     */
    getByEmailOrFullName(calendarId: string, eventId: string, emailOrFullName: string, options: IGetRequestOptions): any {
        let params = this.modelMapper.getParams(options)
        params.calendarId = calendarId;
        params.eventId = eventId;
        params.emailOrFullName = emailOrFullName;
        return super.baseGet(this.getByEmailOrFullNameRoute, {}, params)
    }

    /**
     * Parses link route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies a CalendarEvent resource
     * @param data A CalendarEventAttendee object that needs to be inserted into the system.
     * @example calendarRsvpAttendeeRoute.link(calendarId, eventId, data);
     */
    link(calendarId: string, eventId: string, data: ICalendarEventAttendee): any {
        let params = this.modelMapper.createParams(data);
        params.calendarId = calendarId;
        params.eventId = eventId;
        return super.baseCreate(this.linkRoute, params);
    }

    /**
     * Parses purge route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @example calendarRsvpAttendeeRoute.purge(calendarId, eventId);
     */
    purge(calendarId: string, eventId: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        params.eventId = eventId;
        return super.baseDelete(this.purgeRoute, params);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param data A CalendarEventAttendee object used to update specified CalendarEventAttendee resource.
     * @example calendarRsvpAttendeeRoute.update(calendarId, eventId, data);
     */
    update(calendarId: string, eventId: string, data: ICalendarEventAttendee): any {
        let params = this.modelMapper.updateParams(data);
        params.calendarId = calendarId;
        params.eventId = eventId;
        return super.baseUpdate(this.updateRoute, params);
    }

    /**
     * Parses update Status route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param id CalendarEventAttendee id which uniquely identifies CalendarEventAttendee resource.
     * @param statusId CalendarEventAttendeeStatus id which uniquely identifies CalendarEventAttendeeStatus resource.
     * @example calendarRsvpAttendeeRoute.updateStatus(calendarId, eventId, id, statusId);
     */
    updateStatus(calendarId: string, eventId: string, id: string, statusId: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        params.eventId = eventId;
        params.id = id;
        params.attendeeStatusId = statusId;
        return super.baseUpdate(this.updateStatusRoute, params);
    }

    //TODO: securityToken
    /**
     * Parses update status email or name route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniqely identifies CalendarEvent resource.
     * @param emailOrFullName Email or FullName
     * @param statusId CalendarEventAttendeeStatus id which uniquely identifies CalendarEventAttendeeStatus resource.
     * @example calendarRsvpAttendeeRoute.update(calendarId, eventId, email, statusId);
     */
    updateStatusEmailOrFullName(calendarId: string, eventId: string, emailOrFullName: string, statusId: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        params.eventId = eventId;
        params.emailOrFullName = emailOrFullName;
        params.statusId = statusId;
        return super.baseUpdate(this.updateStatusByEmailOrFullNameRoute, params);
    }

    /**
     * Parses unlink route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param data A CalendarEventAttendee object used to unlink specified CalendarEventAttendee resource.
     * @example calendarRsvpAttendeeRoute.delete(calendarId, eventId, data);
     */
    unlink(calendarId: string, eventId: string, data: ICalendarEventAttendee): any {
        let params = this.modelMapper.removeParams(data);
        params.calendarId = calendarId;
        params.eventId = eventId;
        return super.baseDelete(this.unlinkRoute, params);
    }

    /**
     * Parses subscribe route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param id CalendarEventAttendee id which uniquely identifies CalendarEventAttendee resource.
     * @example calendarRsvpAttendeeRoute.subscribe(calendarId, eventId, attendeeId);
     */
    subscribe(calendarId: string, eventId: string, id: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        params.eventId = eventId;
        params.id = id;
        return super.baseCreate(this.subscribeRoute, params);
    }

    /**
     * Parses unsubscribe route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param id CalendarEventAttendee id which uniquely identifies CalendarEventAttendee resource.
     * @example calendarRsvpAttendeeRoute.unsubscribe(calendarId, eventId, attendeeId);
     */
    unsubscribe(calendarId: string, eventId: string, id: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        params.eventId = eventId;
        params.id = id;
        return super.baseCreate(this.unsubscribeRoute, params);
    }

    /**
     * Parses subscribeEmail route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param email CalendarEventAttendee email which identifies CalendarEventAttendee resource.
     * @example calendarRsvpAttendeeRoute.subscribe(calendarId, eventId, attendeeId);
     */
    subscribeEmail(calendarId: string, eventId: string, email: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        params.eventId = eventId;
        params.email = email;
        return super.baseCreate(this.subscribeEmailRoute, params);
    }

    /**
     * Parses unsubscribeEmail route. This URI template does not expose any additional options.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param email CalendarEventAttendee email which identifies CalendarEventAttendee resource.
     * @example calendarRsvpAttendeeRoute.unsubscribe(calendarId, eventId, attendeeId);
     */
    unsubscribeEmail(calendarId: string, eventId: string, email: string): any {
        let params: any = {};
        params.calendarId = calendarId;
        params.eventId = eventId;
        params.email = email;
        return super.baseCreate(this.unsubscribeEmailRoute, params);
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