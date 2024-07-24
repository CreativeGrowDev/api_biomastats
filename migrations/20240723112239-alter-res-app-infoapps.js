'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableExists = await queryInterface.describeTable('res_app').then(() => true).catch(() => false);

    if (tableExists) {
      const columns = await queryInterface.describeTable('res_app');
      if (!columns.requester_ip) {
        await queryInterface.addColumn('res_app', 'requester_ip', {
          type: Sequelize.STRING(45),
          allowNull: true
        });
      }
      if (!columns.request_application) {
        await queryInterface.addColumn('res_app', 'request_application', {
          type: Sequelize.STRING(255),
          allowNull: true
        });
      }
    }
  },

  async down(queryInterface, Sequelize) {
    const tableExists = await queryInterface.describeTable('res_app').then(() => true).catch(() => false);

    if (tableExists) {
      const columns = await queryInterface.describeTable('res_app');
      if (columns.requester_ip) {
        await queryInterface.removeColumn('res_app', 'requester_ip');
      }
      if (columns.request_application) {
        await queryInterface.removeColumn('res_app', 'request_application');
      }
    }
  }
};
