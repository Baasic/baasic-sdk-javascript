/* globals module */
/**
 * @module calendarEventRsvpInvitationTypeBatchClient
 * @description  CalendarEventRsvpInvitationTypeBatchClient provides an easy way to consume CalendarEventRsvpInvitationTypeBatch REST API end-points. In order to obtain needed routes `calendarEventRsvpInvitationTypeBatchClient` uses `calendarEventRsvpInvitationTypeBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from 'httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventRsvpInvitationTypeBatchRoute
} from '../../';
import { ICalendarEventRsvpAttendeeInvitationType } from '../../contracts';

@injectable()
export class CalendarEventRsvpInvitationTypeBatchClient {

    get routeDefinition(): CalendarEventRsvpInvitationTypeBatchRoute {
        return this.calendarEventRsvpInvitationTypeBatchRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventRsvpInvitationTypeBatchRoute) protected calendarEventRsvpInvitationTypeBatchRoute: CalendarEventRsvpInvitationTypeBatchRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the create CalendarEventRsvpAttendeeInvitationTypes action has been performed; this action creates new CalendarEventRsvpAttendeeInvitationType resources.
     * @method
     * @param data CalendarEventRsvpAttendeeInvitationType objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventRsvpAttendeeInvitationTypes action has been performed.
     * @example calendarEventRsvpInvitationTypeBatchClient.create([{
                    abrv: '<abrv>',
                    json: '<json>',
                    name: '<name>'
                }])
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    create(data: ICalendarEventRsvpAttendeeInvitationType[]): PromiseLike<IHttpResponse<ICalendarEventRsvpAttendeeInvitationType[]>> {
        return this.apiClient.post<ICalendarEventRsvpAttendeeInvitationType[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventRsvpAttendeeInvitationTypes action has been performed; this action updates CalendarEventRsvpAttendeeInvitationType resources. 
     * @method
     * @param data CalendarEventRsvpAttendeeInvitationType objects used to update specified CalendarEventRsvpAttendeeInvitationType resources.
     * @returns A promise that is resolved once the update CalendarEventRsvpAttendeeInvitationTypes action has been performed.
     * @example calendarEventRsvpAttendeeInvitationTypes are resources previously fetched using get action.
                calendarEventRsvpInvitationTypeBatchClient.update(calendarEventRsvpAttendeeInvitationTypes)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    update(data: ICalendarEventRsvpAttendeeInvitationType[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove CalendarEventRsvpInvitationType resources from the system if successfully completed.
     * @method
     * @param data CalendarEventRsvpAttendeeInvitationType Ids which uniquely identify CalendarEventRsvpAttendeeInvitationType resources to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventRsvpAttendeeInvitationTypeIds are identifiers which uniquely identify CalendarEventRsvpAttendeeInvitationType resources.
                calendarEventRsvpInvitationTypeBatchClient.remove(calendarEventRsvpAttendeeInvitationTypeIds)
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