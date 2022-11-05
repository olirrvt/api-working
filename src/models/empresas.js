const Sequelize = require("sequelize");
const db = require("../connection/db");

const Empresas = db.define("empresas", {
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
    cnpj: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    logado: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Empresas;