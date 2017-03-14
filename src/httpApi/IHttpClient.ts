import { IHttpRequest, IHttpResponse } from 'httpApi';

export interface IHttpClient {
    request: <ResponseType>(request: IHttpRequest) => PromiseLike<IHttpResponse<ResponseType>>,
    createPromise: <TData>(deferFn: (resolve: (data?: TData | undefined) => void, reject: (data?: any) => void) => void) => PromiseLike<TData>
}