import { IStorageCallbackFn, IStorageManager } from "./interfaces";

export class FileUploadedStorageManager implements IStorageManager {
    
    public store(file:any, path: string, callback: IStorageCallbackFn): void {
        file.move(path, callback);
    }
    public delete(file:any, path: string, callback: IStorageCallbackFn): void {
        throw new Error("Method not implemented");
    }
}