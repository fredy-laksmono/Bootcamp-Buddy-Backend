const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/bootcamps/:bootcamp_id', controller.getOneUser)
Router.get('/bootcamps', controller.getUsers)

module.exports = Router
