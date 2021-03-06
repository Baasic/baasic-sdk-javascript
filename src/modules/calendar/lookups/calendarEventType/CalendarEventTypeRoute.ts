/* globals module */
/**
 * @module calendarEventTypeRoute
 * @description BaasicCalendarEventTypeRoute Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicCalendarEventTypeRoute Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../../../common';
import { IGetRequestOptions, IOptions } from '../../../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../../../core/contracts';

import { ICalendarEventType, IGetCalendarOptions } from '../../contracts';

export class CalendarEventTypeRoute extends BaseRoute {

    public readonly findRoute: string = 'calendar-lookups/types/{?searchQuery,page,rpp,sort,embed,fields,from,to,ids}';
    public readonly getRoute: string = 'calendar-lookups/types/{id}/{?embed,fields}';
    public readonly createRoute: string = 'calendar-lookups/types';
    public readonly updateRoute: string = 'calendar-lookups/types/{id}';
    public readonly deleteRoute: string = 'calendar-lookups/types/{id}';
    public readonly purgeRoute: string = 'calendar-lookups/types/purge';

    constructor(@inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**
     * Parses find route which can be expanded with additional GetCalendarOptions. Supported items are:
     * - `searchQuery` - A string referencing CalendarEventType properties using the phrase or BQL (Baasic Query Language) search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain CalendarEventType subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the CalendarEventType property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `from` - Fluent syntax for 'From' date. Used to limit the dataset to only use resources starting from this date.
     * - `to` - Fluent syntax for 'To' date. Used to limit the dataset to only use resources ending to this date.
     * - `ids` - CalendarEventType ids which uniquely identify CalendarEventType resources that need to be retrieved.
     * @method
     * @param options Query resource GetCalendarOptions object.
     * @example calendarEventTypeRoute.find({searchQuery: '<search-phrase>'});
     */
    find(options?: IGetCalendarOptions): any {
        var opt;
        if (options) {
            opt = options;
            opt.to = this.getToDate(opt);
            opt.from = this.getFromDate(opt);
        } else {
            opt = {};
        }
        return super.baseFind(this.findRoute, opt);
    }

    /**
     * Parses get route which must be expanded with the id of the previously created CalendarEventType resource in the system. The route can be expanded using additional GetRequestOptions. Supported items are
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * @method
     * @param id CalendarEventType id which uniquely identifies CalendarEventType resource that needs to be retrieved.
     * @param options Query resource GetRequestOptions object.
     * @example calendarEventTypeRoute.get(id);
     */
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses create route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventType object that needs to be inserted into the system.
     * @example calendarEventTypeRoute.create(data);
     */
    create(data: ICalendarEventType): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**
     * Parses update route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventType object used to update specified CalendarEventType resource.
     * @example calendarEventTypeRoute.update(data);
     */
    update(data: ICalendarEventType): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delte route. This URI template does not expose any additional options.
     * @method
     * @param data A CalendarEventType object used to delete specified CalendarEventType resource.
     * @example calendarEventTypeRoute.delete(data);
     */
    delete(data: ICalendarEventType): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
     * Parses purge route. This URI template does not expose any additional options.
     * @method
     * @example calendarEventTypeRoute.purge();
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