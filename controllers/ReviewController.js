const { Review } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const APP_SECRET = process.env.APP_SECRET;

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.send(reviews);
  } catch (error) {
    throw error;
  }
};

const getBootcampReviews = async (req, res) => {
  try {
    let bootcampId = parseInt(req.params.bootcamp_id);
    const review = await Review.findAll({ where: { bootcampId: bootcampId } });
    res.send(review);
  } catch (error) {
    throw error;
  }
};

const isAllowCreateReview = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let bootcampId = parseInt(req.params.bootcamp_id);
    const review = await Review.findOne({
      where: { userId: userId, bootcampId: bootcampId }
    });
    if (review) {
      res.send(false);
    } else {
      res.send(true);
    }
  } catch (error) {
    throw error;
  }
};

const addReview = async (req, res) => {
  try {
    let bootcampId = parseInt(req.params.bootcamp_id);
    let userId = parseInt(req.params.user_id);
    let reviewContent = {
      bootcampId,
      userId,
      ...req.body
    };
    let review = await Review.create(reviewContent);
    res.send(review);
  } catch (error) {
    throw error;
  }
};

const updateReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id);
    const token = req.headers["authorization"].split(" ")[1];
    try {
      let payload = jwt.verify(token, APP_SECRET);
      let updatedReview = await Review.update(req.body, {
        where: { id: reviewId, userId: payload.id },
        returning: true
      });
      res.send(updatedReview);
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

const deleteReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id);
    await Review.destroy({ where: { id: reviewId } });
    res.send({ message: `Deleted review with ID of ${reviewId}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getReviews,
  getBootcampReviews,
  addReview,
  updateReview,
  deleteReview,
  isAllowCreateReview
};
