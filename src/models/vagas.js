const Sequelize = require("sequelize");
const db = require("../connection/db");

const Vagas = db.define("vagas", {
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
    cargo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    salario: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false 
    },
    localidade: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
    modelo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Vagas;