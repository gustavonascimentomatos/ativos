import { DataTypes } from 'sequelize';
import db from '../db/connection.js';

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
    },
    
});

export default Tought;
