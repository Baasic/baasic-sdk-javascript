/* globals module */ 
/**  
 * @module baasicApplicationSettingsClient  
 * @description Baasic Application Settings Client provides an easy way to consume Baasic Application Settings REST API end-points. In order to obtain needed routes `baasicApplicationSettingsClient` uses `baasicApplicationSettingsRouteDefinition`. 
 */

import { BaasicApplicationSettingsRouteDefinition } from 'applicationSettings';
import { IOptions } from 'contracts';
import { ModelMapper } from '..';

export class BaasicApplicationSettingsClient {

    constructor(private baasicApplicationSettingsRouteDefinition: BaasicApplicationSettingsRouteDefinition) {}

    get(options: IOptions): Promise<> {
        return this.baasicApiHttp.get(this.baaasicApplicationSettingsRouteDefinition.get().expand(this.modelMapepr.getParams(options)))
                    .success(function (appSettings) { 
                        appSettings.origins = appSettings.origins || [];                         
                    });
    }
}