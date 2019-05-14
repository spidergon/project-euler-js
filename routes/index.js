const express = require('express')
const router = express.Router() // eslint-disable-line babel/new-cap
const mainController = require('../controllers/mainController')
const problemController = require('../controllers/problemController')
const { catchErrors } = require('../handlers/errorHandlers')

router.get('/', mainController.mainPage)
router.get('/problems', mainController.mainPage)
router.get('/problems/:id', catchErrors(problemController.problemPage))

module.exports = router
