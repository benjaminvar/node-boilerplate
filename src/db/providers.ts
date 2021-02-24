import { MySqlConnectionFactory } from "./factories/mysql.factory";
import { IConnectionFactory } from "./interfaces";
const providers: {[T: string]: () => IConnectionFactory} = {
    mysql: () => new MySqlConnectionFactory(),
};
export default providers;