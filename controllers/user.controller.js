import USER, { createUser } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const signupUser = async (req, res) => {
  try {
    const result = await createUser(req.body);

    const token = jwt.sign(
      {
        id: result._id,
        email: result.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, hashedpassword } = req.body;

    const user = await USER.findOne({ email });

    if (!user || !(await user.comparePassword(hashedpassword))) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid Credentials" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res.json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  return res.json({ message: "Logged Out successfully" });
};
