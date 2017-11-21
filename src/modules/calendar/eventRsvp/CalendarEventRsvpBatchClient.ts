/* globals module */
/**
 * @module calendarEventRsvpBatchClient
 * @description  CalendarEventRsvpBatchClient provides an easy way to consume CalendarEventRsvpBatch REST API end-points. In order to obtain needed routes `calendarEventRsvpBatchClient` uses `calendarEventRsvpBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventRsvpBatchRoute
} from '../';
import { ICalendarEventRsvp } from '../contracts';

@injectable()
export class CalendarEventRsvpBatchClient {

    get routeDefinition(): CalendarEventRsvpBatchRoute {
        return this.calendarEventRsvpBatchRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventRsvpBatchRoute) protected calendarEventRsvpBatchRoute: CalendarEventRsvpBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the create CalendarEventRsvps action has been performed; this action creates new CalendarEventRsvp resources.
     * @method
     * @param data CalendarEventRsvp objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventRsvps action has been performed.
     * @example calendarEventRsvpBatchClient.create([{
                    InvitationOnly: <true|false>,
                    InvitationType: <invitation-type>,
                    InvitationTypeId: '<id>',
                    Json: '<json>',
                    MaxSlots: 50,
                    MinSlots: 10,
                    RegistrationCloseDate?: '<close-date>',
                    TotalSlots: 65,
                }]).then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(data: ICalendarEventRsvp[]): PromiseLike<IHttpResponse<ICalendarEventRsvp[]>> {
        return this.apiClient.post<ICalendarEventRsvp[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventRsvps action has been performed; this action updates CalendarEventRsvp resources. 
     * @method
     * @param data CalendarEventRsvp objects used to update specified CalendarEventRsvp resources.
     * @returns A promise that is resolved once the update CalendarEventRsvps action has been performed.
     * @example calendarEventRsvps are resources previously fetched using get action.
                       calendarEventRsvpBatchClient.update(calendarEventRsvps)
                           .then(function (data) {
                               // perform success action here
                           },
                            function (response, status, headers, config) {
                                // perform error handling here
                           });
    **/
    update(data: ICalendarEventRsvp[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove CalendarEventRsvp resources from the system if successfully completed.
     * @method
     * @param data CalendarEventRsvp Ids which uniquely identify CalendarEventRsvp resources to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventRsvpIds are identifiers which uniquely identify CalendarEventRsvp resources.
                    calendarEventRsvpBatchClient.remove(calendarEventRsvpIds)
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