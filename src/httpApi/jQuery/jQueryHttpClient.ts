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
            const contentType = getHeader(request.headers, 'Content-Type');
            if (contentType && contentType.toLowerCase().indexOf('application/json') !== -1) {
                jqueryParams.data = JSON.stringify(request.data);
            } else {
                jqueryParams.data = request.data;
            }
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

function getHeader(headers: any, key: string): string {
    if (headers) {
        var header = headers[key] || headers[key.toLowerCase()];
        if (Array.isArray(header)) {
            header = header.join(';');
        }
        return header;
    }
    return undefined;
}

function tryConvertToJson(obj) {
    try {
        return JSON.parse(obj);
    } catch (err) {
        return obj;
    }
}


