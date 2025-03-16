import { Router } from "express";
import { signin, signupUser, logout } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/signup", signupUser);
userRouter.post("/signin", signin);
userRouter.post("/logout", logout);

export default userRouter;
