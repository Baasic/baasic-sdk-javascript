import { IModel } from 'common/contracts';;

export interface IPlatformApplication extends IModel {
    allowAnyOrigin: boolean,
    applicationId: string,
    applicationTitle: string,
    databaseName: string,
    databasePassword: string,
    databaseUserName: string,
    identifier: string,
    instanceName: string,
    isActive: boolean,
    origins: string[]
}