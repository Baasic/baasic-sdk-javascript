import { extendAs } from 'utility';
import * as m from 'modules';

export class BaasicApp {
    
    public readonly TokenStore: ITokenStore;

    private readonly apiUrl: URL;
    private static readonly settings: IBaasicAppOptions = {
        useSSL: true,
        apiRootUrl: 'api.baasic.com',
        apiVersion: 'v1'
    };

    constructor (private apiKey: string, options?: Partial<IBaasicAppOptions>)
    {
        
        options = extendAs<Readonly<IBaasicAppOptions>>({}, BaasicApp.settings, options);

        this[""] = {};						
        this.apiUrl = new URL(`${ options.useSSL ? 'https' : 'http' }://${ options.apiRootUrl }/${ options.apiVersion }/${ apiKey }/`);
    }
    

    get() {
        console.log('Get called.');
    }

    set () {
        console.log('Set called 3.');
    }
}