import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Rendezvous extends Model {
  public id!: number;
  public patient_id!: number;
  public medecin_id!: number;
  public etat!: string;
  public motif!: Text
}

Rendezvous.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        patient_id: DataTypes.INTEGER,
        medecin_id: DataTypes.INTEGER,
        date_rdv: DataTypes.DATE,
        etat: DataTypes.ENUM('prévu', 'annulé', 'terminé'),
        motif: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Rendezvous',
      tableName: 'rendezvous',
      timestamps: true,
    }
);

export default Rendezvous;