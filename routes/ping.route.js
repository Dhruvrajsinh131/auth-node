import { Router } from "express";

const pingrouter = Router();

pingrouter.get("/ping", (_, res) => {
  res.json({
    success: true,
    message: "Pong!!!",
  });
});

export default pingrouter;
