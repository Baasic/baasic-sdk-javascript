/* globals module */
/**
 * @module calendarRsvpAttendeeClient
 * @description  CalendarRsvpAttendeeClient provides an easy way to consume CalendarRsvpAttendee REST API end-points. In order to obtain needed routes `calendarRsvpAttendeeClient` uses `calendarRsvpAttendeeRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarRsvpAttendeeRoute
} from '../';
import { ICalendar, ICalendarEventRSVP, IGetCalendarOptions, ICalendarEvent, IGetCalendarRsvpAttendeeOptions, ICalendarEventAttendee } from '../contracts';

@injectable()
export class CalendarRsvpAttendeeClient {

    get routeDefinition(): CalendarRsvpAttendeeRoute {
        return this.calendarRsvpAttendeeRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarRsvpAttendeeRoute) protected calendarRsvpAttendeeRoute: CalendarRsvpAttendeeRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of CalendarEventAttendee resources matching the given criteria.
     * @method
     * @param options Query resource GetCalendarLookupOptions object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarRsvpAttendeeClient.find({
                    
                    TODO example

                })
                .then(function (collection) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    find(options?: IGetCalendarRsvpAttendeeOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendarEventAttendee>>> {
        return this.apiClient.get<IQueryModel<ICalendarEventAttendee>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEventAttendee resource.
     * @method
      * @param id CalendarEventAttendee id which uniquely identifies CalendarEventAttendee resource that needs to be retrieved.
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param options Query resource GetRequestOptions object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarRsvpAttendeeClient.get()
                    .then(function (data) {
                        // perform success action here
                    },
                     function (response, status, headers, config) {
                         // perform error handling here
                    });
     **/
    get(calendarId, eventId, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEventAttendee>> {
        return this.apiClient.get<ICalendarEventAttendee>(this.routeDefinition.get(calendarId, eventId, id, options));
    }


    //TODO:
    getByEmailOrFullName(): PromiseLike<IHttpResponse<ICalendarEventAttendee>> {
        return this.apiClient.get<ICalendarEventAttendee>(this.routeDefinition.getByEmailOrFullName());
    }


    /**
     * Returns a promise that is resolved once the create CalendarEventAttendee action has been performed; this action creates a new CalendarEventAttendee resource.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param data A CalendarEventAttendee object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventAttendee action has been performed.
     * @example calendarRsvpAttendeeClient.create({
     * 
                    TODO: example

                }.then(function (data) {
                    // perform success action here
                },
                 function (response, status, headers, config) {
                     // perform error handling here
                });
     **/
    create(calendarId: string, data: ICalendarEventAttendee): PromiseLike<IHttpResponse<ICalendarEventAttendee>> {
        return this.apiClient.post<ICalendarEventAttendee>(this.routeDefinition.create(calendarId, data), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventAttendee action has been performed. This action updates a CalendarEventAttendee resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventAttendee);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data A CalendarEventAttendee object used to update specified CalendarEventAttendee resource.
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @returns A promise that is resolved once the update CalendarEventAttendee action has been performed.
     * @example calendarEventAttendee is a resource previously fetched using get action.
                    calendarEventAttendee.name = '<name>';
                    calendarRsvpAttendeeClient.update(calendarEventAttendee)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
    **/
    update(calendarId: string, data: ICalendarEventAttendee): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(calendarId, data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventAttendee Status action has been performed. This action updates a CalendarEventAttendee resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventAttendee);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data A CalendarEventAttendee object used to update specified CalendarEventAttendee resource.
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @returns A promise that is resolved once the update CalendarEventAttendee action has been performed.
     * @example calendarEventAttendee is a resource previously fetched using get action.
                    calendarEventAttendee.attendeeStatusId = '<statusId>';
                    calendarRsvpAttendeeClient.updateStatus(calendarEventAttendee)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
    **/
    updateStatus(calendarId: string, data: ICalendarEventAttendee): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.updateStatus(calendarId, data), this.routeDefinition.updateParams(data));
    }


    //TODO:
    updateStatusEmailOrName(data: ICalendarEventAttendee): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.updateStatusEmailOrName(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a CalendarEventAttendee resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventAttendee);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An calendarEventAttendee object used to delete specified CalendarEventAttendee resource.
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventAttendee is a resource previously fetched using get action.
                    calendarRsvpAttendeeClient.remove(calendarEventType)
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    remove(calendarId: string, data: ICalendarEventAttendee): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(calendarId, data));
    }

    /**
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all CalendarEventAttendee resources for the given event from the system if succesfully completed.
     * @method
     * @param event CalendarEvent resource that will have it's attendees purged.
     * @returns A promise that is resolved once the purge action has been performed.
     * @example     calendarRsvpAttendeeClient.purge()
                        .then(function (data) {
                            // perform success action here
                        },
                        function (response, status, headers, config) {
                            // perform error handling here
                        });
     **/
    purge(event: ICalendarEvent): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge(event));
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