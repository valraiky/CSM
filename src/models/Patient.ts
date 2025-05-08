import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Patient extends Model {
  public id!: number;
  public nom!: string;
  public prenom!: string;
  public sexe!: string;
  public date_naissance!: Date;
  public telephone!: string;
  public adresse!: string;
  public email!: string;
  public numero_dossier!: string
}

Patient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: DataTypes.STRING,
        prenom: DataTypes.STRING,
        sexe: DataTypes.ENUM('M', 'F'),
        date_naissance: DataTypes.DATEONLY,
        telephone: DataTypes.STRING,
        adresse: DataTypes.STRING,
        email: DataTypes.STRING,
        numero_dossier: {
        type: DataTypes.STRING,
        unique: true,
        },
    },
    {
      sequelize,
      modelName: 'Patient',
      tableName: 'patients',
      timestamps: true,
    }
);

export default Patient;