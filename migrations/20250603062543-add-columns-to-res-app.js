'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('res_app', 'collection', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('res_app', 'data_type', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('res_app', 'resolution', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('res_app', 'source', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('res_app', 'collection');
    await queryInterface.removeColumn('res_app', 'data_type');
    await queryInterface.removeColumn('res_app', 'resolution');
    await queryInterface.removeColumn('res_app', 'source');
  }
};

