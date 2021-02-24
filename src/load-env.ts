import dotenv from "dotenv";

//Load env variables
dotenv.config({ path: process.env.NODE_ENV === "production" ? `${__dirname}/../.env.prod` : `${__dirname}/../.env` });