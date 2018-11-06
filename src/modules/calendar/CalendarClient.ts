/* globals module */
/**
 * @module calendarClient
 * @description  Calendar Client provides an easy way to consume Calendar REST API end-points. In order to obtain needed routes `calendarClient` uses `calendarRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    CalendarEventClient,
    CalendarLookups,
    CalendarRsvpAttendeeClient,
    CalendarRsvpClient,
    CalendarEventsClient,
    CalendarBatchClient,
    TYPES as calendarTypes,
    CalendarRoute
} from './';
import { ICalendar, IGetCalendarOptions } from './contracts';

@injectable()
export class CalendarClient {

    get routeDefinition(): CalendarRoute {
        return this.calendarRoute;
    }

    get batch(): CalendarBatchClient {
        return this.calendarBatchClient;
    }

    get events(): CalendarEventsClient {
        return this.calendarEventsClient;
    }

    get eventRsvp(): CalendarRsvpClient {
        return this.calendarRsvpClient;
    }

    get eventAttendee(): CalendarRsvpAttendeeClient {
        return this.calendarRsvpAttendeeClient;
    }

    constructor(
        @inject(calendarTypes.CalendarRsvpAttendeeClient) protected calendarRsvpAttendeeClient: CalendarRsvpAttendeeClient,
        @inject(calendarTypes.CalendarRsvpClient) protected calendarRsvpClient: CalendarRsvpClient,
        @inject(calendarTypes.CalendarEventsClient) protected calendarEventsClient: CalendarEventsClient,
        @inject(calendarTypes.CalendarBatchClient) protected calendarBatchClient: CalendarBatchClient,
        @inject(calendarTypes.CalendarRoute) protected calendarRoute: CalendarRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of Calendar resources matching the given criteria.
     * @method
     * @param options Query resource GetCalendarOptions object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarClient.find({
                    pageNumber : 1,
                    pageSize : 10,
                    orderBy : '<field>',
                    orderDirection : '<asc|desc>',
                    search : '<search-phrase>',
                    ids : <identifiers>,
                    ownerIds: <identifiers>,
                    from : <start-date>,
                    to : <end-date>
                })
                .then(function (collection) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    find(options?: IGetCalendarOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendar>>> {
        return this.apiClient.get<IQueryModel<ICalendar>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the Calendar resource.
     * @method
     * @param id Calendar id which uniquely identifies Calendar resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarClient.get()
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendar>> {
        return this.apiClient.get<ICalendar>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create Calendar action has been performed; this action creates a new Calendar resource.
     * @method
     * @param data A Calendar object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create Calendar action has been performed.
     * @example calendarClient.create({
                    abrv: '<abrv>',
                    description: '<description>',
                    json: '<json>',
                    name: '<name>',
                    owner: <user-info>,
                    ownerId: '<owner-id>'
                })
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    create(data: ICalendar): PromiseLike<IHttpResponse<ICalendar>> {
        return this.apiClient.post<ICalendar>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update Calendar action has been performed. This action updates a Calendar resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendar);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data A Calendar object used to update specified Calendar resource.
     * @returns A promise that is resolved once the update Calendar action has been performed.
     * @example calendar is a resource previously fetched using get action.
                calendar.name = '<name>';
                calendarClient.update(calendar)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    update(data: ICalendar): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a Calendar resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendar);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An calendart object used to delete specified Calendar resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendar is a resource previously fetched using get action.
                calendarClient.remove(calendar)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    remove(data: ICalendar): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all Calendar resources from the system if succesfully completed.
     * @method
     * @returns A promise that is resolved once the purge action has been performed.
     * @example calendarClient.purge()
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    purge(): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge());
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