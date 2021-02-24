import express from "express";
import { UserController } from "../controllers/user.controller";
import { UserValidation } from "../validations/user.validation";

const router = express.Router();
//Routes
router.get("/", (req, res) => {
    res.send("Hello world!");
});
router.post("/user", [UserValidation.createUserValidate] , UserController.createUser);
router.post("/user/avatar", [UserController.avatarUpload]); 
export default router;