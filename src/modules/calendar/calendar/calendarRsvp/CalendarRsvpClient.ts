/* globals module */
/**
 * @module calendarRsvpClient
 * @description  CalendarRsvpClient provides an easy way to consume CalendarRsvp REST API end-points. In order to obtain needed routes `calendarRsvpClient` uses `calendarRsvpRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../../httpApi';
import {
    CalendarRsvpBatchClient,
    TYPES as calendarTypes,
    CalendarRsvpRoute
} from '../../';
import { ICalendar, ICalendarEventRsvp, IGetCalendarRsvpOptions, ICalendarEvent } from '../../contracts';

@injectable()
export class CalendarRsvpClient {

    get routeDefinition(): CalendarRsvpRoute {
        return this.calendarRsvpRoute;
    }

    get batch(): CalendarRsvpBatchClient {
        return this.calendarRsvpBatchClient;
    }

    constructor(
        @inject(calendarTypes.CalendarRsvpBatchClient) protected calendarRsvpBatchClient: CalendarRsvpBatchClient,
        @inject(calendarTypes.CalendarRsvpRoute) protected calendarRsvpRoute: CalendarRsvpRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of CalendarEventRsvp resources matching the given criteria.
     * @method
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @param options Query resource GetCalendarOptions object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarRsvpClient.find(calendarId, {
     *              pageNumber: 1,
                    pageSize: 10,
                    orderBy: '<field>',
                    orderDirection: '<asc|desc>',
                    search: '<search-phrase>',
                    ids: '<ids>',
                    InvitationTypeIds: '<invitation-type-ids>',
                    InvitationOnly: <true|false>,
                    statusIds: '<status-ids>',
                    from: '<from-date>',
                    to: '<to-date>',
                    registrationCloseFrom: '<registration-start-date>',
                    registrationCloseTo: '<registration-end-date>'
                })
                .then(function (collection) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    find(calendarId: string, options?: IGetCalendarRsvpOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendarEventRsvp>>> {
        return this.apiClient.get<IQueryModel<ICalendarEventRsvp>>(this.routeDefinition.find(calendarId, options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEventRsvp resource.
     * @method
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @param id CalendarEventRsvp id which uniquely identifies CalendarEventRsvp resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarRsvpClient.get()
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    get(calendarId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEventRsvp>> {
        return this.apiClient.get<ICalendarEventRsvp>(this.routeDefinition.get(calendarId, id, options));
    }

    //link
    /**
     * Returns a promise that is resolved once the link CalendarEventRsvp action has been performed; this action links the CalendarEventRsvp to the calendarEvent resource.
     * @method
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @param data A CalendarEventRsvp object that needs to be inserted into the system.
     * @returns A promise that is resolved once the link CalendarEventRsvp action has been performed.
     * @example calendarRsvpClient.link(calendarId, {
                    InvitationOnly: <true|false>,
                    InvitationType: <calendar-rsvp-invitation-type>,
                    InvitationTypeId: '<invitation-type-id>',
                    Json: '<json>',
                    MaxSlots: <max-slots>,
                    MinSlots: <min-slots>,
                    RegistrationCloseDate: '<registration-close-date>',
                    TotalSlots: <total-slots>
                }).then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    link(calendarId: string, data: ICalendarEventRsvp): PromiseLike<IHttpResponse<ICalendarEventRsvp>> {
        return this.apiClient.post<ICalendarEventRsvp>(this.routeDefinition.link(calendarId, data), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventRsvp action has been performed; this action updates a CalendarEventRsvp resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarRsvpRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventRsvp);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @param data A CalendarEventrSVP object used to update specified CalendarEventRsvp resource.
     * @returns A promise that is resolved once the update CalendarEventRsvp action has been performed.
     * @example calendarEventRsvp is a resource previously fetched using get action.
                    calendarEventRsvp.name = '<name>';
                    calendarRsvpClient.update(calendarEventRsvp)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
    **/
    update(calendarId: string, data: ICalendarEventRsvp): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(calendarId, data), this.routeDefinition.updateParams(data));
    }

    //unlink
    /**
     * Returns a promise that is resolved once the unlink action has been performed. This action will unlink a CalendarEventRsvp from the CalendarEvent if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarRsvpRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventRsvp);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @param data An calendarEventRsvp object used to delete specified CalendarEventRsvp resource.
     * @returns A promise that is resolved once the unlink action has been performed.
     * @example calendarEventRsvp is a resource previously fetched using get action.
                    calendarRsvpClient.unlink(calendarId, calendarEventRsvp)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    unlink(calendarId: string, data: ICalendarEventRsvp): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.unlink(calendarId, data));
    }

    /**
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all CalendarEventRsvp resources from the system if succesfully completed.
     * @method
     * @param calendarId Calendar id which uniquely identifies Calendar resource.
     * @param data A CalendarEvent object that will have it's rsvp's purged
     * @returns A promise that is resolved once the purge action has been performed.
     * @example     calendarRsvpClient.purge()
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    purge(calendarId: string, data: ICalendarEvent): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge(calendarId, data));
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