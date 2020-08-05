const express = require("express");

const UsuarioController = require("./controllers/usuarioController");

const routes = express.Router();

const verifyJWT = require("../auth/index");
const usuarioController = require("./controllers/usuarioController");

routes.get("/usuario", verifyJWT.verifyJWT, usuarioController.index)

routes.post("/createe", verifyJWT.verifyJWT, usuarioController.create)

routes.post("/login",  UsuarioController.login);

routes.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
});

module.exports = routes;