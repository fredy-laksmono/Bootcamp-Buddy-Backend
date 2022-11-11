const { Bootcamps } = require('../models')

const getBootcamps = async (req, res) => {
  try {
    const bootcamps = await Bootcamps.findAll()
    res.send(bootcamps)
  } catch (error) {
    throw error
  }
}

const getOneBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamps.findByPk(req.params.bootcamp_id)
    res.send(bootcamp)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getBootcamps,
  getOneBootcamp
}
