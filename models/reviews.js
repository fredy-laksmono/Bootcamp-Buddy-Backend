'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reviews.belongsTo(models.User, { foreignKey: 'userId' })
      Reviews.belongsTo(models.Bootcamps, { foreignKey: 'bootcampId' })
    }
  }
  Reviews.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },

      bootcampId: DataTypes.INTEGER,
      content: DataTypes.STRING,
      rating: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Reviews',
      tableName: 'reviews'
    }
  )
  return Reviews
}
