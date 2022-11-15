'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let bootcampList = [
      // {
      //   name: 'General Assembly',
      //   website:
      //     'https://generalassemb.ly/education/software-engineering-immersive-remote',
      //   location: 'New, NY',
      //   remote: false,
      //   shortDescription:
      //     'Become invaluable in our tech-driven world. Meet the global demand for problem-solvers with strong technical foundations and the agility to keep learning.',
      //   description:
      //     'Your best course for career transformation in tech. This full-time online coding bootcamp features expert instruction, one-on-one career coaching, and connections to top employers to get you hired.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Hack Reactor',
      //   website: 'https://www.hackreactor.com/',
      //   location: 'Austin, TX',
      //   remote: true,
      //   shortDescription:
      //     'Our coding bootcamps are challenging, life-changing, and designed to fit your schedule and skill level.',
      //   description:
      //     'Moved by our belief that more people should have the opportunity to pursue this fulfilling career path, we launched a new, 19-week immersive bootcamp designed for those with zero coding experience.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Tech Elevator',
      //   website:
      //     'https://www.techelevator.com/locations/coding-bootcamp-dallas-texas/?gclid=Cj0KCQiA37KbBhDgARIsAIzce15rr7iZ1AgxVpJCU8nFSuZZ7haOvAaoruZXQ8n_s9ejm3FdM-eCafoaAoBPEALw_wcB',
      //   location: 'Dallas, TX',
      //   remote: true,
      //   shortDescription:
      //     'Our outcomes lead the coding bootcamp industry, with in-person and online courses, expert career prep, and instructors who teach from experience.',
      //   description:
      //     'There is enormous demand for technology talent from a thriving business community in Dallas. At Tech Elevator, we empower our Dallas coding bootcamp students by teaching them the technical skills and professional mindset needed to make a big career change.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Flatiron',
      //   website: 'https://flatironschool.com/courses/coding-bootcamp/',
      //   location: 'New York, NY',
      //   remote: true,
      //   shortDescription:
      //     'Jump Start Your Software Engineering Career. Become a Software Engineer in as little as 15 weeks.',
      //   description:
      //     'Whether you have zero coding knowledge, are self-taught, or are somewhere in between, this course is for you. Our course takes you from foundational skills to advanced, practical knowledge in as little as 15 weeks.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      // {
      //   name: 'Coding Temple',
      //   website: 'https://codingtemple.com/',
      //   location: 'Chicago, IL',
      //   remote: true,
      //   shortDescription:
      //     'Change your life in 10 weeks. Coding Temple is the top-rated Online Software Engineering, Python, and Data Bootcamp',
      //   description:
      //     'Coding Temples 10 week full-stack developer course delivers you with the tools necessary to build and deploy the web applications and data analytics of your dreams. The course focuses on making sure that real world applications are happening in real-time, hands-on experience.',
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
      {
        name: 'Springboard',
        website: 'https://www.springboard.com/',
        location: 'San Francisco, CA',
        remote: true,
        shortDescription:
          "Time to make the career change you've always wanted. Our graduates have been hired by the biggest names in tech.",
        description:
          'Become a full stack developer on your schedule with our flexible, remote program. Graduate in just 9 months and land your dream job.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'MIT xPro',
        website:
          'https://executive-ed.xpro.mit.edu/professional-certificate-coding',
        location: 'Cambridge, MA',
        remote: true,
        shortDescription:
          'Professional Certificate in Coding. Gain hands-on coding skills, for a competitive market edge.',
        description:
          "MIT xPRO's online learning programs leverage vetted content from world-renowned experts to make learning accessible anytime, anywhere.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'App Academy',
        website: 'https://www.appacademy.io/',
        location: 'San Francisco, CA',
        remote: true,
        shortDescription:
          'We are engineers and educators. We know the skills that make a solid programmer and how to teach them to you.',
        description:
          "We're experts at training people with zero coding experience and turning them into high-earning software engineers.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'University of Texas at Austin',
        website:
          'https://techbootcamps.utexas.edu/coding/landing-full/?heclid=ac7196cf-ab63-4c3f-8387-71dea1f029f8',
        location: 'Austin, TX',
        remote: true,
        shortDescription: 'Propel Your Career as a Web Developer.',
        description:
          'We are dedicated to helping you succeed. We will support your learning journey with unparalleled services and resources.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('bootcamps', bootcampList)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps')
  }
}
