/* globals module */
/**
 * @module calendarEventStatusBatchClient
 * @description  CalendarEventStatusBatchClient provides an easy way to consume CalendarEventStatusBatch REST API end-points. In order to obtain needed routes `calendarEventStatusBatchClient` uses `calendarEventStatusBatchRoute`. 
 */

import { injectable, inject } from "inversify";
import { IQueryModel, IGetRequestOptions, IOptions } from '../../common/contracts';;
import { ApiClient, IHttpResponse, httpTYPES } from '../../httpApi';
import {
    TYPES as calendarTypes,
    CalendarEventStatusBatchRoute
} from './';
import { ICalendarEventStatus } from './contracts';

@injectable()
export class CalendarEventStatusBatchClient {

    get routeDefinition(): CalendarEventStatusBatchRoute {
        return this.calendarEventStatusBatchRoute;
    }

    constructor(
        @inject(calendarTypes.CalendarEventStatusBatchRoute) protected calendarEventStatusBatchRoute: CalendarEventStatusBatchRoute,
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