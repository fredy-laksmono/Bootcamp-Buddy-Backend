'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: 'userId' })
      Review.belongsTo(models.Bootcamp, { foreignKey: 'bootcampId' })
    }
  }
  Review.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },

      bootcampId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      content: DataTypes.STRING,
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
