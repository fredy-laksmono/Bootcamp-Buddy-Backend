const Router = require("express").Router();
const controller = require("../controllers/ReviewController");
const middleware = require("../middleware");

Router.get("/:bootcamp_id", controller.getBootcampReviews);
Router.get("/", controller.getReviews);
Router.post(
  "/:user_id/:bootcamp_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.addReview
);
Router.put(
  "/:user_id/:review_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateReview
);
Router.delete(
  "/:user_id/:review_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteReview
);

module.exports = Router;
