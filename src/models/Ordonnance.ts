import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';


class Ordonnance extends Model  {
  public id!: number;
  public user_id!: number;
  public specialite!: string;
  public date_emission!: string;
  public medicaments!: string;
  public instructions!: boolean
}

Ordonnance.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        dossier_id: DataTypes.INTEGER,
        date_emission: DataTypes.DATE,
        medicaments: DataTypes.TEXT, // JSON.stringify si besoin
        instructions: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Ordonnance',
      tableName: 'ordonnances',
      timestamps: false,
    }
  );

export default Ordonnance;