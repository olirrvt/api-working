const express = require("express");
const usuarioRouter = express.Router()
// Import Controllers
const inserindoUsuarioController = require("../controllers/usuarios/inserindoUsuario");
const { pegandoUsuarioController, pegandoUsuarioIdController } = require("../controllers/usuarios/pegandoUsuario");
const editandoUsuarioController = require("../controllers/usuarios/alterandoUsuario");
const deletandoUsuarioController = require("../controllers/usuarios/deletandoUsuario");
const logoutUserController = require("../controllers/usuarios/logout");
const loginUserController = require("../controllers/usuarios/login");

// POST
usuarioRouter.post("/newUser", inserindoUsuarioController);
usuarioRouter.post("/login", loginUserController)
// GET
usuarioRouter.get("/findUser", pegandoUsuarioController);
usuarioRouter.get("/findUser/:id", pegandoUsuarioIdController);
// PUT
usuarioRouter.put("/editusuario/:id", editandoUsuarioController);
usuarioRouter.put("/logoutUser/:id", logoutUserController)
// DELETE
usuarioRouter.delete("/deleteUser/:id", deletandoUsuarioController)

module.exports = usuarioRouter;