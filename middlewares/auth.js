import jwt from "jsonwebtoken";

const verifytoken = (req, res, next) => {
  console.log("req.cookies", req.cookies);

  const token = req.cookies.token;

  console.log("token", token);

  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req._id = decoded.id;
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }

  next();
};

export default verifytoken;
