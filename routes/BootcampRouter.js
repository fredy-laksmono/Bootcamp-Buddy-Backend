const Router = require('express').Router()
const controller = require('../controllers/BootcampController')

Router.get('/bootcamps/:bootcamp_id', controller.getOneBootcamp)
Router.get('/bootcamps', controller.getBootCamps)

module.exports = Router
