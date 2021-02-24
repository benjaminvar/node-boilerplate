export class ErrorHandler {
    static handleError(err: Error): void {
        console.log("Error is being handled");
        console.log(err);
    }
}