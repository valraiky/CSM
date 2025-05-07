import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

console.log('DB Config:', {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  name: process.env.DB_NAME,
});

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    dialect: 'postgres',
    logging: process.env.LOG_LEVEL === 'debug' ? console.log : false,
  }
);

// Test de connexion
// export const connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('✅ Connexion à la base de données réussie.');
//   } catch (error) {
//     console.error('❌ Impossible de se connecter à la base de données :', error);
//   }
// };

export default sequelize;