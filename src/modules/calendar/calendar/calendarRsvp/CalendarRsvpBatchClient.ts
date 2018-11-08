/* globals module */
/**
 * @module calendarRsvpBatchClient
 * @description  CalendarRsvpBatchClient provides an easy way to consume CalendarRsvpBatch REST API end-points. In order to obtain needed routes `calendarRsvpBatchClient` uses `calendarRsvpBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarRsvpBatchRoute
} from '../../';
import { ICalendarEventRsvp, ICalendar } from '../../contracts';

@injectable()
export class CalendarRsvpBatchClient {

    get routeDefinition(): CalendarRsvpBatchRoute {
        return this.calendarRsvpBatchRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarRsvpBatchRoute) protected calendarRsvpBatchRoute: CalendarRsvpBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the link CalendarEventRsvps action has been performed; this action links CalendarEventRsvp resources to the specified calendar.
     * @method
     * @param data CalendarEventRsvp objects that need to be inserted into the system.
     * @param calendarId Calendar identifier which uniquely identifies calendar resource that will have its EventRsvp objects craeted
     * @returns A promise that is resolved once the link CalendarEventRsvps action has been performed.
     * @example calendarRsvpBatchClient.link( calendarId, [{
                    InvitationOnly: <true|false>,
                    InvitationType: <calendar-rsvp-invitation-type>,
                    InvitationTypeId: '<invitation-type-id>',
                    Json: '<json>',
                    MaxSlots: <max-slots>,
                    MinSlots: <min-slots>,
                    RegistrationCloseDate: '<registration-close-date>',
                    TotalSlots: <total-slots>
                }])
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    link(calendarId: string, data: ICalendarEventRsvp[]): PromiseLike<IHttpResponse<ICalendarEventRsvp[]>> {
        return this.apiClient.post<ICalendarEventRsvp[]>(this.routeDefinition.link(calendarId), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventRsvps action has been performed; this action updates CalendarEventRsvp resources. 
     * @method
     * @param data CalendarEventRsvp objects used to update specified CalendarEventRsvp resources.
     * @param calendarId Calendar identifier that uniquely identifies calendar resource that will have it's CalendarEventRsvp's updated.
     * @returns A promise that is resolved once the update CalendarEventRsvps action has been performed.
     * @example calendarEventRsvps are resources previously fetched using get action.
                calendarRsvpBatchClient.update(calendar, calendarEventRsvps)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    update(calendarId: string, data: ICalendarEventRsvp[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(calendarId), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the unlink action has been performed. This action will unlink CalendarEventRsvp resources from the specified calendar if successfully completed.
     * @method
     * @param data CalendarEventRsvp Ids which uniquely identify CalendarEventRsvp resources to be deleted.
     * @param calendarId Calendar identifier that uniquely identifies a calendar resource that will have it's calendarEventRsvp's deleted.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventRsvpIds are identifiers which uniquely identify CalendarEventRsvp resources.
                calendarRsvpBatchClient.unlink(calendar, calendarEventRsvpIds)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    unlink(calendarId: string, data: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.unlink(calendarId), undefined, this.routeDefinition.deleteParams(data));
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