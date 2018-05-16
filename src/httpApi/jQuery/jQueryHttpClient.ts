import { IHttpHeaders, IHttpRequest, IHttpResponse, IHttpClient } from '../';
import { injectable } from "inversify";

declare var $: any;

@injectable()
export class JQueryHttpClient implements IHttpClient {
    request<ResponseType>(request: IHttpRequest): PromiseLike<IHttpResponse<ResponseType>> {
        var jqueryParams: any = {
            method: request.method,
            xhrFields: {
                withCredentials: true
            }
        };

        if (request.headers) {
            jqueryParams.headers = request.headers;
        }

        if (request.data) {
            jqueryParams.data = request.data;
        }

        if (request.responseType) {
            jqueryParams.dataType = request.responseType;
        }

        return $.ajax(request.url.toString(), jqueryParams)
            .then((data, textStatus, jqXHR) => {
                return <IHttpResponse<ResponseType>>{
                    request: request,
                    statusText: textStatus,
                    statusCode: jqXHR.status,
                    headers: parseHeaders(jqXHR.getAllResponseHeaders()),
                    data: data
                };
            },
            (jqXHR, textStatus, errorThrown) => {
                throw <IHttpResponse<ResponseType>>{
                    request: request,
                    statusText: textStatus,
                    statusCode: jqXHR.status,
                    headers: parseHeaders(jqXHR.getAllResponseHeaders()),
                    data: tryConvertToJson(jqXHR.responseText) || jqXHR.responseXML
                };
            });
    }

    createPromise<TData>(deferFn: (resolve:(data?: TData | undefined) => void, reject: (data?: any) => void) => void): PromiseLike<TData> {
        let deferred = $.Deferred();
        deferFn(deferred.resolve, deferred.reject);
        return deferred.promise();
    }
}

function parseHeaders(headers: string): IHttpHeaders {
    let result: IHttpHeaders = {};
    if (headers) {
        var arrayOfLines = headers.match(/[^\r\n]+/g);
        for (var i = 0; i < arrayOfLines.length; i++) {
            var line = arrayOfLines[i];
            var keyValue = line.split(':');
            if (keyValue.length === 2) {
                result[keyValue[0]] = keyValue[1].trim();
            } else if (keyValue.length === 1) {
                result[keyValue[0]] = null;
            }
        }
    }
    return result;
}

function tryConvertToJson(obj) {
    try {
        return JSON.parse(obj);
    } catch (err) {
        return obj;
    }
}


