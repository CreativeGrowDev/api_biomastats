'use strict';

/// Estou deixando essas duas primeiras migrations como exemplo!
/// Obs. Importante!!! Migrations grava um espaço no tempo da base de dados (não podem ser alteradas nem apagadas)
/// Para qualquer modificação na base de dados deve criar uma nova migrate. Comandos na documentação!!!

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {  
     await queryInterface.createTable('clientes', {
       id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: Sequelize.INTEGER
       },
       nome: {
         type: Sequelize.STRING,
         allowNull: false
       },
       cpf_cnpj:{
         type: Sequelize.STRING,
         allowNull: false
       },
       email:{
         type: Sequelize.STRING
       }        
      
      });
     
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('clientes');
   
  }
};
