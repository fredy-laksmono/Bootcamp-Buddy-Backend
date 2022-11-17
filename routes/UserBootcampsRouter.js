const Router = require("express").Router();
const controller = require("../controllers/UserBootcampsController");
const middleware = require("../middleware");

Router.get("/", controller.getUserBootcamps);
Router.post(
  "/:bootcamp_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.joinBootcamp
);
Router.get("/:user_id", controller.getUserJoinedBootcamp);
Router.delete("/:bootcamp_id", controller.leaveBootcamp);

module.exports = Router;
