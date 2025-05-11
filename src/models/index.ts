import sequelize from "../config/database";
import Categorie from "./Categorie";
import DossierMedical from "./DossierMedical";
import Examen from "./Examen";
import ExamenPatient from "./ExamenPatient";
import Facture from "./Facture";
import Medecin from "./Medecin";
import Notification from "./Notification";
import Ordonnance from "./Ordonnance";
import Patient from "./Patient";
import Rendezvous from "./Rendezvous";
import Resultat from "./Resultat";
import SousCategorie from "./SousCategorie";

import { User } from "./User";
const db = {
  sequelize,
  User,
  Medecin,
  Patient,
  Rendezvous,
  DossierMedical,
  Ordonnance,
  Facture,
  Notification,
  Examen,
  Categorie,
  SousCategorie,
  ExamenPatient
};

// Relations

// Gestion Exament avec Resumtat
Categorie.hasMany(SousCategorie, { foreignKey: 'categorieId' });
SousCategorie.belongsTo(Categorie, { foreignKey: 'categorieId' });

Patient.hasMany(Resultat, { foreignKey: 'patientId' });
Resultat.belongsTo(Patient, { foreignKey: 'patientId' });

Categorie.hasMany(Resultat, { foreignKey: 'categorieId' });
Resultat.belongsTo(Categorie, { foreignKey: 'categorieId' });

SousCategorie.hasMany(Resultat, { foreignKey: 'sousCategorieId' });
Resultat.belongsTo(SousCategorie, { foreignKey: 'sousCategorieId' });

db.Categorie.belongsTo(db.Examen, { foreignKey: 'examenId' });
db.Examen.hasMany(db.Categorie, { foreignKey: 'examenId' });

db.SousCategorie.belongsTo(db.Categorie, { foreignKey: 'categorieId' });
db.Categorie.hasMany(db.SousCategorie, { foreignKey: 'categorieId' });

// Un patient peut faire plusieurs examens (relation 1:N entre Patient et ExamenPatient)
Patient.hasMany(ExamenPatient, { foreignKey: 'patientId' });

// Chaque examen enregistré dans ExamenPatient appartient à un seul patient (relation N:1)
ExamenPatient.belongsTo(Patient, { foreignKey: 'patientId' });

// Un examen (type d'examen clinique, comme "Hématologie") peut être réalisé plusieurs fois (relation 1:N)
Examen.hasMany(ExamenPatient, { foreignKey: 'examenId' });

// Chaque enregistrement dans ExamenPatient correspond à un seul type d'examen (relation N:1)
ExamenPatient.belongsTo(Examen, { foreignKey: 'examenId' });



// Un médecin est un utilisateur
db.Medecin.belongsTo(db.User, { foreignKey: 'userId' });
db.User.hasOne(db.Medecin, { foreignKey: 'userId' });

// Un rendez-vous appartient à un patient et un médecin
db.Rendezvous.belongsTo(db.Patient, { foreignKey: 'patientId' });
db.Patient.hasMany(db.Rendezvous, { foreignKey: 'patientId' });

db.Rendezvous.belongsTo(db.Medecin, { foreignKey: 'medecinId' });
db.Medecin.hasMany(db.Rendezvous, { foreignKey: 'medecinId' });

// Un dossier médical est lié à un patient et un médecin
db.DossierMedical.belongsTo(db.Patient, { foreignKey: 'patientId' });
db.Patient.hasMany(db.DossierMedical, { foreignKey: 'patientId' });

db.DossierMedical.belongsTo(db.Medecin, { foreignKey: 'medecinId' });
db.Medecin.hasMany(db.DossierMedical, { foreignKey: 'medecinId' });

// Une ordonnance est liée à un dossier médical
db.Ordonnance.belongsTo(db.DossierMedical, { foreignKey: 'dossierId' });
db.DossierMedical.hasOne(db.Ordonnance, { foreignKey: 'dossierId' });

// Une facture appartient à un patient
db.Facture.belongsTo(db.Patient, { foreignKey: 'patientId' });
db.Patient.hasMany(db.Facture, { foreignKey: 'patientId' });

// Une notification appartient à un utilisateur
db.Notification.belongsTo(db.User, { foreignKey: 'userId' });
db.User.hasMany(db.Notification, { foreignKey: 'userId' });

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