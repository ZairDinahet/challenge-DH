// Módulos
const express = require("express");
const router = express.Router();
// Controlador
const applicantsController = require("../controllers/applicantsController");

// Rutas

router.get("/applicants", applicantsController.getApplicants);
router.delete("/applicants/:id", applicantsController.deleteApplicant);
router.get("/applicants/:id", applicantsController.getOneApplicant);
router.post("/applicants", applicantsController.postApplicant);
router.put("/applicants/:id", applicantsController.putApplicant);

module.exports = router;
