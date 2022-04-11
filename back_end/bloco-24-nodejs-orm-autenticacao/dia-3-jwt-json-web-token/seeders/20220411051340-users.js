'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'maria123',
          password: 'querida567',
        },
        {
          username: 'caio75',
          password: 'digimon',
        },
        {
          username: 'admin',
          password: 's3nh4S3gur4???',
        },
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
