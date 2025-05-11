// models/Categorie.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Examen from './Examen';
import SousCategorie from './SousCategorie';

class Categorie extends Model {
  public id!: number;
  public nom!: string;
  public examenId!: number;
  public description!: string;
  public prix!: number;
  public sousCategories?: SousCategorie[];
}

Categorie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prix: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    examenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Examen,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Categorie',
    tableName: 'categories',
  }
);



export default Categorie;