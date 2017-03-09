import { IHttpHeaders, IHttpRequest, IHttpResponse, IHttpClient } from 'httpApi';

declare var $: any;
let client: IHttpClient = {
    request : request,
    cratePromise: createPromise
}

export { client };

function request<ResponseType>(request: IHttpRequest): PromiseLike<IHttpResponse<ResponseType>> {
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
            return <IHttpResponse<ResponseType>>{
                request: request,
                statusText: textStatus,
                statusCode: jqXHR.status,
                headers: parseHeaders(jqXHR.getAllResponseHeaders()),
                data: jqXHR.responseText || jqXHR.responseXML
            };
        });
}

function createPromise<TData>(deferFn: (resolve:(data: TData) => void, reject: (data: any) => void) => void): PromiseLike<TData> {
    let deferred = $.Deferred();
    deferFn(deferred.resolve, deferred.reject);
    return deferred.promise();
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


