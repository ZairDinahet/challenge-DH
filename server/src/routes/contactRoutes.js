// Módulos
const express = require("express");
const router = express.Router();
// Controlador
const contactController = require("../controllers/contactController");

// Rutas

router.post("/", contactController.postContact);

module.exports = router;