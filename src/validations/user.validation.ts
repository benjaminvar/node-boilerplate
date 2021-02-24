import express, { NextFunction } from "express";
import Joi from "joi";
import { IUser } from "../models/user";
import { UserService } from "../services/users";

export class UserValidation {
    
    static async createUserValidate(req: express.Request, res: express.Response, next: NextFunction): Promise<void> {
        const userSchema = Joi.object<IUser>({
            email: Joi.string().email({minDomainSegments: 2}),
            password: Joi.string().min(8).max(32)
        });
        const validationResult = userSchema.validate(req.body);
        if (validationResult.error) {
            res.status(400).send(validationResult.error);
        }
        const user: IUser = validationResult.value;
       
        if(!(await UserService.isEmailUnique(user.email))) {
            res.status(400).send("Email is not unique");
        }
        next();
    }
}