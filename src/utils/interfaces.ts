export interface IStorageCallbackFn {
    (err: any): any
}
export interface IStorageManager{
    store(file:any ,path: string, callback: IStorageCallbackFn): void;
    delete(file:any ,path: string, callback: IStorageCallbackFn): void;
}
export interface IStorageProvider {
    setStorageManager(manger: IStorageManager): IStorageProvider;
    store(file:any, path: string, callback: IStorageCallbackFn): IStorageProvider;
    delete(file:any, path: string, callback: IStorageCallbackFn): IStorageProvider;
}