import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Resultat extends Model {
  public id!: number;
  public valeur!: string;
  public patientId!: number;
  public categorieId?: number;
  public sousCategorieId?: number;
}

Resultat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    valeur: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categorieId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sousCategorieId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Resultat',
    tableName: 'resultats',
  }
);

export default Resultat;