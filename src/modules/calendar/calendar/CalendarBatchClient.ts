/* globals module */
/**
 * @module calendarBatchClient
 * @description  CalendarBatchClient provides an easy way to consume CalendarBatch REST API end-points. In order to obtain needed routes `calendarBatchClient` uses `calendarBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarBatchRoute
} from '../';
import { ICalendar } from '../contracts';

@injectable()
export class CalendarBatchClient {

    get routeDefinition(): CalendarBatchRoute {
        return this.calendarBatchRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarBatchRoute) protected calendarBatchRoute: CalendarBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    
    /**
     * Returns a promise that is resolved once the create Calendars action has been performed; this action creates new Calendar resources.
     * @method
     * @param data Calendar objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create Calendars action has been performed.
     * @example calendarBatchClient.create([{
                    abrv: '<abrv>',
                    description: '<description>',
                    json: '<json>',
                    name: '<name>',
                    owner: <user-info>,
                    ownerId: '<owner-id>'
                }]).then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(data: ICalendar[]): PromiseLike<IHttpResponse<ICalendar[]>> {
        return this.apiClient.post<ICalendar[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update Calendars action has been performed; this action updates Calendar resources. 
     * @method
     * @param data Calendar objects used to update specified Calendar resources.
     * @returns A promise that is resolved once the update Calendars action has been performed.
     * @example calendars are resources previously fetched using get action.
                       calendarBatchClient.update(calendars)
                           .then(function (data) {
                               // perform success action here
                           },
                            function (response, status, headers, config) {
                                // perform error handling here
                           });
    **/
    update(data: ICalendar[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove Calendar resources from the system if successfully completed.
     * @method
     * @param data Calendar Ids which uniquely identify Calendar resources to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarIds are identifiers which uniquely identify Calendar resources.
                    calendarBatchClient.remove(calendarIds)
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