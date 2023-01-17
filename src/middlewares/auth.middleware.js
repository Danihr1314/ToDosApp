const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers;
  token = token.replace("Bearer ", "");
  jwt.verify(token, "Firma1", { algorithms: "HS512" }, (err, decoded) => {
    if (err) {
      res.status(400).json({
        error: "invalid token",
        message: "El token no es valido",
      });
    } else {
      console.log(decoded);
      next();
    }
  });
  console.log(token);
};

module.exports = authMiddleware;
