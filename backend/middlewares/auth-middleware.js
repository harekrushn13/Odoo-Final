const jwt = require("jsonwebtoken");
const { err405 } = require("../utils/response-utils");
const { CustomError } = require("../utils/router-utils");

function authMiddleware(role) {
  return (req, res, next) => {
    if (!req.headers.authorization) {
      throw new CustomError("Authorisation token missing", 405);
    }
    const token = req.headers.authorization.split(" ")[1];
    let userData = null;
    try {
      userData = jwt.verify(token, process.env.JWT_SECRET_CODE);
      //   console.log("\x1b[32m%s\x1b[0m", "{");
      //   console.log("\x1b[34m%s\x1b[0m", "  email : " + userData.email);
      //   console.log("\x1b[32m%s\x1b[0m", "}");
    } catch (error) {
      err405(res);
      return;
    }
    if (userData.role !== role) {
      err405(res);
      return;
    }
    res.locals.userData = userData;
    next();
  };
}
module.exports = { authMiddleware };
