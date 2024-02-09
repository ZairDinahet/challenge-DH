// Módulos
const express = require("express");
const router = express.Router();
// Controlador
const applicantsController = require("../controllers/applicantsController");

// Rutas

router.get("/", applicantsController.getApplicants);
router.delete("/:id", applicantsController.deleteApplicant);
router.get("/:id", applicantsController.getOneApplicant);
router.post("/", applicantsController.postApplicant);
router.put("/:id", applicantsController.putApplicant);

module.exports = router;
