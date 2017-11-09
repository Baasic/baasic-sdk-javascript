/* globals module */
/**
 * @module calendarEventTypeClient
 * @description  CalendarEventType Client provides an easy way to consume CalendarEventType REST API end-points. In order to obtain needed routes `calendarEventTypeClient` uses `calendarEventTypeRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventTypeRoute
} from '../../';
import { ICalendarEventType, IGetCalendarOptions } from '../../contracts';

@injectable()
export class CalendarEventTypeClient {

    get routeDefinition(): CalendarEventTypeRoute {
        return this.calendarEventTypeRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventTypeRoute) protected calendarEventTypeRoute: CalendarEventTypeRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of CalendarEventType resources matching the given criteria.
     * @method
     * @param options Query resource GetCalendarOptions object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarEventTypeClient.find({
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
    find(options?: IGetCalendarOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendarEventType>>> {
        return this.apiClient.get<IQueryModel<ICalendarEventType>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEventType resource.
     * @method
     * @param id CalendarEventType id which uniquely identifies CalendarEventType resource that needs to be retrieved.
     * @param options Query resource GetRequestOptions object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarEventTypeClient.get(id)
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEventType>> {
        return this.apiClient.get<ICalendarEventType>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create CalendarEventType action has been performed. This action creates a new CalendarEventType resource.
     * @method
     * @param data A CalendarEventType object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventType action has been performed.
     * @example calendarEventTypeClient.create({
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
    create(data: ICalendarEventType): PromiseLike<IHttpResponse<ICalendarEventType>> {
        return this.apiClient.post<ICalendarEventType>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventType action has been performed. This action updates a CalendarEventType resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventType);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data A CalendarEventType object used to update specified CalendarEventType resource.
     * @returns A promise that is resolved once the update CalendarEventType action has been performed.
     * @example calendarEventType is a resource previously fetched using get action.
                    calendarEventType.name = '<name>';
                    calendarEventTypeClient.update(calendarEventType)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
    **/
    update(data: ICalendarEventType): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a CalendarEventType resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventType);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An calendarEventType object used to delete specified CalendarEventType resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventType is a resource previously fetched using get action.
                    calendarEventTypeClient.remove(calendarEventType)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    remove(data: ICalendarEventType): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all CalendarEventType resources from the system if succesfully completed.
     * @method
     * @returns A promise that is resolved once the purge action has been performed.
     * @example     calendarEventTypeClient.purge()
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