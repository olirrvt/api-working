const Sequelize = require("sequelize");
const db = require("../connection/db");

const Usuarios = db.define("usuarios", {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false 
    },
    cep: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    rg: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    logado: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: false
    }
}, {
    tablename: 'usuarios',
    timestamps: false
}); 

module.exports = Usuarios;