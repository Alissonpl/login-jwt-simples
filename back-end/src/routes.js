const express = require("express");

const UsuarioController = require("./controllers/usuarioController");

const routes = express.Router();

const verifyJWT = require("../auth/index");

routes.post("/usuario",  UsuarioController.create);

routes.get("/usuario", verifyJWT.verifyJWT, UsuarioController.index);

routes.post("/login", UsuarioController.login);

routes.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
});

//routes.delete("/product/:id", ProductController.delete);

//routes.put("/product/:id", ProductController.update);

//routes.get("/list", ListController.index);

module.exports = routes;