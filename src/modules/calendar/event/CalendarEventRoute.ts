/* globals module */
/**
 * @module calendarEventRoute
 * @description BaasicCalendarEventRoute Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicCalendarEventRoute Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../../common';
import { IGetRequestOptions, IOptions } from '../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../core/contracts';

import { ICalendar, ICalendarEvent, IGetCalendarEventOptions } from '../contracts';

export class CalendarEventRoute extends BaseRoute {

    public readonly findRoute: string = 'calendar-events/{?searchQuery,page,rpp,sort,embed,fields,ids,ownerIds,calendarIds,calendarNames,statusIds,typeIds,from,to}';
    public readonly getRoute: string = 'calendar-events/{id}/{?embed, fields}';
    public readonly getByEmailOrFullNameRoute: string = 'calendar-events/{id}/{emailOrFullName}'
    public readonly createRoute: string = 'calendar-events';
    public readonly updateRoute: string = 'calendar-events/{id}';
    public readonly deleteRoute: string = 'calendar-events/{id}';
    public readonly purgeRoute: string = 'calendar-events/{id}/purge';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**
     * Parses find route which can be expanded with additional GetCalendarEventOptions. Supported items are:
     * - `searchQuery` - A string referencing CalendarEvent properties using the phrase or BQL (Baasic Query Language) search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain CalendarEvent subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the CalendarEvent property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `ids` - CalendarEvent ids which uniquely identify CalendarEvent resources that need to be retrieved.
	 * - `ownerIds` - Owner ids which uniquely identify event owners used for filtering.
	 * - `calendarIds` - Calendar ids which uniquely identify Calendar resources used for filtering.
     * - `calendarNames` - Calendar names which identify Calendar resources used for filtering.
	 * - `statusIds` - CalendarEventStatus ids which uniquely idendify CalendarEventStatuses used for filtering.
	 * - `typeIds` - CalendarEventType ids which uniquely identify CalendarEventTypes used for filtering.
     * - `from` - Fluent syntax for 'From' date. Used to limit the dataset to only use resources starting from this date
     * - `to` - Fluent syntax for 'To' date. Used to limit the dataset to only use resources ending to this date.
     * @method
     * @param options Query resource GetCalendarEventOptions object.
     * @example calendarEventRoute.find({searchQuery: '<search-phrase>'});
     **/
    find(options?: IGetCalendarEventOptions): any {
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
     * Parses get route which must be expanded with the identifier of the previously created CalendarEvent resource. This route can be expanded using additional GetRequestOptions. Supported items are:
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param id CalendarEvent id which uniquely identifies CalendarEvent resource that needs to be retrieved.
     * @param options Query resource options object.
     * @example calendarEventRoute.get(id);
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses getByEmailOrFullName route which must be expanded with the identifier of the previously created CalendarEvent resource
     * The route must also be expanded with the identifier of the previously created CalendarResource and the email/FullName. 
     * @param id CalendarEvent identifier which uniquely identifies previously created CalendarEvent resource.
     * @param emailOrFullName TODO?
     * @param options Query resource options object.
     * @example calendarEventRoute.get(id, email@example.com, options);
     */
    getByEmailOrFullName(id: string, emailOrFullName: string, options?: IGetRequestOptions) {
        let params = this.modelMapper.getParams(options);
        params.emailOrFullName = emailOrFullName;
        return super.baseGet(this.getByEmailOrFullNameRoute, id, params);
    }

    /**
     * Parses create route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEvent object that needs to be inserted into the system.
     * @example calendarEventRoute.create(data);
     **/
    create(data: ICalendarEvent): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEvent object used to update specified CalendarEvent resource.
     * @example calendarEventRoute.update(data);
     **/
    update(data: ICalendarEvent): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delte route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEvent object that will be deleted from the system.
     * @example calendarEventRoute.delete(data);
     **/
    delete(data: ICalendarEvent): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
     * Parses purge route. This URI template does not expose any additional options.
     * @method
     * @param data A Calendar object that will have all of it's events purged.
     * @example calendarEventRoute.purge(calendar);
     */
    purge(data: ICalendar): any {
        return super.baseDelete(this.purgeRoute, data);
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