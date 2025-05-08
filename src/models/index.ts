import sequelize from "../config/database";
import DossierMedical from "./DossierMedical";
import Facture from "./Facture";
import Medecin from "./Medecin";
import Notification from "./Notification";
import Ordonnance from "./Ordonnance";
import Patient from "./Patient";
import Rendezvous from "./Rendezvous";
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
  Notification
};

// Relations

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