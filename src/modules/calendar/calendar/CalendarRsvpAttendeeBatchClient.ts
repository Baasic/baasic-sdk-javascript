/* globals module */
/**
 * @module calendarRsvpAttendeeBatchClient
 * @description  CalendarRsvpAttendeeBatchClient provides an easy way to consume CalendarRsvpAttendeeBatch REST API end-points. In order to obtain needed routes `calendarRsvpAttendeeBatchClient` uses `calendarRsvpAttendeeBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarRsvpAttendeeBatchRoute
} from '../';
import { ICalendarEventAttendee } from '../contracts';

@injectable()
export class CalendarRsvpAttendeeBatchClient {

    get routeDefinition(): CalendarRsvpAttendeeBatchRoute {
        return this.calendarRsvpAttendeeBatchRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarRsvpAttendeeBatchRoute) protected calendarRsvpAttendeeBatchRoute: CalendarRsvpAttendeeBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    
    /**
     * Returns a promise that is resolved once the create CalendarEvenAttendees action has been performed; this action creates new CalendarEventAttendee resources.
     * @method
     * @param data CalendarEventAttendee objects that need to be inserted into the system.
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @returns A promise that is resolved once the create CalendarEventAttendees action has been performed.
     * @example calendarRsvpAttendeeBatchClient.create([{
     * 
                    //TODO: add example here

                }]).then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(calendarId: string, eventId: string, data: ICalendarEventAttendee[]): PromiseLike<IHttpResponse<ICalendarEventAttendee[]>> {
        return this.apiClient.post<ICalendarEventAttendee[]>(this.routeDefinition.create(calendarId, eventId), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventAttendees action has been performed; this action updates CalendarEventAttendee resources. 
     * @method
     * @param data CalendarEventAttendee objects used to update specified CalendarEventAttendee resources.
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @returns A promise that is resolved once the update CalendarEventAttendees action has been performed.
     * @example calendarEventAttendees are resources previously fetched using get action.
                       calendarRsvpAttendeeBatchClient.update(calendarId, eventId, calendarEventAttendees)
                           .then(function (data) {
                               // perform success action here
                           },
                            function (response, status, headers, config) {
                                // perform error handling here
                           });
    **/
    update(calendarId: string, eventId: string, data: ICalendarEventAttendee[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(calendarId, eventId), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove CalendarEventAttendee resources from the system if successfully completed.
     * @method
     * @param data CalendarEventAttendee Ids which uniquely identify CalendarEventAttendee resources to be deleted.
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventAttendeeIds are identifiers which uniquely identify CalendarEventAttendee resources.
                    calendarRsvpAttendeeBatchClient.remove(calendarId, eventId, calendarEventAttendeeIds)
                        .then(function (data) {
                            // perform success action here
                        },
                         function (response, status, headers, config) {
                             // perform error handling here
                        });
     **/
    remove(calendarId: string, eventId: string, data: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(calendarId, eventId), this.routeDefinition.deleteParams(data));
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