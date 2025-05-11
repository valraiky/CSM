// models/Examen.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Categorie from './Categorie';

class Examen extends Model {
  public id!: number;
  public nom!: string;
  public description!: string;
  public categories?: Categorie[];
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
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Examen',
    tableName: 'examens',
  }
);

export default Examen;