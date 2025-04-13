import express from "express";
import routerFactory from "./routes/index.route.js";
import { connectToMongo } from "./configs/connection.js";
import cookieParser from "cookie-parser";
const app = express();
import cors from "cors";
import { config } from "dotenv";
import { env } from "node:process";
config();

app.use(cookieParser());
app.use(
  cors({
    origin: [env.ALLOWED_ORIGIN],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routerFactory);
connectToMongo().then(() => {
  app.listen(env.PORT, () => console.log(`Server running on ${env.PORT}`));
});
