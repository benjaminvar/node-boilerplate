import { Model } from "sequelize";
import { DataTypes } from "sequelize";
import { ConnectionSingleton } from "../db";

export interface IUser {
    id: number;
    email: string;
    password: string;
}
export class User implements IUser {
    public id: number;
    public email: string;
    public password: string;
}
export class UserModel extends Model implements IUser {
    public id: number;
    public email: string;
    public password: string;
    constructor(user?: IUser) {
        super();
        if (user) {
            this.id = user.id;
            this.email = user.email;
            this.password = user.password;
        }
    }
}
UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize: ConnectionSingleton.getConnnection(),
    modelName: "user",
    timestamps: false
});
