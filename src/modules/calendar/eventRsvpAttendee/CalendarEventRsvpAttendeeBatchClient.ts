/* globals module */
/**
 * @module calendarEventRsvpAttendeeBatchClient
 * @description  CalendarEventRsvpAttendeeBatchClient provides an easy way to consume CalendarEventRsvpAttendeeBatch REST API end-points. In order to obtain needed routes `calendarEventRsvpAttendeeBatchClient` uses `calendarEventRsvpAttendeeBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventRsvpAttendeeBatchRoute
} from '../';
import { ICalendarEventAttendee } from '../contracts';

@injectable()
export class CalendarEventRsvpAttendeeBatchClient {

    get routeDefinition(): CalendarEventRsvpAttendeeBatchRoute {
        return this.calendarEventRsvpAttendeeBatchRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventRsvpAttendeeBatchRoute) protected calendarEventRsvpAttendeeBatchRoute: CalendarEventRsvpAttendeeBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the create CalendarEvenAttendees action has been performed; this action creates new CalendarEventAttendee resources.
     * @method
     * @param data CalendarEventAttendee objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventAttendees action has been performed.
     * @example calendarEventRsvpAttendeeBatchClient.create([{
                    AttendeeStatus: <calendar-evetn-attendee-status>,
                    AttendeeStatusId '<attendee-status-id>',
                    DateCreated: '<date-created>',
                    DateUpdated: '<date-updated>',
                    Email: '<email>',
                    EventID: '<calendar-event-id>',
                    FullName: '<full-name>',
                    Id: '<id>',
                    InvitationType: <calendar-event-invitation-type>,
                    InvitationTypeId: '<invitation-type-id>',
                    Json: '<json>',
                    Slots: <slots>,
                    SlotsRequested: <slots-requested>,
                    User: <user-profile>,
                    UserID: '<user-id>'
                }])
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    create(data: ICalendarEventAttendee[]): PromiseLike<IHttpResponse<ICalendarEventAttendee[]>> {
        return this.apiClient.post<ICalendarEventAttendee[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventAttendees action has been performed; this action updates CalendarEventAttendee resources. 
     * @method
     * @param data CalendarEventAttendee objects used to update specified CalendarEventAttendee resources.
     * @returns A promise that is resolved once the update CalendarEventAttendees action has been performed.
     * @example calendarEventAttendees are resources previously fetched using get action.
                calendarEventRsvpAttendeeBatchClient.update(calendarEventAttendees)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    update(data: ICalendarEventAttendee[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove CalendarEventAttendee resources from the system if successfully completed.
     * @method
     * @param data CalendarEventAttendee Ids which uniquely identify CalendarEventAttendee resources to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventAttendeeIds are identifiers which uniquely identify CalendarEventAttendee resources.
                calendarEventRsvpAttendeeBatchClient.remove(calendarEventAttendeeIds)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    remove(data: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(), undefined, this.routeDefinition.deleteParams(data));
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