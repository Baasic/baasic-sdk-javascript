/* globals module */
/**
 * @module calendarEventClient
 * @description  CalendarEvent Client provides an easy way to consume CalendarEvent REST API end-points. In order to obtain needed routes `calendarEventClient` uses `calendarEventRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES, IHttpHeaders } from '../../../httpApi';
import {
    CalendarEventRoute,
    CalendarEventBatchClient,
    TYPES as calendarTypes
} from '../';
import { ICalendar, ICalendarEvent, IGetCalendarEventOptions } from '../contracts';

@injectable()
export class CalendarEventClient {

    get routeDefinition(): CalendarEventRoute {
        return this.calendarEventRoute;
    }

    get batch(): CalendarEventBatchClient {
        return this.calendarEventBatchClient;
    }

    constructor(
        @inject(calendarTypes.CalendarEventBatchClient) protected calendarEventBatchClient: CalendarEventBatchClient,
        @inject(calendarTypes.CalendarEventRoute) protected calendarEventRoute: CalendarEventRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of CalendarEvent resources matching the given criteria.
     * @method
     * @param options Query resource GetCalendarEventOptions object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarEventClient.find({
					pageNumber: 1,
                    pageSize: 10,
                    orderBy: '<field>',
                    orderDirection: '<asc|desc>',
                    search: '<search-phrase>',
                    ids: <event-identifiers>,
                    ownerIds: <event-owner-identifiers>,
                    calendarIds: <calendars-identifiers>,
                    calendarNames: <calendar-names>,
                    statusIds: <event-status-identifiers>,
                    typeIds: <event-type-identifiers>,
                    from: <start-date>,
                    to: <end-date>
                })
                .then(function (collection) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    find(options?: IGetCalendarEventOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendarEvent>>> {
        return this.apiClient.get<IQueryModel<ICalendarEvent>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEvent resource.
     * @method
     * @param id CalendarEvent id which uniquely identifies CalendarEvent resource that needs to be retrieved.
     * @param options Query resource GetRequstOptions object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarEventClient.get(id)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEvent>> {
        return this.apiClient.get<ICalendarEvent>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the getByEmailOrFullName action has been performed. Success response returns the CalendarEvent resource
     * @method
     * @param id CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param emailOrFullName Email or full name.
     * @param securityToken Security Token.
     * @param options Query resource options object
     * @example calendarEventClient.get(id, email@example.com)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    getByEmailOrFullName(id: string, emailOrFullName: string, securityToken: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEvent>> {
        let headers: IHttpHeaders;
        headers['securityToken'] = securityToken;
        return this.apiClient.get<ICalendarEvent>(this.routeDefinition.getByEmailOrFullName(id, emailOrFullName, options), headers);
    }

    /**
     * Returns a promise that is resolved once the create CalendarEvent action has been performed. This action creates a new CalendarEvent resource.
     * @method
     * @param data A CalendarEvent object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEvent action has been performed.
     * @example calendarEventClient.create({
                    author: <user-info>,
                    authorId: '<author-id>',
                    calendar: <calendar>,
                    calendarId: '<calendar-id>',
                    description: '<description>',
                    detail: <calendar-event-detail>,
                    endTime: '<end-time>',
                    isAllDay: <true|false>,
                    isRecurring: <true|false>,
                    json: '<json>',
                    startTime: '<start-time>',
                    title: '<title'>
                })
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    create(data: ICalendarEvent): PromiseLike<IHttpResponse<ICalendarEvent>> {
        return this.apiClient.post<ICalendarEvent>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEvent action has been performed. This action updates a CalendarEvent resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEvent);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data A Calendar Event  object used to update specified CalendarEvent resource.
     * @returns A promise that is resolved once the update CalendarEvent action has been performed.
     * @example calendarEvent is a resource previously fetched using get action.
                calendarEvent.title = '<title>';
                calendarEventClient.update(calendarEvent)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    update(data: ICalendarEvent): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a CalendarEvent resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEvent);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An calendarEvent object used to delete specified CalendarEvent resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEvent is a resource previously fetched using get action.
                calendarEventClient.remove(calendarEvent)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    remove(data: ICalendarEvent): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all CalendarEvent resources from the system if succesfully completed.
     * @method
     * @param calendarId Calendar identifier which uniquely identifies a calendar resource which will have its Events purged.
     * @returns A promise that is resolved once the purge action has been performed.
     * @example calendarEventClient.purge()
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    purge(calendarId: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge(calendarId));
    }
}

/**
 * @copyright (c) 2017 Mono Ltd
 * @license MIT
 * @author Mono Ltd
 * @overview
 ***Notes:**
 - Refer to the [Baasic REST API](http://dev.baasic.com/api/reference/home) for detailed information about available Baasic REST API end-points.
 - All end-point objects are transformed by the associated route definition.
 */