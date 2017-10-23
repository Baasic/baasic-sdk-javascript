/* globals module */
/**
 * @module calendarEventRsvpInvitationTypeClient
 * @description  CalendarEventRsvpInvitationTypeClient provides an easy way to consume CalendarEventRsvpInvitationType REST API end-points. In order to obtain needed routes `calendarEventRsvpInvitationTypeClient` uses `calendarEventRsvpInvitationTypeRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventRsvpInvitationTypeRoute
} from './';
import { ICalendarEventRSVPInvitationType, IGetCalendarLookupOptions } from './contracts';

@injectable()
export class CalendarEventRsvpInvitationTypeClient {

    get routeDefinition(): CalendarEventRsvpInvitationTypeRoute {
        return this.calendarEventRsvpInvitationTypeRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventRsvpInvitationTypeRoute) protected calendarEventRsvpInvitationTypeRoute: CalendarEventRsvpInvitationTypeRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }


    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of CalendarEventRsvpInvitationType resources matching the given criteria.
     * @method
     * @param options Query resource GetCalendarLookupOptions object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarEventRsvpInvitationTypeClient.find({
                    pageNumber : 1,
                    pageSize : 10,
                    orderBy : '<field>',
                    orderDirection : '<asc|desc>',
                    search : '<search-phrase>',
                    ids : <identifiers>,
                    from : <start-date>,
                    to : <end-date>
                })
                .then(function (collection) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    find(options?: IGetCalendarLookupOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendarEventRSVPInvitationType>>> {
        return this.apiClient.get<IQueryModel<ICalendarEventRSVPInvitationType>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEventRsvpInvitationType resource.
     * @method
     * @param id CalendarEventRsvpInvitationType id which uniquely identifies CalendarEventRsvpInvitationType resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarEventRsvpInvitationTypeClient.get()
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEventRSVPInvitationType>> {
        return this.apiClient.get<ICalendarEventRSVPInvitationType>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create CalendarEventRsvpInvitationType action has been performed; this action creates a new CalendarEventRsvpInvitationType resource.
     * @method
     * @param data A CalendarEventRsvpInvitationType object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventRsvpInvitationType action has been performed.
     * @example calendarEventRsvpInvitationTypeClient.create({
                    abrv : '<abrv>',
                    json : '<json>',
                    name: '<name>'
                }.then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(data: ICalendarEventRSVPInvitationType): PromiseLike<IHttpResponse<ICalendarEventRSVPInvitationType>> {
        return this.apiClient.post<ICalendarEventRSVPInvitationType>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventRsvpInvitationType action has been performed; this action updates a CalendarEventRsvpInvitationType resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventRsvpInvitationTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventRsvpInvitationType);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data A CalendarEventRsvpInvitationType object used to update specified CalendarEventRsvpInvitationType resource.
     * @returns A promise that is resolved once the update CalendarEventRsvpInvitationType action has been performed.
     * @example calendarEventRsvpInvitationType is a resource previously fetched using get action.
                    calendarEventRsvpInvitationType.name = '<name>';
                    calendarEventRsvpInvitationTypeClient.update(calendarEventRsvpInvitationType)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
    **/
    update(data: ICalendarEventRSVPInvitationType): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a CalendarEventRsvpInvitationType resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventRsvpInvitationTyleRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventRsvpInvitationType);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An calendarEventRsvpInvitationType object used to delete specified CalendarEventRsvpInvitationType resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventRsvpInvitationType is a resource previously fetched using get action.
                    calendarEventRsvpInvitationType.remove(calendarEventRsvpInvitationType)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    remove(data: ICalendarEventRSVPInvitationType): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all CalendarEventRsvpInvitationType resources from the system if succesfully completed.
     * @method
     * @returns A promise that is resolved once the purge action has been performed.
     * @example     calendarEventRsvpInvitationTypeClient.purge()
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    purge(): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge());
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