/* globals module */
/**
 * @module calendarEventRsvpInvitationTypeRoute
 * @description BaasicCalendarEventRsvpInvitationTypeRoute Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicCalendarEventRsvpInvitationTypeRoute Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../../common';
import { IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';

import { ICalendarEventRSVPAttendeeInvitationType, IGetCalendarLookupOptions } from '../contracts';

export class CalendarEventRsvpInvitationTypeRoute extends BaseRoute {

    public readonly findRoute: string = 'calendar-lookups/rsvp-invitation-types/{?searchQuery,page,rpp,sort,embed,fields,from,to,ids}';
    public readonly getRoute: string = 'calendar-lookups/rsvp-invitation-types/{id}/{?embed, fields}';
    public readonly createRoute: string = 'calendar-lookups/rsvp-invitation-types';
    public readonly updateRoute: string = 'calendar-lookups/rsvp-invitation-types/{id}';
    public readonly deleteRoute: string = 'calendar-lookups/rsvp-invitation-types/{id}';
    public readonly purgeRoute: string = 'calendar-lookups/rsvp-invitation-types/purge';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**
     * Parses find route which can be expanded with additional options. Supported items are:
     * - `searchQuery` - A string referencing CalendarEventRsvpAttendeeInvitationType properties using the phrase or BQL (Baasic Query Language) search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain CalendarEventRsvpAttendeeInvitationType subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the CalendarEventRsvpAttendeeInvitationType property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `from` - Fluent syntax for 'From' date. Used to limit the dataset to only use events starting from this date
     * - `to` - Fluent syntax for 'To' date. Used to limit the dataset to only use events ending to this date.
     * - `ids` - CalendarEventRsvpAttendeeInvitationType ids which uniquely identify CalendarEventRsvpAttendeeInvitationType resources that need to be retrieved.
     * @method
     * @param options Query resource GetCalendarLookupOptions object.
     * @example calendarEventRsvpInvitationTypeRoute.find({searchQuery: '<search-phrase>'});
     **/
    find(options?: IGetCalendarLookupOptions): any {
        var opt;
        if(options){
            opt = options;
            opt.to = this.getToDate(opt);
            opt.from = this.getFromDate(opt);
        } else {
            opt = {};
        }
        return super.baseFind(this.findRoute, opt);
    }

    /**
     * Parses get route which must be expanded with the id of the previously created CalendarEventRsvpAttendeeInvitationType resource. The route can be expanded using additional options. Supported items are:
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param id CalendarEventRsvpAttendeeInvitationType id which uniquely identifies CalendarEventRsvpInvitationType resource that needs to be retrieved.
     * @param options Query resource options object.
     * @example calendarEventRsvpInvitationTypeRoute.get(id);
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses create route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventRsvpInvitationType object that needs to be inserted into the system.
     * @example calendarEventRsvpInvitationTypeRoute.create(data);
     **/
    create(data: ICalendarEventRSVPAttendeeInvitationType): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventRsvpInvitationType object used to update specified CalendarEventRsvpInvitationType resource.
     * @example calendarEventRsvpInvitationTypeRoute.update(data);
     **/
    update(data: ICalendarEventRSVPAttendeeInvitationType): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delte route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventRsvpInvitationType object used to delete specified CalendarEventRsvpInvitationType resource.
     * @example calendarEventRsvpInvitationTypeRoute.delete(data);
     **/
    delete(data: ICalendarEventRSVPAttendeeInvitationType): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
     * Parses purge route. This URI template does not expose any additional options.
     * @method
     * @example calendarEventRsvpInvitationTypeRoute.purge();
     */
    purge(): any {
        return super.parse(this.purgeRoute);
    }

    protected getToDate(options: any) {
        if (!this.utility.isUndefined(options.to) && options.to !== null) {
            return options.to.toISOString();
        }
        return undefined;
    }

    protected getFromDate(options: any) {
        if (!this.utility.isUndefined(options.from) && options.from !== null) {
            return options.from.toISOString();
        }
        return undefined;
    }

}

/**
 * @overview
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
 - All end-point objects are transformed by the associated route service.
 */