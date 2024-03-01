// Módulos
const express = require("express");
const router = express.Router();
// Controlador
const usersController = require("../controllers/usersController");
// Rutas
router.post("/", usersController.loginProcess);
router.get("/", usersController.login);
module.exports = router;