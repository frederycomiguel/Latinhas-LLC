const express = require('express');
const demandsController = require('../controllers/demandsController');
const router = express.Router();

router.get('/', demandsController.getAllDemands);
router.post('/', demandsController.createDemand);
router.put('/:id', demandsController.updateDemand);
router.delete('/:id', demandsController.deleteDemand);

module.exports = router;
