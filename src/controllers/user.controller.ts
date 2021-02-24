import express from "express";
import fileUpload from "express-fileupload";
import { BaseError } from "../exceptions/base-error";

import { EResponseType, ErrorResponse, SuccessResponse } from "../responses/response";
import { HTTPStatusCode } from "../responses/status-codes";
import { UserService } from "../services/users";
import { FileUploadedStorageManager } from "../utils/file-upload-storage-manager";
import { StorageProvider } from "../utils/storage";

export class UserController {
    static async createUser(req: express.Request, res: express.Response): Promise<void> {
        const user = req.body;
        try {
            await UserService.createUser(user);
            res.send(new SuccessResponse(null));
        } catch(err: any) {
            throw new BaseError(HTTPStatusCode.SERVER_ERROR, new ErrorResponse(EResponseType.ERROR, err));
        }
    }
    static async avatarUpload(req: express.Request, res: express.Response): Promise<void> {
        if (req.files && req.files.file) {
            const storage = new StorageProvider();
            const storageManager = new FileUploadedStorageManager();
            storage.setStorageManager(storageManager);
            const fileUploaded = <fileUpload.UploadedFile>req.files.file;
            const path = __dirname + "/../../storage/" + fileUploaded.name;
            storage.store(fileUploaded, path, (err) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.send("File uploaded!");
            });
        } 
    }
}