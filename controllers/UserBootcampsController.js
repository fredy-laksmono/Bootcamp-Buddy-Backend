const { UserBootcamp } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const APP_SECRET = process.env.APP_SECRET;

const getUserBootcamps = async (req, res) => {
  try {
    const userBootcamps = await UserBootcamp.findAll();
    res.send(userBootcamps);
  } catch (error) {
    throw error;
  }
};

const getOneUserBootcamp = async (req, res) => {
  try {
    const userBootcamp = await UserBootcamp.findByPk(
      req.params.userBootcamp_id
    );
    res.send(userBootcamp);
  } catch (error) {
    throw error;
  }
};

const getUserJoinedBootcamp = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    const userBootcampList = await UserBootcamp.findAll({
      where: { userId: userId }
    });
    res.send(userBootcampList);
  } catch (error) {
    throw error;
  }
};

const joinBootcamp = async (req, res) => {
  try {
    let bootcampId = parseInt(req.params.bootcamp_id);
    const token = req.headers["authorization"].split(" ")[1];
    let payload = jwt.verify(token, APP_SECRET);
    let joinDetail = {
      userId: payload.id,
      bootcampId: bootcampId
    };
    let createdUserBootcamp = await UserBootcamp.create(joinDetail);
    res.send(createdUserBootcamp);
  } catch (error) {
    throw error;
  }
};

const leaveBootcamp = async (req, res) => {
  try {
    let bootcampId = parseInt(req.params.bootcamp_id);
    const token = req.headers["authorization"].split(" ")[1];
    let payload = jwt.verify(token, APP_SECRET);
    const bootcamp = await UserBootcamp.findOne({
      where: { userId: payload.id, bootcampId: bootcampId }
    });
    if (bootcamp) {
      await UserBootcamp.destroy({
        where: { bootcampId: bootcampId, userId: payload.id }
      });
      res.send({ message: "User succesfully leave the bootcamp" });
    } else {
      res.send({ message: "User is not the member of the bootcamp" });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserBootcamps,
  getOneUserBootcamp,
  getUserJoinedBootcamp,
  joinBootcamp,
  leaveBootcamp
};
