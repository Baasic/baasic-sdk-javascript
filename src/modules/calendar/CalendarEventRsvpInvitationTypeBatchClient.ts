/* globals module */
/**
 * @module calendarEventRsvpInvitationTypeBatchClient
 * @description  CalendarEventRsvpInvitationTypeBatchClient provides an easy way to consume CalendarEventRsvpInvitationTypeBatch REST API end-points. In order to obtain needed routes `calendarEventRsvpInvitationTypeBatchClient` uses `calendarEventRsvpInvitationTypeBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventRsvpInvitationTypeBatchRoute
} from './';
import { ICalendarEventRSVPInvitationType } from './contracts';

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
     * Returns a promise that is resolved once the create CalendarEventRsvpInvitationTypes action has been performed; this action creates new CalendarEventRsvpInvitationType resources.
     * @method
     * @param data CalendarEventRsvpInvitationType objects that need to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventRsvpInvitationTypes action has been performed.
     * @example calendarEventRsvpInvitationTypeBatchClient.create([{
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
    create(data: ICalendarEventRSVPInvitationType[]): PromiseLike<IHttpResponse<ICalendarEventRSVPInvitationType[]>> {
        return this.apiClient.post<ICalendarEventRSVPInvitationType[]>(this.routeDefinition.create(), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventRsvpInvitationTypes action has been performed; this action updates CalendarEventRsvpInvitationType resources. 
     * @method
     * @param data CalendarEventRsvpInvitationType objects used to update specified CalendarEventRsvpInvitationType resources.
     * @returns A promise that is resolved once the update CalendarEventRsvpInvitationTypes action has been performed.
     * @example calendarEventRsvpInvitationTypes are resources previously fetched using get action.
                       calendarEventRsvpInvitationTypeBatchClient.update(calendarEventRsvpInvitationTypes)
                           .then(function (data) {
                               // perform success action here
                           },
                            function (response, status, headers, config) {
                                // perform error handling here
                           });
    **/
    update(data: ICalendarEventRSVPInvitationType[]): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove CalendarEventRsvpInvitationType resources from the system if successfully completed.
     * @method
     * @param data CalendarEventRsvpInvitationType Ids which uniquely identify CalendarEventRsvpInvitationType resources to be deleted.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventRsvpInvitationTypeIds are identifiers which uniquely identify CalendarEventRsvpInvitationType resources.
                    calendarEventRsvpInvitationTypeBatchClient.remove(calendarEventRsvpInvitationTypeIds)
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