// Módulos
const express = require("express");
const router = express.Router();
// Controlador
const professionsController = require("../controllers/professionsController");

// Rutas

router.get("/professions", professionsController.getProfessions);

module.exports = router;
