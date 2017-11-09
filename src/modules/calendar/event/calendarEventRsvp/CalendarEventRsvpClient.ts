/* globals module */
/**
 * @module calendarEventRsvpClient
 * @description  CalendarEventRsvp Client provides an easy way to consume CalendarEventRsvp REST API end-points. In order to obtain needed routes `calendarEventRsvpClient` uses `calendarEventRsvpRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventRsvpRoute
} from '../../';
import { ICalendarEvent, ICalendarEventRSVP, IGetCalendarEventRsvpOptions } from '../../contracts';

@injectable()
export class CalendarEventRsvpClient {

    get routeDefinition(): CalendarEventRsvpRoute {
        return this.calendarEventRsvpRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventRsvpRoute) protected calendarEventRsvpRoute: CalendarEventRsvpRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of CalendarEventRsvp resources matching the given criteria.
     * @method
     * @param options Query resource GetCalendarEventRsvpOptions object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarEventRsvpClient.find({
                    pageNumber: 1,
                    pageSize: 10,
                    orderBy: '<field>',
                    orderDirection: '<asc|desc>',
                    search: '<search-phrase>',
                    ids: <identifiers>,
                    calendarIds: <calendar-ids>,
                    calendarNames: <calendar-names>,
                    invitationTypeIds: <invitation-type-ids>,
                    invitationOnly: <true|false>,
                    statudIds: <status-ids>
                    typeIds: <type-ids>,
                    from: <start-date>,
                    to: <end-date>,
                    registrationCloseFrom: <registration-from-date>,
                    registrationCloseTo: <registration-to.date>
                })
                .then(function (collection) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    find(options?: IGetCalendarEventRsvpOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendarEventRSVP>>> {
        return this.apiClient.get<IQueryModel<ICalendarEventRSVP>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEventRsvp resource.
     * @method
     * @param id CalendarEventRsvp id which uniquely identifies CalendarEventRsvp resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarEventRsvpClient.get(id)
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEventRSVP>> {
        return this.apiClient.get<ICalendarEventRSVP>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create CalendarEventRsvp action has been performed. This action creates a new CalendarEventRsvp resource.
     * @method
     * @param data A CalendarEventRsvp object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventRsvp action has been performed.
     * @example calendarEventRsvpClient.create({
                    InvitationOnly: <true|false>,
                    InvitationType: <calendar-rsvp-invitation-type>,
                    InvitationTypeId: '<invitation-type-id>',
                    Json: '<json>',
                    MaxSlots: <max-slots>,
                    MinSlots: <min-slots>,
                    RegistrationCloseDate: '<registration-close-date>',
                    TotalSlots: <total-slots>
                }.then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(data: ICalendarEventRSVP): PromiseLike<IHttpResponse<ICalendarEventRSVP>> {
        return this.apiClient.post<ICalendarEventRSVP>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventRsvp action has been performed. This action updates a CalendarEventRsvp resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventRsvpRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventRsvp);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data A CalendarEventRsvp object used to update specified CalendarEventRsvp resource.
     * @returns A promise that is resolved once the update CalendarEventRsvp action has been performed.
     * @example calendarEventRsvp is a resource previously fetched using get action.
                    calendarEventRsvp.MinSlots = '<min-slots>';
                    calendarEventRsvpClient.update(calendarEventRsvp)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
    **/
    update(data: ICalendarEventRSVP): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a CalendarEventRsvp resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventRsvpRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventRsvp);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An calendarEventRsvp object used to delete specified CalendarEventRsvp resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventRsvp is a resource previously fetched using get action.
                    calendarEventRsvpClient.remove(calendarEventRsvp)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    remove(data: ICalendarEventRSVP): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all CalendarEventRsvp resources for the specified CalendarEvent from the system if succesfully completed.
     * @method
     * @param data A CalendarEvent object that will have it's CalendarEventRsvps purged.
     * @example     calendarEventRsvpClient.purgeForEvent(calendarEvent)
     *                  .then(function (data) {
     *                      // perform success action here
     *                  },
     *                  function (response, status, headers, config) {
     *                      // perform error handling here
     *                  })
     */
    purgeForEvent(data: ICalendarEvent): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purgeForEvent(data));
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