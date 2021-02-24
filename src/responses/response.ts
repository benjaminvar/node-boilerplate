export enum EResponseType {
    FAIL = "fail",
    ERROR = "error",
    SUCCESS = "success"
}
export interface IAPIResponse {
    status: EResponseType;
    data: any;
    message?: string;
}
export class ErrorResponse implements IAPIResponse {
    status: EResponseType;
    data: any;
    message?: string;
    constructor(status: EResponseType, data?: any, message?: string) {
        this.status = status;
        if (data) {
            this.data = data;
        }
        if (message) {
            this.message = message;
        }
    }
}
export class SuccessResponse implements IAPIResponse {
    readonly status: EResponseType = EResponseType.SUCCESS;
    data: any;
    constructor(data?: any) {
        if (data) {
            this.data = data;
        }
    }
}