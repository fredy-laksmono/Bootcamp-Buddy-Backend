'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('reviews', 'content', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('reviews', 'content', {
      type: Sequelize.STRING
    })
  }
}
