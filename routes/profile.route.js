import { Router } from "express";
import verifytoken from "../middlewares/auth.js";
import USER from "../models/user.model.js";

const profileRouter = Router();

profileRouter.get("/profile", verifytoken, async (req, res) => {
  const userId = req._id;

  const userDetails = await USER.findById(userId);

  const { firstname, lastname } = userDetails;

  const welcomeMessage = `Welcome Back ${firstname} ${lastname}`;

  res.json({
    success: true,
    message: welcomeMessage,
  });
});

export default profileRouter;
