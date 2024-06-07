'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableExists = await queryInterface.describeTable('sent-links').then(() => true).catch(() => false);

    if (tableExists) {
      const columns = await queryInterface.describeTable('sent-links');
      if (!columns.requester_ip) {
        await queryInterface.addColumn('sent-links', 'requester_ip', {
          type: Sequelize.STRING(45),
          allowNull: true
        });
      }
      if (!columns.request_url) {
        await queryInterface.addColumn('sent-links', 'request_url', {
          type: Sequelize.STRING(255),
          allowNull: true
        });
      }
    }
  },

  async down(queryInterface, Sequelize) {
    const tableExists = await queryInterface.describeTable('sent-links').then(() => true).catch(() => false);

    if (tableExists) {
      const columns = await queryInterface.describeTable('sent-links');
      if (columns.requester_ip) {
        await queryInterface.removeColumn('sent-links', 'requester_ip');
      }
      if (columns.request_url) {
        await queryInterface.removeColumn('sent-links', 'request_url');
      }
    }
  }
};
