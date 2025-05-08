import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';


export class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
  public fullname!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      
    },
    fullname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  }
);
