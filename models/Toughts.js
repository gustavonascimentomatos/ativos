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
    aquisicao: {
        type: DataTypes.DATE
    },
    responsavel_atual: {
        type: DataTypes.STRING
    },
    localizacao: {
        type: DataTypes.STRING
    },
    observacao: {
        type: DataTypes.STRING
    },
});

Tought.belongsTo(User);
User.hasMany(Tought);

export default Tought;
