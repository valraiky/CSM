// models/Parametre.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import SousCategorie from './SousCategorie';

class Parametre extends Model {
  public id!: number;
  public nom!: string;
  public label!: string;
  public unite!: string;
  public sousCategorieId!: number;
}

Parametre.init(
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
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unite: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sousCategorieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: SousCategorie,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Parametre',
    tableName: 'parametres',
  }
);

Parametre.belongsTo(SousCategorie, { foreignKey: 'sousCategorieId' });
SousCategorie.hasMany(Parametre, { foreignKey: 'sousCategorieId' });

export default Parametre;
