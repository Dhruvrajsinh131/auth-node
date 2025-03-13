import { Router } from "express";
import pingrouter from "./ping.route.js";
import userRouter from "./user.route.js";
import profileRouter from "./profile.route.js";

const routerFactory = Router();

routerFactory.use("/", pingrouter);
routerFactory.use("/", userRouter);
routerFactory.use("/", profileRouter);

export default routerFactory;
