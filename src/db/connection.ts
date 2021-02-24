import { Sequelize } from "sequelize";
import { IConnectionCreator, IConnectionFactory } from "./interfaces";

export class ConnectionCreator implements IConnectionCreator {
    private _connectionFactory: IConnectionFactory;
    setConnectionFactory(connectionFactory: IConnectionFactory): void {
        this._connectionFactory = connectionFactory;
    }
    createConnection(): Sequelize {
        return this._connectionFactory.createConnection();
    }
}