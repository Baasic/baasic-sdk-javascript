import { IException } from 'common/contracts';

export interface IResponse {
    details: string,
    error: IException,
    errorCode: number,
    message: string,
    response: Object,
    statusCode: string
}