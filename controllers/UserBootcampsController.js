const { UserBootcamp } = require('../models')

const getUserBootcamps = async (req, res) => {
  try {
    const userBootcamps = await UserBootcamp.findAll()
    res.send(userBootcamps)
  } catch (error) {
    throw error
  }
}

const getOneUserBootcamp = async (req, res) => {
  try {
    const userBootcamp = await UserBootcamp.findByPk(req.params.userBootcamp_id)
    res.send(userBootcamp)
  } catch (error) {
    throw error
  }
}

// const createUserBootcamp = async (req, res) => {
//   try {
//     let bootcampId = parseInt(req.params.bootcamp_id)
//     let userId = parseInt(req.params.user_id)
//     let userBootcamp = {
//       bootcampId,
//       userId,
//       ...req.body
//     }
//     let = await UserBootcamp.create(userBootcamp)
//     res.send(userBootcamp)
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  getUserBootcamps,
  getOneUserBootcamp
}
