
import sequelize from "../config/database";
import { User } from "./User";


    const db = {
        sequelize,
        User
    };
  
  // Synchronisation avec la base de données
  const initDatabase = async () => {
    try {
      await sequelize.sync({ alter: true }); // Utilisation de alter pour mettre à jour la structure si nécessaire
      console.log("✅ Database synchronized successfully.");
    } catch (error) {
      console.error("❌ Error synchronizing database:", error);
    }
  };
  
  export { db, initDatabase };
