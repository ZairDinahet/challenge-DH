const { Router } = require('express');
const applicantsControllers = require('../controllers/applicantsControllers')
const router = Router();

router.get('/', applicantsControllers.index);


module.exports = router;
