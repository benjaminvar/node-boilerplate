import { IUser, UserModel } from "../../models/user";

export class UserService{
    static async isEmailUnique(email: string): Promise<boolean> {
        const user = await UserModel.findOne({
            where: {
                email
            }
        });
        return user === null;
    }
    static async createUser(user: IUser): Promise<void> {
        const userModel = new UserModel(user);
        await userModel.save();
    }
}