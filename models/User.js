import { DataTypes } from 'sequelize';
import db from '../db/connection.js';

const User = db.define('User', {
    name:{
        type: DataTypes.STRING,
        require: true 
    },
    email:{
        type: DataTypes.STRING,
        require: true 
    },
    password:{
        type: DataTypes.STRING,
        require: false 
    }
});

export default User;
