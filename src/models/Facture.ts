import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';


class Facture extends Model  {
  public id!: number;
  public patient_id!: number;
  public montant!: number;
  public date_facture!: string;
  public description!: string;
  public etat_paiement!: string
}

Facture.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        patient_id: DataTypes.INTEGER,
        montant: DataTypes.DECIMAL,
        date_facture: DataTypes.DATE,
        description: DataTypes.TEXT,
        etat_paiement: DataTypes.ENUM('payé', 'non payé', 'partiel'),
    },
    {
      sequelize,
      modelName: 'Facture',
      tableName: 'factures',
      timestamps: false,
    }
);

export default Facture;