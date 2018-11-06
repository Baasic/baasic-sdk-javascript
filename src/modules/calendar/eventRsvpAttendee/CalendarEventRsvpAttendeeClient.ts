/* globals module */
/**
 * @module calendarEventRsvpAttendeeClient
 * @description  CalendarEventRsvpAttendee Client provides an easy way to consume CalendarEventRsvpAttendee REST API end-points. In order to obtain needed routes `calendarEventRsvpAttendeeClient` uses `calendarEventRsvpAttendeeRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from 'common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES, IHttpHeaders } from 'httpApi';
import {
    CalendarEventRsvpAttendeeBatchClient,
    TYPES as calendarTypes,
    CalendarEventRsvpAttendeeRoute
} from '../';
import { ICalendarEvent, ICalendarEventAttendee, IGetCalendarEventAttendeeOptions } from '../contracts';

@injectable()
export class CalendarEventRsvpAttendeeClient {

    get routeDefinition(): CalendarEventRsvpAttendeeRoute {
        return this.calendarEventRsvpAttendeeRoute;
    }

    get batch(): CalendarEventRsvpAttendeeBatchClient {
        return this.calendarEventRsvpAttendeeBatchClient;
    }

    constructor(
        @inject(calendarTypes.CalendarEventRsvpAttendeeBatchClient) protected calendarEventRsvpAttendeeBatchClient: CalendarEventRsvpAttendeeBatchClient,
        @inject(calendarTypes.CalendarEventRsvpAttendeeRoute) protected calendarEventRsvpAttendeeRoute: CalendarEventRsvpAttendeeRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of CalendarEventAttendee resources matching the given criteria.
     * @method
     * @param options Query resource GetCalendarLookupOptions object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarEventRsvpAttendeeClient.find({
                    pageNumber: 1,
                    pageSize: 10,
                    orderBy: '<field>',
                    orderDirection: '<asc|desc>',
                    search: '<search-phrase>',
                    calendarIds: '<calendar-ids>',
                    calendarNames: '<calendar-names>',
                    eventIds: '<event-ids>',
                    invitationTypeIds: '<invitation-type-ids>',
                    attendeeStatusIds: '<attendee-status-ids>',
                    userIds: '<user-ids>',
                    slotDifference: <true|false>,
                    emails: '<e-mails>',
                    ids: '<identifiers>',
                    from: <start-date>,
                    to: <end-date>
                })
                .then(function (collection) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    find(options?: IGetCalendarEventAttendeeOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendarEventAttendee>>> {
        return this.apiClient.get<IQueryModel<ICalendarEventAttendee>>(this.routeDefinition.find(options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEventAttendee resource.
     * @method
     * @param id CalendarEventAttendee id which uniquely identifies CalendarEventAttendee resource that needs to be retrieved.
     * @param options Query resource options object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarEventRsvpAttendeeClient.get()
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    get(id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEventAttendee>> {
        return this.apiClient.get<ICalendarEventAttendee>(this.routeDefinition.get(id, options));
    }

    /**
     * Returns a promise that is resolved once the create CalendarEventAttendee action has been performed; this action creates a new CalendarEventAttendee resource.
     * @method
     * @param data A CalendarEventAttendee object that needs to be inserted into the system.
     * @returns A promise that is resolved once the create CalendarEventAttendee action has been performed.
     * @example calendarEventRsvpAttendeeClient.create({
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
                })
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    create(data: ICalendarEventAttendee): PromiseLike<IHttpResponse<ICalendarEventAttendee>> {
        return this.apiClient.post<ICalendarEventAttendee>(this.routeDefinition.create(data), this.routeDefinition.createParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventAttendee action has been performed. This action updates a CalendarEventAttendee resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventAttendee);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param data A CalendarEventAttendee object used to update specified CalendarEventAttendee resource.
     * @returns A promise that is resolved once the update CalendarEventAttendee action has been performed.
     * @example calendarEventAttendee is a resource previously fetched using get action.
                calendarEventAttendee.name = '<name>';
                calendarEventRsvpAttendeeClient.update(calendarEventAttendee)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    update(data: ICalendarEventAttendee): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventAttendee Status action has been performed. This action updates a CalendarEventAttendee resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventAttendee);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param id CalendarEventAttendee id which uniquely identifies a CalendarEventAttendee resource.
     * @param statusId CalendarEventAttendeeStatus id which uniquely identifies a CalendarEventAttendeeStatus resource.
     * @returns A promise that is resolved once the update CalendarEventAttendee action has been performed.
     * @example calendarEventRsvpAttendeeClient.updateStatus(id, statusId)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    updateStatus(id: string, statusId: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.updateStatus(id, statusId), {});
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventAttendee Status Email or FullName action has been performed. This action updates a CalendarEventAttendee resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventAttendee);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param id CalendarEventRsvpAttendee id which uniquely identifies a CalendarEventRsvpattendee resource.
     * @param emailOrFullName Email or full name
     * @param statusId CalendarEventAttendeeStatus id which uniquely identifies a CalendarEventRsvpAttendeeStatus resource.
     * @param securityToken Security Token.
     * @returns A promise that is resolved once the update CalendarEventAttendee action has been performed.
     * @example calendarEventRsvpAttendeeClient.updateStatusEmailOrFullName(id, email, statusId)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    updateStatusEmailorFullName(id: string, emailOrFullName: string, statusId: string, securityToken: string): PromiseLike<IHttpResponse<void>> {
        let headers: IHttpHeaders;
        headers['securityToken'] = securityToken;
        return this.apiClient.put<void>(this.routeDefinition.updateStatusEmailOrFullName(id, emailOrFullName, statusId), {}, headers);
    }

    /**
     * Returns a promise that is resolved once the remove action has been performed. This action will remove a CalendarEventAttendee resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventAttendee);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An calendarEventAttendee object used to delete specified CalendarEventAttendee resource.
     * @returns A promise that is resolved once the remove action has been performed.
     * @example calendarEventAttendee is a resource previously fetched using get action.
                calendarEventRsvpAttendeeClient.remove(calendarEventType)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     **/
    remove(data: ICalendarEventAttendee): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.delete(data));
    }

    /**
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all CalendarEventAttendee resources for the given event from the system if succesfully completed.
     * @method
     * @param event CalendarEvent resource that will have it's attendees purged.
     * @returns A promise that is resolved once the purge action has been performed.
     * @example calendarEventRsvpAttendeeClient.purge()
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    purge(event: ICalendarEvent): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge(event));
    }

    /**
     * Returns a promise that is resolved once the subscribe action has been performed. This action creates CalendarEventAttendee subscription to CalendarEvent changes.
     * @method
     * @param id CalendarEventAttendee identifier which uniquely identifies a CalendarEventAttendee resource.
     * @returns A promise that is resolved once the subscribe action has been performed.
     * @example calendarEventRsvpAttendeeClient.subscribe(attendeeId)
                .then(function (data) {
                    //perform success action here
                }, 
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    subscribe(id: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.post<void>(this.routeDefinition.subscribe(id), {});
    }

    /**
     * Returns a promise that is resolved once the unsubscribe action has been performed. This action removes CalendarEventAttendee subscriotion to CalendarEvent changes.
     * @method
     * @param id CalendarEventAttendee identifier which uniquely identifies a CalendarEventAttendee resource.
     * @returns A promise that is resolved once the unsubscribe action has been performed.
     * @example calendarEventRsvpAttendeeClient.unsubscribe(attendeeId)
                .then(function (data) {
                    //perform success action here
                }, 
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    unsubscribe(id: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.unsubscribe(id));
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