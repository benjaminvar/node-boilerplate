import { Sequelize } from "sequelize";
import { IConnectionFactory } from "../interfaces";
const { DATABASE_NAME, DATABASE_USER, DATABASE_HOST, DATABASE_PASSWORD }: {
    DATABASE_NAME: string, DATABASE_USER: string, DATABASE_HOST: string, DATABASE_PASSWORD: string
} = <any>process.env;

export class MySqlConnectionFactory implements IConnectionFactory {
    createConnection(): Sequelize {
        return new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
            host: DATABASE_HOST,
            dialect: "mysql"
        });
    }
}