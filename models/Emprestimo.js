import { DataTypes } from 'sequelize';
import db from '../db/connection.js';
import User from './User.js';
import Tought from './Toughts.js';

const Emprestimo = db.define('Emprestimo', {
  dataEmprestimo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataDevolucao: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  ativo: {
    type: DataTypes.BOOLEAN
  }
});

  Emprestimo.belongsTo(User);
  Emprestimo.belongsTo(Tought);
  Tought.hasMany(Emprestimo);
  User.hasMany(Emprestimo);
  
export default Emprestimo;
