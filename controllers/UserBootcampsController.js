const { UserBootcamps } = require('../models')

const getUserBootcamps = async (req, res) => {
  try {
    const userBootcamps = await UserBootcamps.findAll()
    res.send(userBootcamps)
  } catch (error) {
    throw error
  }
}

const getOneUserBootcamp = async (req, res) => {
  try {
    const userBootcamp = await UserBootcamps.findByPk(
      req.params.userBootcamp_id
    )
    res.send(userBootcamp)
  } catch (error) {
    throw error
  }
}

modeule.exports = {
  getUserBootcamps,
  getOneUserBootcamp
}
