import {IHttpHeaders,IHttpRequest,IHttpResponse,IHttpClient} from 'httpApi';

declare var $: any;

var client: IHttpClient;

client = <ResponseType>(request: IHttpRequest): PromiseLike<IHttpResponse<ResponseType>> => 
{
    var jqueryParams: any = {
        method: request.method,
        xhrFields: {
            withCredentials: true
        }
    };

    if (request.headers) {
        jqueryParams.headers = request.headers;
    }

    if (request.body) {
        jqueryParams.data = request.body;
    }

    return $.ajax(request.url.toString(), jqueryParams)
        .then((data, textStatus, jqXHR) => {
            return <IHttpResponse<ResponseType>>{
                statusText: textStatus,
                statusCode: jqXHR.status,
                headers: jqXHR.getAllResponseHeaders(),
                body: data
            };
        },
        (jqXHR, textStatus, errorThrown) => {
            return <IHttpResponse<ResponseType>>{
                statusText: textStatus,
                statusCode: jqXHR.status,
                headers: jqXHR.getAllResponseHeaders(),
                body: jqXHR.responseText || jqXHR.responseXML
            };
        });
};


export { client };

