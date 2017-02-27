export interface IException {
    ClassName: string,
    Message: string,
    Data: Object,
    InnerException: Object,
    HelpUrl: string,
    StackTraceString: string,
    RemoteStackTraceString: string,
    RemoteStackTraceIndex: number,
    ExceptionMethod: any,
    HResult: number,
    Source: string,
    WatsonBuckets: any,
    targetSite: Object,
    stackTrace: string,
    helpLink: string
}