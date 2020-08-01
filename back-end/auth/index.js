require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

module.exports = {
  verifyJWT(req, res, next) {
    

    var token = req.headers['x-acess-token'];
    console.log(token);

    if (!token)
      return res.status(401).json({ auth: false, message: "No token provided." });
     // console.log(res);



    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err)
        return res.status(500).json({ auth: false, message: "Failed to authenticate token." });
        //console.log(res);

      // se tudo estiver ok, salva no request para uso posterior
      //console.log(req.userId = decoded.id);

      next();
    });
  },
};
