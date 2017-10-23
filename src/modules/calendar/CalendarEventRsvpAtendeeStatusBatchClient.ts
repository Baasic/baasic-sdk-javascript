/* globals module */
/**
 * @module calendarEventRsvpAtendeeStatusBatchClient
 * @description  CalendarEventRsvpAtendeeStatusBatchClient provides an easy way to consume CalendarEventRsvpAtendeeStatusBatch REST API end-points. In order to obtain needed routes `calendarEventRsvpAtendeeStatusBatchClient` uses `calendarEventRsvpAtendeeStatusBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventRsvpAtendeeStatusBatchRoute
} from './';
import { ICalendarEventRSVPAtendeeStatus } from './contracts';

@injectable()
export class CalendarEventRsvpAtendeeStatusBatchClient {

    get routeDefinition(): CalendarEventRsvpAtendeeStatusBatchRoute {
        return this.calendarEventRsvpAtendeeStatusBatchRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventRsvpAtendeeStatusBatchRoute) protected calendarEventRsvpAtendeeStatusBatchRoute: CalendarEventRsvpAtendeeStatusBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the create CalendarEventRsvpAtendeeStatuses action has been performed; this action creates new CalendarEventRsvpAtendeeStatus resources.
     * @method
     * @param data CalendarEventRsvpAtendeeStatus objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventRsvpAtendeeStatuses action has been performed.
     * @example calendarEventRsvpAtendeeStatusBatchClient.create([{
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
    create(data: ICalendarEventRSVPAtendeeStatus[]): PromiseLike<IHttpResponse<ICalendarEventRSVPAtendeeStatus[]>> {
        return this.apiClient.post<ICalendarEventRSVPAtendeeStatus[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventRsvpAtendeeStatuses action has been performed; this action updates CalendarEventRsvpAtendeeStatus resources. 
     * @method
     * @param data CalendarEventRsvpAtendeeStatus objects used to update specified CalendarEventRsvpAtendeeStatus resources.
     * @returns A promise that is resolved once the update CalendarEventRsvpAtendeeStatuses action has been performed.
     * @example calendarEventRsvpAtendeeStatuses are resources previously fetched using get action.
                       calendarEventRsvpAtendeeStatusBatchClient.update(calendarEventRsvpAtendeeStatuses)
                           .then(function (data) {
                               // perform success action here
                           },
                            function (response, status, headers, config) {
                                // perform error handling here
                           });
    **/
    update(data: ICalendarEventRSVPAtendeeStatus[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove CalendarEventRsvpAtendeeStatus resources from the system if successfully completed.
     * @method
     * @param data CalendarEventRsvpAtendeeStatus Ids which uniquely identify CalendarEventRsvpAtendeeStatus resources to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventRsvpAtendeeStatusIds are identifiers which uniquely identify CalendarEventRsvpAtendeeStatus resources.
                    calendarEventRsvpAtendeeStatusBatchClient.remove(calendarEventRsvpAtendeeStatusIds)
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