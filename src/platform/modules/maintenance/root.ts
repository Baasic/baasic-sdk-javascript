import {
    MaintenanceClient,
    TYPES
} from '.';

import { injectable, inject } from "inversify";

@injectable()
export class Root {

    constructor(
        @inject(TYPES.MaintenanceClient) public maintenance: MaintenanceClient
    ) {

    }

}