const connection = require("../../database/index");

require("dotenv-safe").config();
const jwt = require("jsonwebtoken");
module.exports = {
  async index(request, response) {
    const usuario = await connection("usuario").select("*");
    return response.json(usuario);
  },

  async login(request, response) {
    const senha = request.body.senha;
    const login = request.body.login;

    const logar = await connection("usuario")
      .where("login", login)
      .where("senha", senha)
      .select("id");

    if (logar == "") {
      response.status(500).json({ message: "Login inválido!" });
    } else {
      var token = jwt.sign({ logar }, process.env.SECRET, {
        expiresIn: 3000000, // expires in 5min
      });

      response.status(200).json({ auth: true, token: token, logar: logar });
    }
  },

  async create(request, response) {
    const login = request.body.login,
      senha = request.body.senha;

    const logar = await connection("usuario")
      .where("login", login)
      .select("id");

    if (logar == "") {
      const [id] = await connection("usuario").insert({
        login,
        senha,
      });

      return response.status(200).json({ status: "cadastrado" });
    } else {
      response.status(401).json({ status: "não pode" });
    }
  },
};
