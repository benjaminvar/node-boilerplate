import { Sequelize } from "sequelize/types";

export interface IConnectionFactory {
    createConnection(): Sequelize;
}
export interface IConnectionCreator {
    setConnectionFactory(connectionFactory: IConnectionFactory): void;
}