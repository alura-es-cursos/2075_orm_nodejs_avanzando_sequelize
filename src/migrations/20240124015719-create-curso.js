'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      fecha_inicio: {
        type: Sequelize.DATEONLY
      },
      categoria_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'categorias',
          key: 'id'
        }
      },
      docente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'personas',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cursos');
  }
};