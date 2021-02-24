import { Sequelize } from "sequelize";
import { ConnectionCreator } from "./connection"; 
import { IConnectionFactory } from "./interfaces";
import providers from "./providers";

export class ConnectionSingleton {
    private static _storedConnection: Sequelize;
    static getConnnection(): Sequelize {
        if (!this._storedConnection) {
            const connectionCreator = new ConnectionCreator();
            const provider = <string>process.env.DB_PROVIDER;
            if(provider === undefined || provider === "" || !providers[provider]) {
                throw new Error("Invalid db provider");
            }
            const factory: IConnectionFactory = providers[provider]();
            connectionCreator.setConnectionFactory(factory);
            this._storedConnection = connectionCreator.createConnection();
        }
        return this._storedConnection;
    }
}