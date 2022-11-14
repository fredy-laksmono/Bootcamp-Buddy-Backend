'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('bootcamps', 'shortDescription', {
      type: Sequelize.STRING
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('bootcamps', 'shortDescription', {
      type: Sequelize.VARCHAR(255)
    })
  }
}
