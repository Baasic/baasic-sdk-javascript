import { Utility } from 'common';
import { IBaasicAppOptions } from './';
import { ITokenStore } from 'core';
import { DIModule } from './';

import { injectable, inject, Container } from "inversify";

//import * as m from 'modules';
import * as m from 'modules/keyValue';

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
    //public readonly KeyValue: m.BaasicKeyValueClient;


    constructor (private apiKey: string, options?: Partial<IBaasicAppOptions>)
    {
        console.log('ctor');
        this.utility = new Utility();
        
        options = this.utility.extendAs<Readonly<IBaasicAppOptions>>({}, BaasicApp.settings, options);

        this[""] = {};						
        this.apiUrl = new URL(`${ options.useSSL ? 'https' : 'http' }://${ options.apiRootUrl }/${ options.apiVersion }/${ apiKey }/`);

        //DIModule.kernel.load(m.diModule);

        console.log(m.diModule);

        //console.log(m);
        // for (let mod in m) {
        //     console.log(mod);
        // }

        //console.log(DIModule.modules);
        //DIModule.kernel.load(...DIModule.modules);
                
        //this.KeyValue = DIModule.kernel.get<m.BaasicKeyValueClient>('BaasicKeyValueClient');
        //this.KeyValue = @injector.get<KeyValueClient>();


    }
    

    get() {
        console.log('Get called.');
    }

    set () {
        console.log('Set called 3.');
    }
}