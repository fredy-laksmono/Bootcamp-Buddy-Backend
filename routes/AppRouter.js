const Router = require("express").Router();
const UserRouter = require("./UserRouter");
const ReviewRouter = require("./ReviewRouter");
const BootcampRouter = require("./BootcampRouter");
const UserBootcampsRouter = require("./UserBootcampsRouter");
const AuthRouter = require("./AuthRouter");

Router.use("/users", UserRouter);
Router.use("/reviews", ReviewRouter);
Router.use("/bootcamps", BootcampRouter);
Router.use("/userbootcamps", UserBootcampsRouter);
Router.use("/auth", AuthRouter);

module.exports = Router;
