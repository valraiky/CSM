// models/Categorie.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Examen from './Examen';

class Categorie extends Model {
  public id!: number;
  public nom!: string;
  public examenId!: number;
}

Categorie.init(
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

Categorie.belongsTo(Examen, { foreignKey: 'examenId' });
Examen.hasMany(Categorie, { foreignKey: 'examenId' });

export default Categorie;