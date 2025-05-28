const jwt = require("jsonwebtoken");
// require("dotenv").config();

const authentication = (req, res, next) => {
  const token = req.headers["token"];
  if (!token) {
    return res.status(400).json({
      message: "Please share auth token",
    });
  }

  try {
    const userDetails = jwt.verify(token, process.env.JWT_AUTH);
    req.user = userDetails;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Invalid or expired token.",
    });
  }
};

module.exports = authentication;
