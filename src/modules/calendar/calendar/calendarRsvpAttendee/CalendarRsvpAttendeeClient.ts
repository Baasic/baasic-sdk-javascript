/* globals module */
/**
 * @module calendarRsvpAttendeeClient
 * @description  CalendarRsvpAttendeeClient provides an easy way to consume CalendarRsvpAttendee REST API end-points. In order to obtain needed routes `calendarRsvpAttendeeClient` uses `calendarRsvpAttendeeRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../../../httpApi';
import {
    CalendarRsvpAttendeeBatchClient,
    TYPES as calendarTypes,
    CalendarRsvpAttendeeRoute
} from '../../';
import { ICalendar, ICalendarEventRsvp, ICalendarEvent, IGetCalendarRsvpAttendeeOptions, ICalendarEventAttendee } from '../../contracts';

@injectable()
export class CalendarRsvpAttendeeClient {

    get routeDefinition(): CalendarRsvpAttendeeRoute {
        return this.calendarRsvpAttendeeRoute;
    }

    get batch(): CalendarRsvpAttendeeBatchClient {
        return this.calendarRsvpAttendeeBatchClient
    }

    constructor(
        @inject(calendarTypes.CalendarRsvpAttendeeBatchClient) protected calendarRsvpAttendeeBatchClient: CalendarRsvpAttendeeBatchClient,
        @inject(calendarTypes.CalendarRsvpAttendeeRoute) protected calendarRsvpAttendeeRoute: CalendarRsvpAttendeeRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient
    ) { }

    /**
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of CalendarEventAttendee resources matching the given criteria.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param options Query resource GetCalendarLookupOptions object.
     * @returns A promise that is resolved once the find action has been performed.
     * @example calendarRsvpAttendeeClient.find(calendarId, eventId, {
                    pageNumber: 1,
                    pageSize: 10,
                    orderBy: '<field>',
                    orderDirection: '<asc|desc>',
                    search: '<search-phrase>',
                    ids: '<ids>',
                    userIds: '<user-ids>',
                    emails: '<emails>',
                    fullNames: '<full-names>',
                    invitationTypeIds: '<invitation-type-ids>',
                    from: <from-date>,
                    to: <to-date>
                })
                .then(function (collection) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    find(calendarId: string, eventId: string, options?: IGetCalendarRsvpAttendeeOptions): PromiseLike<IHttpResponse<IQueryModel<ICalendarEventAttendee>>> {
        return this.apiClient.get<IQueryModel<ICalendarEventAttendee>>(this.routeDefinition.find(calendarId, eventId, options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEventAttendee resource.
     * @method
     * @param id CalendarEventAttendee id which uniquely identifies CalendarEventAttendee resource that needs to be retrieved.
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param options Query resource GetRequestOptions object.
     * @returns A promise that is resolved once the get action has been performed.
     * @example calendarRsvpAttendeeClient.get(calendarId,eventId, id)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    get(calendarId: string, eventId: string, id: string, options?: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEventAttendee>> {
        return this.apiClient.get<ICalendarEventAttendee>(this.routeDefinition.get(calendarId, eventId, id, options));
    }

    /**
     * Returns a promise that is resolved once the get action has been performed. Success response returns the CalendarEventAttendee resource.
     * @method
     * @param calendarId Calendar Id which uniquely identifies a Calendar resource.
     * @param eventId CalendarEvent Id which uniquely identifies a calendarEvent resource
     * @param emailOrFullName Email or full name which identify a CalendarEventRsvpAttendee resource.
     * @param options Query resource options object.
     * @example calendarRsvpAttendeeRoute.getByEmailOrFullName(calendarId, eventId, fullname);
     */
    getByEmailOrFullName(calendarId: string, eventId: string, emailOrFullName: string, options: IGetRequestOptions): PromiseLike<IHttpResponse<ICalendarEventAttendee>> {
        return this.apiClient.get<ICalendarEventAttendee>(this.routeDefinition.getByEmailOrFullName(calendarId, eventId, emailOrFullName, options));
    }

    /**
     * Returns a promise that is resolved once the link CalendarEventAttendee action has been performed; this action links a new CalendarEventAttendee resource to a specified calendarEvent.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param data A CalendarEventAttendee object that needs to be inserted into the system.
     * @returns A promise that is resolved once the link CalendarEventAttendee action has been performed.
     * @example calendarRsvpAttendeeClient.link(calendarId, eventId, {
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
    link(calendarId: string, eventId: string, data: ICalendarEventAttendee): PromiseLike<IHttpResponse<ICalendarEventAttendee>> {
        return this.apiClient.post<ICalendarEventAttendee>(this.routeDefinition.link(eventId, calendarId, data), this.routeDefinition.createParams(data));
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
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
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
     */
    update(calendarId: string, eventId: string, data: ICalendarEventAttendee): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.update(calendarId, eventId, data), this.routeDefinition.updateParams(data));
    }

    /**
     * Returns a promise that is resolved once the update CalendarEventAttendee Status action has been performed. This action updates a CalendarEventAttendee resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventAttendee);
     * let uri = params['model'].links('put').href;
     * ```
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param id CalendarEventAttendee id which uniquely identifies CalendarEventAttendee resource.
     * @param statusId CalendarEventAttendeeStatus id which uniquely identifies CalendarEventAttendeeStatus resource.
     * @returns A promise that is resolved once the update CalendarEventAttendee action has been performed.
     * @example calendarRsvpAttendeeClient.updateStatus(calendarid, eventid, id, statusid)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    updateStatus(calendarId: string, eventId: string, id: string, statusId: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.updateStatus(calendarId, eventId, id, statusId), {});
    }

    //TODO: securityToken
    /**
     * Returns a promise that is resolved once the update CalendarEventAttendee Status action has been performed. This action updates a CalendarEventAttendee resource. 
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniqely identifies CalendarEvent resource.
     * @param emailOrFullName Email or FullName
     * @param statusId CalendarEventAttendeeStatus id which uniquely identifies CalendarEventAttendeeStatus resource.
     * @example calendarRsvpAttendeeClient.update(calendarId, eventId, email, statusId);
     */
    updateStatusEmailOrFullName(calendarId: string, eventId: string, emailOrFullName: string, statusId: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.put<void>(this.routeDefinition.updateStatusEmailOrFullName(calendarId, eventId, emailOrFullName, statusId), {});
    }

    /**
     * Returns a promise that is resolved once the unlink action has been performed. This action will unlink a CalendarEventAttendee resource from the CalendarEvent if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `calendarEventTypeRoute` route template. Here is an example of how a route can be obtained from HAL enabled objects:
     * ```
     * let params = modelMapper.removeParams(calendarEventAttendee);
     * let uri = params['model'].links('delete').href;
     * ```
     * @method
     * @param data An calendarEventAttendee object used to delete specified CalendarEventAttendee resource.
     * @param eventId CalendarEvent id which uniquely identifies CaledndarEvent resource.
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @returns A promise that is resolved once the unlink action has been performed.
     * @example calendarEventAttendee is a resource previously fetched using get action.
                calendarRsvpAttendeeClient.unlink(calendarEventType)
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    unlink(calendarId: string, eventId: string, data: ICalendarEventAttendee): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.unlink(calendarId, eventId, data));
    }

    /**
     * Returns a promise that is resolved once the subscribe action has been performed. This action creates CalendarEventAttendee subscriotion to CalendarEvent changes.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param id CalendarEventAttendee id which uniquely identifies CalendarEventAttendee resource.
     * @returns A promise that is resolved once the subscribe action has been performed.
     * @example calendarRsvpattendeeClient.subscribe(calendarId, eventId, attendeeId)
                .then( function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });                    
     */
    subscribe(calendarId: string, eventId: string, id: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.post<void>(this.routeDefinition.subscribe(eventId, calendarId, id), {});
    }

    /**
     * Returns a promise that is resolved once the unsubscribe action has been performed. This action removes CalendarEventAttendee subscriotion to CalendarEvent changes.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param id CalendarEventAttendee id which uniquely identifies CalendarEventAttendee resource.
     * @returns A promise that is resolved once the subscribe action has been performed.
     * @example calendarRsvpattendeeClient.unsubscribe(calendarId, eventId, attendeeId)
                .then( function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });                    
     */
    unsubscribe(calendarId: string, eventId: string, id: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.unsubscribe(eventId, calendarId, id));
    }

    /**
     * Returns a promise that is resolved once the subscribeEmail action has been performed. This action creates CalendarEventAttendee subscriotion to CalendarEvent changes.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param email CalendarEventAttendee email which identifies CalendarEventAttendee resource.
     * @returns A promise that is resolved once the subscribeEmail action has been performed.
     * @example calendarRsvpattendeeClient.subscribeEmail(calendarId, eventId, attendeeEmail)
                .then( function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });                    
     */
    subscribeEmail(calendarId: string, eventId: string, email: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.post<void>(this.routeDefinition.subscribeEmail(eventId, calendarId, email), {});
    }

    /**
     * Returns a promise that is resolved once the unsubscribeEmail action has been performed. This action removes CalendarEventAttendee subscriotion to CalendarEvent changes.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource.
     * @param email CalendarEventAttendee email which identifies CalendarEventAttendee resource.
     * @returns A promise that is resolved once the subscribeEmail action has been performed.
     * @example calendarRsvpattendeeClient.unsubscribeEmail(calendarId, eventId, attendeeEmail)
                .then( function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });                    
     */
    unsubscribeEmail(calendarId: string, eventId: string, id: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.unsubscribe(eventId, calendarId, id));
    }

    /**
     * Returns a promise that is resolved once the purge action has been performed. This action will remove all CalendarEventAttendee resources for the given event from the system if succesfully completed.
     * @method
     * @param calendarId Calendar id which uniqely identifies Calendar resource.
     * @param eventId CalendarEvent id which uniquely identifies CalendarEvent resource that will have it's attendees purged.
     * @returns A promise that is resolved once the purge action has been performed.
     * @example calendarRsvpAttendeeClient.purge()
                .then(function (data) {
                    // perform success action here
                },
                function (response, status, headers, config) {
                    // perform error handling here
                });
     */
    purge(calendarId: string, eventId: string): PromiseLike<IHttpResponse<void>> {
        return this.apiClient.delete<void>(this.routeDefinition.purge(calendarId, eventId));
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