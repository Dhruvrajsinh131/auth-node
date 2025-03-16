import { Router } from "express";

const pingrouter = Router();

pingrouter.get("/ping", (_, res) => {
  return res.json({
    success: true,
    message: "Pong!!!",
  });
});

export default pingrouter;
