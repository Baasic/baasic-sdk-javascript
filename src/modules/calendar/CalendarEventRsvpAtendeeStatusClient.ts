/* globals module */
/**
 * @module calendarEventRsvpAtendeeStatusClient
 * @description  CalendarEventRsvpAtendeeStatus Client provides an easy way to consume CalendarEventRsvpAtendeeStatus REST API end-points. In order to obtain needed routes `calendarEventRsvpAtendeeStatusClient` uses `calendarEventRsvpAtendeeStatusRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventRsvpAtendeeStatusRoute
} from './';
import { ICalendarEventRSVPAtendeeStatus, ICalendarLookupOptions } from './contracts';

@injectable()
export class CalendarEventRsvpAtendeeStatusClient {

    get routeDefinition(): CalendarEventRsvpAtendeeStatusRoute {
        return this.calendarEventRsvpAtendeeStatusRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventRsvpAtendeeStatusRoute) protected calendarEventRsvpAtendeeStatusRoute: CalendarEventRsvpAtendeeStatusRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of CalendarEventRsvpAtendeeStatus resources matching the given criteria.
     * @method
     * @param options Query resource CalendarLookupOptions object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarEventRsvpAtendeeStatusClient.find({
                    pageNumber : 1,
                    pageSize : 10,
                    orderBy : '<field>',
                    orderDirection : '<asc|desc>',
                    search : '<search-phrase>',
                    ids : <identifiers>,
                    from : <start-date>,
                    to : <end-date>
                })
                .then(function (collection) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    find(options?: ICalendarLookupOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendarEventRSVPAtendeeStatus>>> {
        return this.apiClient.get<IQueryModel<ICalendarEventRSVPAtendeeStatus>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEventRsvpAtendeeStatus resource.
     * @method
     * @param id CalendarEventRsvpAtendeeStatus id which uniquely identifies CalendarEventRsvpAtendeeStatus resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarEventRsvpAtendeeStatusClient.get()
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEventRSVPAtendeeStatus>> {
        return this.apiClient.get<ICalendarEventRSVPAtendeeStatus>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create CalendarEventRsvpAtendeeStatus action has been performed; this action creates a new CalendarEventRsvpAtendeeStatus resource.
     * @method
     * @param data A CalendarEventRsvpAtendeeStatus object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventRsvpAtendeeStatus action has been performed.
     * @example calendarEventRsvpAtendeeStatusClient.create({
                    abrv : '<abrv>',
                    json : '<json>',
                    name: '<name>'
                }.then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(data: ICalendarEventRSVPAtendeeStatus): PromiseLike<IHttpResponse<ICalendarEventRSVPAtendeeStatus>> {
        return this.apiClient.post<ICalendarEventRSVPAtendeeStatus>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventRsvpAtendeeStatus action has been performed; this action updates a CalendarEventRsvpAtendeeStatus resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventRsvpAtendeeStatusRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventRsvpAtendeeStatus);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data A CalendarEventRsvpAtendeeStatus object used to update specified CalendarEventRsvpAtendeeStatus resource.
     * @returns A promise that is resolved once the update CalendarEventRsvpAtendeeStatus action has been performed.
     * @example calendarEventRsvpAtendeeStatus is a resource previously fetched using get action.
                    calendarEventRsvpAtendeeStatus.name = '<name>';
                    calendarEventRsvpAtendeeStatusClient.update(calendarEventRsvpAtendeeStatus)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
    **/
    update(data: ICalendarEventRSVPAtendeeStatus): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a CalendarEventRsvpAtendeeStatus resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventRsvpAtendeeStatusRsvpAtendeeStatusRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventRsvpAtendeeStatus);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An calendarEventRsvpAtendeeStatus object used to delete specified CalendarEventRsvpAtendeeStatus resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventRsvpAtendeeStatus is a resource previously fetched using get action.
                    calendarEventRsvpAtendeeStatusClient.remove(calendarEventRsvpAtendeeStatus)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    remove(data: ICalendarEventRSVPAtendeeStatus): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all CalendarEventRsvpAtendeeStatus resources from the system if succesfully completed.
     * @method
     * @returns A promise that is resolved once the purge action has been performed.
     * @example     calendarEventRsvpAtendeeStatusClient.purge()
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