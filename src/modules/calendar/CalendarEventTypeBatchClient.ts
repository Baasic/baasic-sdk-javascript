/* globals module */
/**
 * @module calendarEventTypeBatchClient
 * @description  CalendarEventTypeBatchClient provides an easy way to consume CalendarEventTypeBatch REST API end-points. In order to obtain needed routes `calendarEventTypeBatchClient` uses `calendarEventTypeBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventTypeBatchRoute
} from './';
import { ICalendarEventType } from './contracts';

@injectable()
export class CalendarEventTypeBatchClient {

    get routeDefinition(): CalendarEventTypeBatchRoute {
        return this.calendarEventTypeBatchRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventTypeBatchRoute) protected calendarEventTypeBatchRoute: CalendarEventTypeBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the create CalendarEventTypes action has been performed; this action creates new CalendarEventType resources.
     * @method
     * @param data CalendarEventType objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventTypes action has been performed.
     * @example calendarEventTypeBatchClient.create([{
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
    create(data: ICalendarEventType[]): PromiseLike<IHttpResponse<ICalendarEventType[]>> {
        return this.apiClient.post<ICalendarEventType[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventTypes action has been performed; this action updates CalendarEventType resources. 
     * @method
     * @param data CalendarEventType objects used to update specified CalendarEventType resources.
     * @returns A promise that is resolved once the update Calendar Event Types action has been performed.
     * @example calendarEventTypes are resources previously fetched using get action.
                       calendarEventTypeBatchClient.update(calendarEventTypes)
                           .then(function (data) {
                               // perform success action here
                           },
                            function (response, status, headers, config) {
                                // perform error handling here
                           });
    **/
    update(data: ICalendarEventType): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove CalendarEventType resources from the system if successfully completed.
     * @method
     * @param data CalendarEventTypeIds which uniquely identify CalendarEventType resources to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventTypeIds are identifiers which uniquely identify CalendarEventType resources.
                    calendarEventTypeBatchClient.remove(calendarEventTypeIds)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    remove(data: ICalendarEventType): PromiseLike<IHttpResponse<void>> {
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