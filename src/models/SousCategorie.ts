// models/SousCategorie.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Categorie from './Categorie';
// import Parametre from './Parametre';

class SousCategorie extends Model {
  public id!: number;
  public nom!: string;
  public categorieId!: number;
//   public parametres?: Parametre[];
}

SousCategorie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prix: {
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

export default SousCategorie;
