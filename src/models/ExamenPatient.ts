import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Patient from './Patient';
import Examen from './Examen';
import Categorie from './Categorie';
// import ResultatParametre from './ResultatParametre';

class ExamenPatient extends Model {
  public id!: number;
  public patientId!: number;
  public examenId!: number;
  public date!: Date;
  public valeur!: string;
  public categorieId!: number
//   public resultats?: ResultatParametre[];
}

ExamenPatient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Patient,
        key: 'id',
      },
    },
    examenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Examen,
        key: 'id',
      },
    },
    categorieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Categorie,
          key: 'id',
        },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    valeur: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  },
  {
    sequelize,
    modelName: 'ExamenPatient',
    tableName: 'examen_patients',
  }
);

export default ExamenPatient;
