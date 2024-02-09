// Módulos
const express = require("express");
const router = express.Router();
// Controlador
const professionsController = require("../controllers/professionsController");

// Rutas

router.get("/", professionsController.getProfessions);

module.exports = router;
