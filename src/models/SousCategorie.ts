// models/SousCategorie.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Categorie from './Categorie';

class SousCategorie extends Model {
  public id!: number;
  public nom!: string;
  public categorieId!: number;
}

SousCategorie.init(
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
    categorieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Categorie,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'SousCategorie',
    tableName: 'sous_categories',
  }
);

SousCategorie.belongsTo(Categorie, { foreignKey: 'categorieId' });
Categorie.hasMany(SousCategorie, { foreignKey: 'categorieId' });

export default SousCategorie;
