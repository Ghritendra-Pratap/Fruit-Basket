const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.get("Authorization");
  
  if (!token) {
    return res.status(400).send("TOKEN not found");
  }
  try {
    const user = jwt.verify(token, `${process.env.JWT_SECRETKEY}`);
    req.user = user;
    console.log("token: ", req.user)
    next();
  } catch (error) {
    res.status(401).send("Unauthorized: Invalid token");
  }
};

const verifyUser = async (req, res, next) => {
  
  await verifyToken(req, res, () => {
    if (req.user) {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        console.log("req.params missing")
        res.status(403).send("Forbidden: User not authorized");
      }
    } else {
      res.status(401).send("Unauthorized: Invalid token");
    }
  });
};

const verifyAdmin = async (req, res, next) => {
  await verifyToken(req, res, () => {
    if (req.user) {
      if (req.user.isAdmin) {
        next();
      }
    } else {
      console.log("no req.user");
    }
  });
};

module.exports = { verifyToken, verifyUser, verifyAdmin };
