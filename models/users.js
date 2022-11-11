'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsToMany(models.Bootcamps, {
        as: 'users',
        through: models.UserBootcamps,
        foreignKey: 'userId'
      })
    }
  }
  Users.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Users',
      tableName: 'users'
    }
  )
  return Users
}
