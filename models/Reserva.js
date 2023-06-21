// TODO: Crear modelo de datos de Reserva
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('reserva', {
        cod_reserva: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    })
}