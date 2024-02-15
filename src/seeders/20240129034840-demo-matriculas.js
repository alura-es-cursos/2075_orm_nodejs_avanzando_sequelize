'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('matriculas', [
      {
        estudiante_id: 1,
        curso_id: 1,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudiante_id: 2,
        curso_id: 2,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudiante_id: 3,
        curso_id: 3,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        estudiante_id: 4,
        curso_id: 4,
        status: 'matriculado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('matriculas', null, {});
  }
};
