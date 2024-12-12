import { DataTypes } from 'sequelize';
import db from '../db/connection.js';
import User from './User.js';
import Tought from './Toughts.js';

const Emprestimo = db.define('Emprestimo', {
    dataEmprestimo: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    dataDevolucao: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });

  Emprestimo.belongsTo(User, {
    foreignKey: {
      name: 'userId',
      allowNull: false,
    },
    as: 'usuario',
  });
  
  Emprestimo.belongsTo(Tought, {
    foreignKey: {
      name: 'equipamentoId',
      allowNull: false,
    },
    as: 'equipamento',
  });

  Tought.hasMany(Emprestimo)

export default Emprestimo;
