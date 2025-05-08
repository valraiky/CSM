// models/CategorieParametre.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Parametre from './Parametre';

class CategorieParametre extends Model {
  public id!: number;
  public nom!: string;
  public parametreId!: number;
}

CategorieParametre.init(
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
    parametreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Parametre,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'CategorieParametre',
    tableName: 'categories_parametres',
  }
);

CategorieParametre.belongsTo(Parametre, { foreignKey: 'parametreId' });
Parametre.hasMany(CategorieParametre, { foreignKey: 'parametreId' });

export default CategorieParametre;
