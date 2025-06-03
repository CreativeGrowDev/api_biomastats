'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const table = await queryInterface.describeTable('all_links');

    if (!table.collection) {
      await queryInterface.addColumn('all_links', 'collection', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    }

    if (!table.data_type) {
      await queryInterface.addColumn('all_links', 'data_type', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    }

    if (!table.resolution) {
      await queryInterface.addColumn('all_links', 'resolution', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    }

    if (!table.source) {
      await queryInterface.addColumn('all_links', 'source', {
        type: Sequelize.STRING,
        allowNull: true,
      });
    }
  },

  async down(queryInterface, Sequelize) {
    const table = await queryInterface.describeTable('all_links');

    if (table.collection) {
      await queryInterface.removeColumn('all_links', 'collection');
    }
    if (table.data_type) {
      await queryInterface.removeColumn('all_links', 'data_type');
    }
    if (table.resolution) {
      await queryInterface.removeColumn('all_links', 'resolution');
    }
    if (table.source) {
      await queryInterface.removeColumn('all_links', 'source');
    }
  }
};
