// models/Examen.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Examen extends Model {
  public id!: number;
  public nom!: string;
}

Examen.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Examen',
    tableName: 'examens',
  }
);

export default Examen;