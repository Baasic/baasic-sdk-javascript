import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    CalendarEventStatusBatchClient,
    CalendarEventStatusBatchRoute,
    CalendarEventStatusClient,
    CalendarEventStatusRoute,
    CalendarEventTypeBatchClient,
    CalendarEventTypeBatchRoute,
    CalendarEventTypeRoute,
    CalendarEventTypeClient,
    Root
} from './';

const TYPES = {
    CalendarEventStatusBatchClient: Symbol("CalendarEventStatusBatchClient"),
    CalendarEventStatusBatchRoute: Symbol("CalendarEventStatusBatchRoute"),
    CalendarEventStatusClient: Symbol("CalendarEventStatusClient"),
    CalendarEventStatusRoute: Symbol("CalendarEventStatusRoute"),
    CalendarEventTypeBatchClient: Symbol("CalendarEventTypeBatchClient"),
    CalendarEventTypeBatchRoute: Symbol("CalendarEventTypeBatchRoute"),
    CalendarEventTypeRoute: Symbol("CalendarEventTypeRoute"),
    CalendarEventTypeClient: Symbol("CalendarEventTypeClient"),

    Root: Symbol("Calendar-Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<CalendarEventStatusBatchClient>(TYPES.CalendarEventStatusBatchClient).to(CalendarEventStatusBatchClient);
    bind<CalendarEventStatusBatchRoute>(TYPES.CalendarEventStatusBatchRoute).to(CalendarEventStatusBatchRoute);
    bind<CalendarEventStatusClient>(TYPES.CalendarEventStatusClient).to(CalendarEventStatusClient);
    bind<CalendarEventStatusRoute>(TYPES.CalendarEventStatusRoute).to(CalendarEventStatusRoute);
    bind<CalendarEventTypeBatchClient>(TYPES.CalendarEventTypeBatchClient).to(CalendarEventTypeBatchClient);
    bind<CalendarEventTypeBatchRoute>(TYPES.CalendarEventTypeBatchRoute).to(CalendarEventTypeBatchRoute);
    bind<CalendarEventTypeRoute>(TYPES.CalendarEventTypeRoute).to(CalendarEventTypeRoute);
    bind<CalendarEventTypeClient>(TYPES.CalendarEventTypeClient).to(CalendarEventTypeClient);

    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };