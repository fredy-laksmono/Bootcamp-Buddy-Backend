const Router = require('express').Router()
const controller = require('../controllers/UserBootcampsController')

Router.get('/userbootcamps', controller.getUserBootcamps)

module.exports = Router
