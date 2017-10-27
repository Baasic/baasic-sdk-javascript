/* globals module */
/**
 * @module calendarEventRsvpAttendeeStatusBatchClient
 * @description  CalendarEventRsvpAttendeeStatusBatchClient provides an easy way to consume CalendarEventRsvpAttendeeStatusBatch REST API end-points. In order to obtain needed routes `calendarEventRsvpAttendeeStatusBatchClient` uses `calendarEventRsvpAttendeeStatusBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventRsvpAttendeeStatusBatchRoute
} from './';
import { ICalendarEventRSVPAttendeeStatus } from './contracts';

@injectable()
export class CalendarEventRsvpAttendeeStatusBatchClient {

    get routeDefinition(): CalendarEventRsvpAttendeeStatusBatchRoute {
        return this.calendarEventRsvpAttendeeStatusBatchRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventRsvpAttendeeStatusBatchRoute) protected calendarEventRsvpAttendeeStatusBatchRoute: CalendarEventRsvpAttendeeStatusBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the create CalendarEventRsvpAttendeeStatuses action has been performed. This action creates new CalendarEventRsvpAttendeeStatus resources.
     * @method
     * @param data CalendarEventRsvpAttendeeStatus objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventRsvpAttendeeStatuses action has been performed.
     * @example calendarEventRsvpAttendeeStatusBatchClient.create([{
                    abrv: '<abrv>',
                    json: '<json>',
                    name: '<name>'
                }]).then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(data: ICalendarEventRSVPAttendeeStatus[]): PromiseLike<IHttpResponse<ICalendarEventRSVPAttendeeStatus[]>> {
        return this.apiClient.post<ICalendarEventRSVPAttendeeStatus[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventRsvpAttendeeStatuses action has been performed. This action updates CalendarEventRsvpAttendeeStatus resources. 
     * @method
     * @param data CalendarEventRsvpAttendeeStatus objects used to update specified CalendarEventRsvpAttendeeStatus resources.
     * @returns A promise that is resolved once the update CalendarEventRsvpAttendeeStatuses action has been performed.
     * @example calendarEventRsvpAttendeeStatuses are resources previously fetched using get action.
                       calendarEventRsvpAttendeeStatusBatchClient.update(calendarEventRsvpAttendeeStatuses)
                           .then(function (data) {
                               // perform success action here
                           },
                            function (response, status, headers, config) {
                                // perform error handling here
                           });
    **/
    update(data: ICalendarEventRSVPAttendeeStatus[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove CalendarEventRsvpAttendeeStatus resources from the system if successfully completed.
     * @method
     * @param data CalendarEventRsvpAttendeeStatus Ids which uniquely identify CalendarEventRsvpAttendeeStatus resources to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventRsvpAttendeeStatusIds are identifiers which uniquely identify CalendarEventRsvpAttendeeStatus resources.
                    calendarEventRsvpAttendeeStatusBatchClient.remove(calendarEventRsvpAttendeeStatusIds)
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