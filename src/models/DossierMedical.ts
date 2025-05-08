import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class DossierMedical extends Model {
  public id!: number;
  public patient_id!: number;
  public medecin_id!: number;
  public date_consultation!: string;
  public traitement!: Text;
  public notes!: Text
}

DossierMedical.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        patient_id: DataTypes.INTEGER,
        medecin_id: DataTypes.INTEGER,
        date_consultation: DataTypes.DATE,
        diagnostic: DataTypes.TEXT,
        traitement: DataTypes.TEXT,
        notes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'DossierMedical',
      tableName: 'dossiers_medicaux',
      timestamps: true,
    }
);

export default DossierMedical;