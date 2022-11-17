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

module.exports = {
  getUserBootcamps,
  getOneUserBootcamp,
  joinBootcamp
};
