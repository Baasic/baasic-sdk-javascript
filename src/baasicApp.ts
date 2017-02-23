import { Utility, diModule as commonDIModule } from 'common';
import { IBaasicAppOptions } from './';
import { ITokenStore, TYPES as coreTYPES, diModule as coreDIModule } from './core';
import { DIModule } from './';
import { diModule as httpDIModule } from 'httpApi';
import { Container } from "inversify";

import * as modules from 'modules';
//import * as m from 'modules/keyValue';

export class BaasicApp {
        
    private readonly kernel: Container;
    private readonly apiUrl: URL;
    private readonly utility: Utility;
    private static readonly settings: IBaasicAppOptions = {
        useSSL: true,
        apiRootUrl: 'api.baasic.com',
        apiVersion: 'v1'
    };

    public readonly TokenStore: ITokenStore;
    public readonly KeyValue: modules.KeyValue.BaasicKeyValueClient;


    constructor (private apiKey: string, options?: Partial<IBaasicAppOptions>)
    {
        this.utility = new Utility();

        options = this.utility.extendAs<Readonly<IBaasicAppOptions>>({}, BaasicApp.settings, options || {});

        this[""] = {};						
        this.apiUrl = new URL(`${ options.useSSL ? 'https' : 'http' }://${ options.apiRootUrl }/${ options.apiVersion }/${ apiKey }/`);

        DIModule.init(options, [ commonDIModule, coreDIModule, httpDIModule, modules ]);
                
        this.TokenStore = DIModule.kernel.get<ITokenStore>(coreTYPES.ITokenStore);
        this.KeyValue = DIModule.kernel.get<modules.KeyValue.BaasicKeyValueClient>(modules.KeyValue.TYPES.BaasicKeyValueClient);
        


    }
    

    get() {
        console.log('Get called.');
    }

    set () {
        console.log('Set called 3.');
    }
}