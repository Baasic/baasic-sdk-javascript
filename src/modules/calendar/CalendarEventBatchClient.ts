/* globals module */
/**
 * @module calendarEventBatchClient
 * @description  CalendarEventBatchClient provides an easy way to consume CalendarEventBatch REST API end-points. In order to obtain needed routes `calendarEventBatchClient` uses `calendarEventBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventBatchRoute
} from './';
import { ICalendarEvent } from './contracts';

@injectable()
export class CalendarEventBatchClient {

    get routeDefinition(): CalendarEventBatchRoute {
        return this.calendarEventBatchRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventBatchRoute) protected calendarEventBatchRoute: CalendarEventBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the create CalendarEvents action has been performed; this action creates new CalendarEvent resources.
     * @method
     * @param data CalendarEvent objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEvents action has been performed.
     * @example calendarEventBatchClient.create([{
                    abrv : '<abrv>',
                    json : '<json>',
                    name: '<name>'
                }]).then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(data: ICalendarEvent[]): PromiseLike<IHttpResponse<ICalendarEvent[]>> {
        return this.apiClient.post<ICalendarEvent[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEvents action has been performed; this action updates CalendarEvent resources. 
     * @method
     * @param data CalendarEvent objects used to update specified CalendarEvent resources.
     * @returns A promise that is resolved once the update CalendarEvents action has been performed.
     * @example calendarEvents are resources previously fetched using get action.
                       calendarEventBatchClient.update(calendarEvents)
                           .then(function (data) {
                               // perform success action here
                           },
                            function (response, status, headers, config) {
                                // perform error handling here
                           });
    **/
    update(data: ICalendarEvent[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove CalendarEvent resources from the system if successfully completed.
     * @method
     * @param data CalendarEvent Ids which uniquely identify CalendarEvent resources to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventIds are identifiers which uniquely identify CalendarEvent resources.
                    calendarEventBatchClient.remove(calendarEventIds)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    remove(data: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(), this.routeDefinition.deleteParams(data));
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