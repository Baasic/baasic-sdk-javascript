/* globals module */
/**
 * @module calendarEventStatusBatchClient
 * @description  CalendarEventStatusBatchClient provides an easy way to consume CalendarEventStatusBatch REST API end-points. In order to obtain needed routes `calendarEventStatusBatchClient` uses `calendarEventStatusBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventStatusBatchRoute
} from './';
import { ICalendarEventStatus } from './contracts';

@injectable()
export class CalendarEventStatusBatchClient {

    get routeDefinition(): CalendarEventStatusBatchRoute {
        return this.calendarEventStatusBatchRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventStatusBatchRoute) protected calendarEventStatusBatchRoute: CalendarEventStatusBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the create CalendarEventStatuses action has been performed; this action creates new CalendarEventStatus resources.
     * @method
     * @param data CalendarEventStatus objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventStatuses action has been performed.
     * @example calendarEventStatusBatchClient.create([{
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
    create(data: ICalendarEventStatus[]): PromiseLike<IHttpResponse<ICalendarEventStatus[]>> {
        return this.apiClient.post<ICalendarEventStatus[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventStatuses action has been performed; this action updates CalendarEventStatuse resources. 
     * @method
     * @param data CalendarEventStatus objects used to update specified CalendarEventStatus resources.
     * @returns A promise that is resolved once the update CalendarEventStatuses action has been performed.
     * @example calendarEventStatuses are resources previously fetched using get action.
                       calendarEventStatusBatchClient.update(calendarEventStatuses)
                           .then(function (data) {
                               // perform success action here
                           },
                            function (response, status, headers, config) {
                                // perform error handling here
                           });
    **/
    update(data: ICalendarEventStatus[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove CalendarEventStatus resources from the system if successfully completed.
     * @method
     * @param data CalendarEventStatus Ids which uniquely identify CalendarEventStatus resources to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventStatusIds are identifiers which uniquely identify CalendarEventStatus resources.
                    calendarEventStatusBatchClient.remove(calendarEventStatusIds)
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