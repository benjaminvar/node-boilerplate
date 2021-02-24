import { IStorageProvider, IStorageCallbackFn, IStorageManager } from "./interfaces";

export class StorageProvider implements IStorageProvider {
    private _storageManager: IStorageManager;
    constructor(storageManager?: IStorageManager) {
        if (storageManager) {
            this._storageManager = storageManager;
        }
    }
    public setStorageManager(manager: IStorageManager): IStorageProvider {
        this._storageManager = manager;
        return this;
    }
    public store(file:any, path: string, callback: IStorageCallbackFn): IStorageProvider {
        if (!this._storageManager) {
            throw new Error("StorageManager has not been set");
        }
        this._storageManager.store(file, path, callback);
        return this;
    }
    public delete(file:any, path: string, callback: IStorageCallbackFn): IStorageProvider {
        if (!this._storageManager) {
            throw new Error("StorageManager has not been set");
        }
        this._storageManager.delete(file, path, callback);
        return this;
    }
}