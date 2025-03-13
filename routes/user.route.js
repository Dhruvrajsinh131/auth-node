import { Router } from "express";
import { signin, signupUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/signup", signupUser);
userRouter.post("/signin", signin);

export default userRouter;
