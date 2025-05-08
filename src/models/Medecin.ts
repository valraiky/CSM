import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';


class Medecin extends Model  {
  public id!: number;
  public user_id!: number;
  public specialite!: string;
  public numero_licence!: string;
  public telephone!: string;
  public disponibilite!: boolean
}

Medecin .init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    specialite: DataTypes.STRING,
    numero_licence: {
      type: DataTypes.STRING,
      unique: true,
    },
    telephone: DataTypes.STRING,
    disponibilite: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Medecin',
      tableName: 'medecins',
      timestamps: true,
    }
);

export default Medecin;