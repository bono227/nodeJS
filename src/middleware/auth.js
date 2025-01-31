const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized, sign in" });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id } = decoded;

    req.user = { id };
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token hahah" });
  }
};

module.exports = authMiddleware;
