const Router = require('express').Router()
const controller = require('../controllers/UserBootcampsController')

Router.get('/', controller.getUserBootcamps)

module.exports = Router
