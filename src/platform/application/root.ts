import {
    ApplicationClient,
    SettingsClient,
    VersionClient,
    TYPES
} from '.';

import { injectable, inject } from "inversify";

@injectable()
export class Root {

    constructor(
        @inject(TYPES.ApplicationClient) public application: ApplicationClient,
        @inject(TYPES.SettingsClient) public settings: SettingsClient,
        @inject(TYPES.VersionClient) public version: VersionClient
    ) {

    }

}