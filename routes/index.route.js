import { Router } from "express";
import pingrouter from "./ping.route.js";
import userRouter from "./user.route.js";
import profileRouter from "./profile.route.js";
import notesRouter from "./note.route.js";
import verifytoken from "../middlewares/auth.js";

const routerFactory = Router();

routerFactory.use("/", pingrouter);
routerFactory.use("/", userRouter);
routerFactory.use("/", profileRouter);
routerFactory.use("/notes", verifytoken, notesRouter);

export default routerFactory;
