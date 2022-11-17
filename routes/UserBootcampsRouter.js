const Router = require("express").Router();
const controller = require("../controllers/UserBootcampsController");

Router.get("/", controller.getUserBootcamps);
Router.post("/:bootcamp_id", controller.joinBootcamp);

module.exports = Router;
