/* globals module */
/**
 * @module calendarEventStatusClient
 * @description  CalendarEventStatusClient provides an easy way to consume CalendarEventStatus REST API end-points. In order to obtain needed routes `calendarEventStatusClient` uses `calendarEventStatusRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    CalendarEventStatusBatchClient,
    TYPES as calendarTypes,
    CalendarEventStatusRoute
} from '../../';
import { ICalendarEventStatus, IGetCalendarOptions } from '../../contracts';

@injectable()
export class CalendarEventStatusClient {

    get routeDefinition(): CalendarEventStatusRoute {
        return this.calendarEventStatusRoute;
    }

    get batch(): CalendarEventStatusBatchClient {
        return this.calendarEventStatusBatchClient;
    }

    constructor(
        @inject(calendarTypes.CalendarEventStatusBatchClient) protected calendarEventStatusBatchClient: CalendarEventStatusBatchClient,
        @inject(calendarTypes.CalendarEventStatusRoute) protected calendarEventStatusRoute: CalendarEventStatusRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }


    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of CalendarEventStatus resources matching the given criteria.
     * @method
     * @param options Query resource GetCalendarOptions object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarEventStatusClient.find({
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
     */
    find(options?: IGetCalendarOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendarEventStatus>>> {
        return this.apiClient.get<IQueryModel<ICalendarEventStatus>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEventStatus resource.
     * @method
     * @param id CalendarEventStatus id which uniquely identifies CalendarEventStatus resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarEventStatusClient.get()
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEventStatus>> {
        return this.apiClient.get<ICalendarEventStatus>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create CalendarEventStatus action has been performed; this action creates a new CalendarEventStatus resource.
     * @method
     * @param data A CalendarEventStatus object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventStatus action has been performed.
     * @example calendarEventStatusClient.create({
                    abrv: '<abrv>',
                    json: '<json>',
                    name: '<name>'
                })
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    create(data: ICalendarEventStatus): PromiseLike<IHttpResponse<ICalendarEventStatus>> {
        return this.apiClient.post<ICalendarEventStatus>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventStatus action has been performed. This action updates a CalendarEventStatus resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventStatus);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data A CalendarEventStatus object used to update specified CalendarEventStatus resource.
     * @returns A promise that is resolved once the update CalendarEventStatus action has been performed.
     * @example calendarEventStatus is a resource previously fetched using get action.
                calendarEventStatus.name = '<name>';
                calendarEventStatusClient.update(calendarEventStatus)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    update(data: ICalendarEventStatus): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a CalendarEventStatus resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventStatus);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An calendarEventStatus object used to delete specified CalendarEventStatus resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventStatus is a resource previously fetched using get action.
                calendarEventStatusClient.remove(calendarEventType)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    remove(data: ICalendarEventStatus): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all CalendarEventStatus resources from the system if succesfully completed.
     * @method
     * @returns A promise that is resolved once the purge action has been performed.
     * @example calendarEventStatusClient.purge()
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