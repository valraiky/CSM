import { initDatabase } from "./models";
import dotenv from "dotenv";
import express from "express";
import authRoutes from './routes/authRoutes';
import examenRoutes from './routes/examenRoutes';
import categoriesRoutes from './routes/categoriesRoutes';
import examenPatientRoutes from './routes/examenPatientRoutes'
import patientRoutes from './routes/patientRoutes';
import sousCategoriesROutes from './routes/sousCategoriesRoutes';
import resultatRoutes from './routes/ResultatRoute';
import passport from './middlewares/passport';

dotenv.config();

const app = express();
app.use(express.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/examen', examenRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/sousCategories', sousCategoriesROutes);
app.use('/api/examenPatient', examenPatientRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/resultats', resultatRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await initDatabase();
    app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));
};
  
startServer();