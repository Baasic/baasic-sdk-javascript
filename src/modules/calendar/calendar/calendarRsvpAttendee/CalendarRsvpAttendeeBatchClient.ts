/* globals module */
/**
 * @module calendarRsvpAttendeeBatchClient
 * @description  CalendarRsvpAttendeeBatchClient provides an easy way to consume CalendarRsvpAttendeeBatch REST API end-points. In order to obtain needed routes `calendarRsvpAttendeeBatchClient` uses `calendarRsvpAttendeeBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    TYPES as calendarTypes,
    CalendarRsvpAttendeeBatchRoute
} from '../../';
import { ICalendarEventAttendee } from '../../contracts';

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
     * Returns a promise that is resolved once the link CalendarEvenAttendees action has been performed; this action links new CalendarEventAttendee resources to the calendarEvent.
     * @method
     * @param data CalendarEventAttendee objects that need to be inserted into the system.
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @returns A promise that is resolved once the link CalendarEventAttendees action has been performed.
     * @example calendarRsvpAttendeeBatchClient.link(calendarId, eventId, [{
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
    link(calendarId: string, eventId: string, data: ICalendarEventAttendee[]): PromiseLike<IHttpResponse<ICalendarEventAttendee[]>> {
        return this.apiClient.post<ICalendarEventAttendee[]>(this.routeDefinition.link(calendarId, eventId), this.routeDefinition.createParams(data));
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
     */
    update(calendarId: string, eventId: string, data: ICalendarEventAttendee[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(calendarId, eventId), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the unlink action has been performed. This action will unlink CalendarEventAttendee resources from the specified calendarEvent if successfully completed.
     * @method
     * @param data CalendarEventAttendee Ids which uniquely identify CalendarEventAttendee resources to be deleted.
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @returns A promise that is resolved once the unlink action has been performed.
     * @example calendarEventAttendeeIds are identifiers which uniquely identify CalendarEventAttendee resources.
                calendarRsvpAttendeeBatchClient.unlink(calendarId, eventId, calendarEventAttendeeIds)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    unlink(calendarId: string, eventId: string, data: string[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.unlink(calendarId, eventId), this.routeDefinition.deleteParams(data));
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