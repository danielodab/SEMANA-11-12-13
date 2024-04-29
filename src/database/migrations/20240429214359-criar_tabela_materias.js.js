'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('materias', {
      id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
      },
      materia: {
       allowNull: false,
       type: Sequelize.STRING
     },
      id_curso: {
       allowNull: false,
       type: Sequelize.INTEGER,
       references: {
          model: 'cursos',
          key: 'id'
       },
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE'
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

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('materias');
  }
};
