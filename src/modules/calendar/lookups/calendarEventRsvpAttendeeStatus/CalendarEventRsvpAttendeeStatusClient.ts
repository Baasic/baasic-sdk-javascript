/* globals module */
/**
 * @module calendarEventRsvpAttendeeStatusClient
 * @description  CalendarEventRsvpAttendeeStatus Client provides an easy way to consume CalendarEventRsvpAttendeeStatus REST API end-points. In order to obtain needed routes `calendarEventRsvpAttendeeStatusClient` uses `calendarEventRsvpAttendeeStatusRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventRsvpAttendeeStatusRoute
} from '../../';
import { ICalendarEventRsvpAttendeeStatus, IGetCalendarOptions } from '../../contracts';

@injectable()
export class CalendarEventRsvpAttendeeStatusClient {

    get routeDefinition(): CalendarEventRsvpAttendeeStatusRoute {
        return this.calendarEventRsvpAttendeeStatusRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventRsvpAttendeeStatusRoute) protected calendarEventRsvpAttendeeStatusRoute: CalendarEventRsvpAttendeeStatusRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of CalendarEventRsvpAttendeeStatus resources matching the given criteria.
     * @method
     * @param options Query resource GetCalendarOptions object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarEventRsvpAttendeeStatusClient.find({
                    pageNumber: 1,
                    pageSize: 10,
                    orderBy: '<field>',
                    orderDirection: '<asc|desc>',
                    search: '<search-phrase>',
                    ids: <identifiers>,
                    from: <start-date>,
                    to: <end-date>
                })
                .then(function (collection) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    find(options?: IGetCalendarOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendarEventRsvpAttendeeStatus>>> {
        return this.apiClient.get<IQueryModel<ICalendarEventRsvpAttendeeStatus>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEventRsvpAttendeeStatus resource.
     * @method
     * @param id CalendarEventRsvpAttendeeStatus id which uniquely identifies CalendarEventRsvpAttendeeStatus resource that needs to be retrieved.
     * @param options Query resource GetRequestOptions object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarEventRsvpAttendeeStatusClient.get()
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEventRsvpAttendeeStatus>> {
        return this.apiClient.get<ICalendarEventRsvpAttendeeStatus>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create CalendarEventRsvpAttendeeStatus action has been performed. This action creates a new CalendarEventRsvpAttendeeStatus resource.
     * @method
     * @param data A CalendarEventRsvpAttendeeStatus object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventRsvpAttendeeStatus action has been performed.
     * @example calendarEventRsvpAttendeeStatusClient.create({
                    abrv: '<abrv>',
                    json: '<json>',
                    name: '<name>'
                }.then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(data: ICalendarEventRsvpAttendeeStatus): PromiseLike<IHttpResponse<ICalendarEventRsvpAttendeeStatus>> {
        return this.apiClient.post<ICalendarEventRsvpAttendeeStatus>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventRsvpAttendeeStatus action has been performed. This action updates a CalendarEventRsvpAttendeeStatus resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventRsvpAttendeeStatusRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventRsvpAttendeeStatus);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data A CalendarEventRsvpAttendeeStatus object used to update specified CalendarEventRsvpAttendeeStatus resource.
     * @returns A promise that is resolved once the update CalendarEventRsvpAttendeeStatus action has been performed.
     * @example calendarEventRsvpAttendeeStatus is a resource previously fetched using get action.
                    calendarEventRsvpAttendeeStatus.name = '<name>';
                    calendarEventRsvpAttendeeStatusClient.update(calendarEventRsvpAttendeeStatus)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
    **/
    update(data: ICalendarEventRsvpAttendeeStatus): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a CalendarEventRsvpAttendeeStatus resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventRsvpAttendeeStatusRsvpAttendeeStatusRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventRsvpAttendeeStatus);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An calendarEventRsvpAttendeeStatus object used to delete specified CalendarEventRsvpAttendeeStatus resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventRsvpAttendeeStatus is a resource previously fetched using get action.
                    calendarEventRsvpAttendeeStatusClient.remove(calendarEventRsvpAttendeeStatus)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    remove(data: ICalendarEventRsvpAttendeeStatus): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all CalendarEventRsvpAttendeeStatus resources from the system if succesfully completed.
     * @method
     * @returns A promise that is resolved once the purge action has been performed.
     * @example     calendarEventRsvpAttendeeStatusClient.purge()
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
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