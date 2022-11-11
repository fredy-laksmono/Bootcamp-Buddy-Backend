const { Users } = require('../models')

const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const getOneUser = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.user_id)
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUsers,
  getOneUser
}
