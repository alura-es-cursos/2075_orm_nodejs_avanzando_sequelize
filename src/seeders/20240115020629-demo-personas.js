'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('personas', [
      {
        nombre: 'Solange Estudiante',
        email: 'solange@email.com',
        dni: '63058133022',
        activo: true,
        rol: 'estudiante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Igor Estudiante',
        email: 'igor@email.com',
        dni: '99018205028',
        activo: true,
        rol: 'estudiante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Aline Estudiante',
        email: 'aline@email.com',
        dni: '92797497066',
        activo: true,
        rol: 'estudiante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Fernando Estudiante',
        email: 'fernando@email.com',
        dni: '17195730000',
        activo: true,
        rol: 'estudiante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Ricardo Docente',
        email: 'ricardo@email.com',
        dni: '06946507061',
        activo: true,
        rol: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Dine Docente',
        email: 'dine@email.com',
        dni: '80941142078',
        activo: true,
        rol: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
