const Router = require('express').Router()
const controller = require('../controllers/BootcampController')

Router.get('/:bootcamp_id', controller.getOneBootcamp)
Router.get('/', controller.getBootcamps)

module.exports = Router
