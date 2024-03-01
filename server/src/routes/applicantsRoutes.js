// Módulos
const express = require("express");
const router = express.Router();
const upload = require('../middlewares/applicantsMulter')

// Controlador
const applicantsController = require("../controllers/applicantsController");

// Rutas

router.get("/", applicantsController.getApplicants);
router.get("/search/:nameFull", applicantsController.getOneApplicantName);
router.delete("/:id", applicantsController.deleteApplicant);
router.get("/:id", applicantsController.getOneApplicant);
router.post("/", upload.single('image'), applicantsController.postApplicant);
router.put("/:id", applicantsController.putApplicant);

module.exports = router;
