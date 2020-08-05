require("dotenv-safe").config();
const jwt = require("jsonwebtoken");
const { config } = require("dotenv-safe");

module.exports = {
  verifyJWT(req, res, next) {
    var token = req.headers.token;
    if (!token) 
    return res.status(401).json({ auth: false, message: 'No token provided.' });
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) 
        return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      req.userId = decoded.id;
      next();
    });
    
    



  },
};
