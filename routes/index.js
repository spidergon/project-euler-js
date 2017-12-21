const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const problemController = require('../controllers/problemController');

// Do work here
router.get('/', mainController.mainPage);
router.get('/problems', mainController.mainPage);
router.get('/problems/:id', problemController.problemPage);

module.exports = router;
