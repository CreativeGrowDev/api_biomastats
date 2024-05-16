const Sequelize = require('sequelize');
const database = require('../db');

const Clientes = database.define(
    'clientes',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cpf_cnpj: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING
        },
        telefone: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }
);

module.exports = Clientes;