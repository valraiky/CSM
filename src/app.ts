import { initDatabase } from "./models";
import dotenv from "dotenv";
import express from "express";
import authRoutes from './routes/authRoutes';
import passport from './middlewares/passport';

dotenv.config();

const app = express();
app.use(express.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await initDatabase();
    app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
};
  
startServer();