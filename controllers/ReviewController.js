const { Reviews } = require('../models')

const getReviews = async (req, res) => {
  try {
    const reviews = await Reviews.findAll()
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const getOneReview = async (req, res) => {
  try {
    const review = await Reviews.findByPk(req.params.review_id)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const addReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    let ownerId = parseInt(req.params.user_id)
    let reviewContent = {
      reviewId,
      ownerId,
      ...req.body
    }
    let review = await Reviews.create(reviewContent)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const updateReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    let updatedReview = await Reviews.update(req.body, {
      where: { id: reviewId },
      returning: true
    })
    res.send(updatedReview)
  } catch (error) {
    throw error
  }
}

const deleteReview = async (req, res) => {
  try {
    let reviewId = parseInt(req.params.review_id)
    await Reviews.destroy({ where: { id: reviewId } })
    res.send({ message: `Deleted review with ID of ${reviewId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getReviews,
  getOneReview,
  addReview,
  updateReview,
  deleteReview
}
