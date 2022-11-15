'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('bootcamps', 'description', {
      type: Sequelize.TEXT
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('bootcamps', 'description', {
      type: Sequelize.STRING
    })
  }
}
