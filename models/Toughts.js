import { DataTypes } from 'sequelize';
import db from '../db/connection.js';
import User from './User.js';

const Tought = db.define('Tought', {
    patrimonio: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING
    },
    modelo: {
        type: DataTypes.STRING
    },
    serial: {
        type: DataTypes.STRING
    },
    localizacao: {
        type: DataTypes.STRING
    },
    observacao: {
        type: DataTypes.STRING
    },
    emprestado: {
        type: DataTypes.BOOLEAN,
        require: true
    }
});

Tought.belongsTo(User);
User.hasMany(Tought);


export default Tought;
