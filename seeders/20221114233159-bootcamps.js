"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let bootcampList = [
      {
        name: "General Assembly",
        website:
          "https://generalassemb.ly/education/software-engineering-immersive-remote",
        location: "New, NY",
        remote: true,
        shortDescription:
          "Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired.",
        description:
          "Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hack Reactor",
        website: "https://www.hackreactor.com/",
        location: "Austin, TX",
        remote: true,
        shortDescription:
          "Our coding bootcamps are challenging, life-changing, and designed to fit your schedule and skill level.",
        description:
          "Moved by our belief that more people should have the opportunity to pursue this fulfilling career path, we launched a new, 19-week immersive bootcamp designed for those with zero coding experience.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tech Elevator",
        website:
          "https://www.techelevator.com/locations/coding-bootcamp-dallas-texas/?gclid=Cj0KCQiA37KbBhDgARIsAIzce15rr7iZ1AgxVpJCU8nFSuZZ7haOvAaoruZXQ8n_s9ejm3FdM-eCafoaAoBPEALw_wcB",
        location: "Dallas, TX",
        remote: false,
        shortDescription:
          "Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired.",
        description:
          "Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    await queryInterface.bulkInsert("bootcamps", bootcampList);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bootcamps");
  }
};
