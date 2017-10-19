/* globals module */
/**
 * @module calendarEventStatusRoute
 * @description BaasicEventStatusRoute Definition provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use BaasicEventStatusRoute Definition to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
 */

import { injectable, inject } from "inversify";
import { BaseRoute, TYPES as commonTypes } from '../../common';
import { IGetRequestOptions, IOptions } from '../../common/contracts';;
import { IAppOptions, TYPES as coreTypes } from '../../core/contracts';

import { ICalendarEventStatus } from './contracts';

export class CalendarEventStatusRoute extends BaseRoute {

    constructor( @inject(coreTypes.IAppOptions) protected appOptions: IAppOptions) { super(appOptions); }

}

/**
 * @overview
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
 - All end-point objects are transformed by the associated route service.
 */