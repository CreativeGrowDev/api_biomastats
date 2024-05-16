'use strict';
/// Estou deixando essas duas primeiras migrations como exemplo!
/// Obs. Importante!!! Migrations grava um espaço no tempo da base de dados (não podem ser alteradas nem apagadas)
/// Para qualquer modificação na base de dados deve criar uma nova migrate. Comandos na documentação!!!

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {  
     await queryInterface.createTable('logs', {
       id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: Sequelize.INTEGER
       },
       url: {
         type: Sequelize.STRING,
         allowNull: true
       },
       service:{
         type: Sequelize.STRING,
         allowNull: true
       },
       ip:{
         type: Sequelize.STRING
       },
       created_at:{
         type: Sequelize.DATE
       },
       updated_at:{
         type: Sequelize.DATE
       },
       user_agent:{
         type: Sequelize.STRING,
         allowNull: true
       },
       referer:{
         type: Sequelize.STRING,
         allowNull: true
       }
      
      });
     
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('logs');
   
  }
};
