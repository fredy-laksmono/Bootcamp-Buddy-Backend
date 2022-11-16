'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bootcamp.belongsToMany(models.User, {
        as: 'bootcamp',
        through: models.UserBootcamp,
        foreignKey: 'bootcampId'
      })
    }
  }
  Bootcamp.init(
    {
      name: DataTypes.STRING,
      website: DataTypes.STRING,
      location: DataTypes.STRING,
      remote: DataTypes.BOOLEAN,
      shortDescription: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Bootcamp',
      tableName: 'bootcamps'
    }
  )
  return Bootcamp
}
