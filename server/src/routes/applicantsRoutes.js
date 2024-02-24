// Módulos
const express = require("express");
const router = express.Router();
const upload = require('../middlewares/applicantsMulter')
// Controlador
const applicantsController = require("../controllers/applicantsController");

// Rutas

router.get("/", applicantsController.getApplicants);
router.delete("/:id", applicantsController.deleteApplicant);
router.get("/:id", applicantsController.getOneApplicant);
router.post("/", upload.single('img'), applicantsController.postApplicant);
router.put("/:id", applicantsController.putApplicant);

module.exports = router;
