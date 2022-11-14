"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserBootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  UserBootcamp.init(
    {
      bootcampId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "bootcamps",
          key: "id"
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id"
        }
      }
    },
    {
      sequelize,
      modelName: "UserBootcamp",
      tableName: "user_bootcamps"
    }
  );
  return UserBootcamp;
};
