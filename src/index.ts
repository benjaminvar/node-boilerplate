


import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import "./load-env";
import router from "./routes/routes";
import { ErrorHandler } from "./utils/error-handler";

const app = express();
app.use(helmet());
//Set body parsing middlewares
app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: "tmp/"
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Load routes
app.use("/", router);

//Set global error handling logic
app.use((err: Error) => {
    ErrorHandler.handleError(err);
});
process.on("unhandledRejection", (error: Error) => ErrorHandler.handleError(error));
process.on("uncaughtException", (error: Error) => ErrorHandler.handleError(error));

//Bootstrap app
app.listen(process.env.PORT, () => {
    console.log("Starting in " + process.env.NODE_ENV + " mode");
    console.log("Server started on port: " + process.env.PORT);
});
