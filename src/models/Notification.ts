import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';


class Notification extends Model  {
  public id!: number;
  public user_id!: number;
  public messag!: string;
  public lu!: boolean
}

Notification.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        user_id: DataTypes.INTEGER,
        message: DataTypes.TEXT,
        lu: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Notification',
      tableName: 'notifications',
      timestamps: true,
    }
);

export default Notification;