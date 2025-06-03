'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('all_links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      file_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fragment: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.STRING,
        allowNull: false
      },
      info_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shareable_link: {
        type: Sequelize.STRING,
        allowNull: false
      },
      md5_checksum: {
        type: Sequelize.STRING,
        allowNull: false
      },
      source: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      version: {
        type: Sequelize.STRING,
        allowNull: false
      },
      storage: {
        type: Sequelize.STRING,
        allowNull: false
      }
      
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('all_links');

  }
};
