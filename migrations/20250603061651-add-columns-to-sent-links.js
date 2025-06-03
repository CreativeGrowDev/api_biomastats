'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('sent-links', 'collection', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('sent-links', 'data_type', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('sent-links', 'resolution', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('sent-links', 'source', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('sent-links', 'collection');
    await queryInterface.removeColumn('sent-links', 'data_type');
    await queryInterface.removeColumn('sent-links', 'resolution');
    await queryInterface.removeColumn('sent-links', 'source');
  }
};

