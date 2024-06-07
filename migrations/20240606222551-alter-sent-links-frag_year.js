'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const tableExists = await queryInterface.describeTable('sent-links').then(() => true).catch(() => false);

    if (tableExists) {
      const columns = await queryInterface.describeTable('sent-links');
      if (!columns.fragment) {
        await queryInterface.addColumn('sent-links', 'fragment', {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null
        });
      }
      if (!columns.year) {
        await queryInterface.addColumn('sent-links', 'year', {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null
        });
      }
    }
  },

  async down(queryInterface, Sequelize) {
    const tableExists = await queryInterface.describeTable('sent-links').then(() => true).catch(() => false);

    if (tableExists) {
      const columns = await queryInterface.describeTable('sent-links');
      if (columns.fragment) {
        await queryInterface.removeColumn('sent-links', 'fragment');
      }
      if (columns.year) {
        await queryInterface.removeColumn('sent-links', 'year');
      }
    }
  }
};
