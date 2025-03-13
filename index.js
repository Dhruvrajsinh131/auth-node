import express from "express";
import routerFactory from "./routes/index.route.js";
import { connectToMongo } from "./configs/connection.js";
import cookieParser from "cookie-parser";
const app = express();
import cors from "cors";
import { config } from "dotenv";
config();

const PORT = 9090;

app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routerFactory);
connectToMongo().then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});
