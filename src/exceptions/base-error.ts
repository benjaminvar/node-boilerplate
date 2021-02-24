import { IAPIResponse } from "../responses/response";
import { HTTPStatusCode } from "../responses/status-codes";

export class BaseError extends Error {
    message: string;
    statusCode: HTTPStatusCode;
    response: IAPIResponse;
    constructor(statusCode: HTTPStatusCode, response: IAPIResponse) {
        super();
        this.statusCode = statusCode;
        this.response = response;

    }
}