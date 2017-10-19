import {
    CalendarEventStatusBatchClient,
    CalendarEventStatusClient,
    CalendarEventTypeClient,
    CalendarEventTypeBatchClient,
    TYPES
} from './';

import { injectable, inject } from "inversify";

@injectable()
export class Root {

    constructor(
        @inject(TYPES.CalendarEventStatusBatchClient) public calendarEventStatusBatchClient: CalendarEventStatusBatchClient,
        @inject(TYPES.CalendarEventStatusClient) public calendarEventStatusClient: CalendarEventStatusClient,
        @inject(TYPES.CalendarEventTypeClient) public calendarEventTypeClient: CalendarEventTypeClient,
        @inject(TYPES.CalendarEventTypeBatchClient) public calendarEventTypeBatchClient: CalendarEventTypeBatchClient,
    ) {

    }

}