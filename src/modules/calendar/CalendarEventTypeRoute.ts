/* globals module */
/**
 * @module calendarEventTypeRoute
 * @description Baasic Event Type Route Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Event Type Route Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

import { ICalendarEventType } from './contracts';

export class CalendarEventTypeRoute extends BaseRoute {

    public readonly findRoute: string = 'calendar-lookups/types/{?searchQuery,ids,page,rpp,sort,embed,fields,from,to}';

    public readonly getRoute: string = 'calendar-lookups/types/{id}/{?embed, fields}';

    public readonly createRoute: string = 'calendar-lookups/types';

    public readonly updateRoute: string = 'calendar-lookups/types/{id}';

    public readonly deleteRoute: string = 'calendar-lookups/types/{id}';

    public readonly purgeRoute: string = 'calendar-lookups/types/purge';

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

    /**
     * Parses find route which can be expanded with additional options. Supported items are:
     * - `searchQuery` - A string referencing Calendar Event Type properties using the phrase or BQL (Baasic Query Language) search.
     * - `page` - A value used to set the page number, i.e. to retrieve certain Calendar Event Type subset from the storage.
     * - `rpp` - A value used to limit the size of result set per page.
     * - `sort` - A string used to set the Calendar Event Type property to sort the result collection by.
     * - `embed` - Comma separated list of resources to be contained within the current representation.
     * - `from` - Fluent syntax for 'From' date. Used to limit the dataset to only use events starting from this date
     * - `to` - Fluent syntax for 'To' date. Used to limit the dataset to only use events ending to this date.
     * @method
     * @param options Query resource options object.
     * @example calendarEventTypeRoute.find({searchQuery: '<search-phrase>'});
     **/
    find(options?: IOptions): any {
        return super.baseFind(this.findRoute, options);
    }

    /**
     * Parses get route; this route doesn't expose any properties.
     * @method
     * @param id Calendar Event Type id which uniquely identifies Calendar Event Type resource that needs to be retrieved.
     * @param options Query resource options object.
     * @example calendarEventTypeRoute.get(id);
     **/
    get(id: string, options?: IGetRequestOptions): any {
        return super.baseGet(this.getRoute, id, options);
    }

    /**
     * Parses create route; this URI template does not expose any additional options.
     * @method
     * @param data An event type object that needs to be inserted into the system.
     * @example calendarEventTypeRoute.create(data);
     **/
    create(data: ICalendarEventType): any {
        return super.baseCreate(this.createRoute, data);
    }

    /**
     * Parses update route; this URI template does not expose any additional options.
     * @method
     * @param data An user education object used to update specified skill resource.
     * @example calendarEventTypeRoute.update(data);
     **/
    update(data: ICalendarEventType): any {
        return super.baseUpdate(this.updateRoute, data);
    }

    /**
     * Parses delte route; this URI template does not expose any additional options.
     * @method
     * @param data An user education object used to delete specified skill resource.
     * @example calendarEventTypeRoute.delete(data);
     **/
    delete(data: ICalendarEventType): any {
        return super.baseDelete(this.deleteRoute, data);
    }

    /**
     * Parses purge route; this URI template does not expose any additional options.
     * @method
     * @example calendarEventTypeRoute.purge();
     */
    purge(): any {
        return super.parse(this.purgeRoute);
    }
}

/**
 * @overview
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
 - All end-point objects are transformed by the associated route service.
 */