interface IBaasicAppOptions
{
    useSSL: boolean,
    apiRootUrl: string
    apiVersion: string 
}

type TokenType = "access" | "refresh";

interface IToken
{
    expireTime?: Date
    token: string,
    type: TokenType
}

interface ITokenStore
{
    store(token: IToken): void,
    get(type?: TokenType): IToken
}

interface IHttpHeaders
{
    [key: string]: string;
}

interface IHttpRequest
{
    headers?: IHttpHeaders,
    url: URL,
    method: string
    body?: any; 
}

interface IHttpResponse<ReturnType>
{
    headers: IHttpHeaders,
    statusCode: number,
    statusText: string,
    body: ReturnType

}

interface IHttpClient
{
    <ResponseType>(request: IHttpRequest): PromiseLike<IHttpResponse<ResponseType>>
}