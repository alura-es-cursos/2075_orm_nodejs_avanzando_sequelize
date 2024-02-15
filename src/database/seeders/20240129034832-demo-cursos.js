'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cursos', [
      {
        titulo: 'API con Express',
        descripcion: 'Curso de API con Express y MongoDB',
        fecha_inicio: '2023-01-01',
        categoria_id: 1,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'SpringBoot',
        descripcion: 'Curso de Java con Spring Framework',
        fecha_inicio: '2023-01-01',
        categoria_id: 2,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Python Web con Django',
        descripcion: 'Curso de aplicações web con Django',
        fecha_inicio: '2023-01-01',
        categoria_id: 3,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Orientação a Objetos con C#',
        descripcion: 'Curso de C#: coleções, arquivos e libs',
        fecha_inicio: '2023-01-01',
        categoria_id: 4,
        docente_id: 6,
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
