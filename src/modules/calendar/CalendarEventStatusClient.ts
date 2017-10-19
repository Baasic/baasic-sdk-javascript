/* globals module */
/**
 * @module calendarEventStatusClient
 * @description  CalendarEventStatusClient provides an easy way to consume CalendarEventStatus REST API end-points. In order to obtain needed routes `calendarEventStatusClient` uses `calendarEventStatusRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventStatusRoute
} from './';
import { ICalendarEventType } from './contracts';

@injectable()
export class CalendarEventStatusClient {

    get routeDefinition(): CalendarEventStatusRoute {
        return this.calendarEventStatusRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventStatusRoute) protected calendarEventStatusRoute: CalendarEventStatusRoute,
        @inject(httpTYPES.ApiClient) protected apiClient: ApiClient,
    ) { }

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