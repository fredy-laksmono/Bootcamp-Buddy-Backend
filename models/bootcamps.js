'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Bootcamps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bootcamps.belongsToMany(models.Users, {
        as: 'bootcamp',
        through: models.UserBootcamps,
        foreignKey: 'bootcampId'
      })
    }
  }
  Bootcamps.init(
    {
      name: DataTypes.STRING,
      website: DataTypes.STRING,
      location: DataTypes.STRING,
      remote: DataTypes.BOOLEAN,
      shortDescription: DataTypes.VARCHAR(255),
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Bootcamps',
      tableName: 'bootcamps'
    }
  )
  return Bootcamps
}
