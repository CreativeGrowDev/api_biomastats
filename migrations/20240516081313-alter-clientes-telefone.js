'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize){
    await queryInterface.addColumn('clientes', 'telefone', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null,
      comment: 'Telefone do cliente'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('clientes', 'telefone');
  }
};
