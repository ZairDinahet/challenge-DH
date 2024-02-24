// Módulos
const express = require("express");
const router = express.Router();
// Controlador
const companiesController = require("../controllers/companiesController");

// Rutas
router.get("/search/:name", companiesController.getCompaniesName);
router.get("/", companiesController.getCompanies);

module.exports = router;
