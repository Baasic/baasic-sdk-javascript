/* globals module */
/**
 * @module calendarEventsClient
 * @description  CalendarEvents Client provides an easy way to consume CalendarEvents REST API end-points. In order to obtain needed routes `calendarEventsClient` uses `calendarEventsRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventsRoute
} from '../../';
import { ICalendar, ICalendarEvent, IGetCalendarEventsOptions } from '../../contracts';

@injectable()
export class CalendarEventsClient {

    get routeDefinition(): CalendarEventsRoute {
        return this.calendarEventsRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventsRoute) protected calendarEventsRoute: CalendarEventsRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of CalendarEvent resources matching the given criteria.
     * @method
     * @param options Query resource GetCalendarEventOptions object.
     * @param calendarId Calendar Id which uniquely identifies Calendar resource.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarEventsClient.find(calendarId, {
                    pageNumber: 1,
                    pageSize: 10,
                    orderBy: '<field>',
                    orderDirection: '<asc|desc>',
                    search: '<search-phrase>',
                    ids: <event-identifiers>,
                    ownerIds: <event-owner-identifiers>,
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
    find(calendarId: string, options?: IGetCalendarEventsOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendarEvent>>> {
        return this.apiClient.get<IQueryModel<ICalendarEvent>>(this.routeDefinition.find(calendarId, options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEvent resource.
     * @method
     * @param calendarId Calendar Id which uniquely identifies Calendar resource.
     * @param id CalendarEvent id which uniquely identifies CalendarEvent resource that needs to be retrieved.
     * @param options Query resource GetRequstOptions object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarEventsClient.get(calendarId, id)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    get(calendarId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEvent>> {
        return this.apiClient.get<ICalendarEvent>(this.routeDefinition.get(calendarId, id, options));
    }

    //TODO: securityToken
    /**
     * Returns a promise that is resolved once the getByEmailOrFullName action has been performed. Success response returns the CalendarEvent resource
     * @method
     * @param calendarId calendarId which uniquely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param emailOrFullName Email or full name.
     * @param options Query resource options object.
     * @example calendarEventsClient.get(calendarId, id, email@example.com)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    getByEmailOrFullName(calendarId: string, eventId: string, emailOrFullName: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEvent>> {
        return this.apiClient.get<ICalendarEvent>(this.routeDefinition.getByEmailOrFullName(calendarId, eventId, emailOrFullName, options));
    }

    //link
    /**
     * Returns a promise that is resolved once the link CalendarEvent action has been performed. This action links an existing calendarEvent resource with an existing Calendar resource.
     * @method
     * @param calendarId Calendar id which uniquely identifies the calendar resource to be linked.
     * @param data A calendarEvent resource to be linked.
     * @returns A promise that is resolved once the create CalendarEvent action has been performed.
     * @example calendarEventsClient.link(calendarId, event)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    link(calendarId: string, data: ICalendarEvent): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.post<void>(this.routeDefinition.link(calendarId, data), {});
    }

    /**
     * Returns a promise that is resolved once the update CalendarEvent action has been performed. This action updates a CalendarEvent resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventsRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEvent);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data A Calendar Event  object used to update specified CalendarEvent resource.
     * @param calendarId calendarId which uniquely identifies Calendar resource.
     * @returns A promise that is resolved once the update CalendarEvent action has been performed.
     * @example calendarEvent is a resource previously fetched using get action.
                calendarEvent.title = '<title>';
                calendarEventsClient.update(calendarid, calendarEvent)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    update(calendarId: string, data: ICalendarEvent): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(calendarId, data), this.routeDefinition.updateParams(data));
    }

    //unlink
    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will unlink a CalendarEvent resource from the specified calendar if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventsRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEvent);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data A calendarEvent resource to be unlinked.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventsClient.unlink(calendarid, data)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    unlink(calendarId: string, data: ICalendarEvent): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.unlink(calendarId, data));
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