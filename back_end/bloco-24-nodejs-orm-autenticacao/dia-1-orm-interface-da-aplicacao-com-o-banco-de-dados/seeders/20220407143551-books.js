'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Books', [
      {
        title: 'Eragon',
        author: 'William Colins',
        pageQuantity: 500,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Nome do Vento',
        author: 'Kristen Hopkins',
        pageQuantity: 450,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Books', null, {});
  }
};
