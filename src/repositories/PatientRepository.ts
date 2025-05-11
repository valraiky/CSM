import Categorie from "../models/Categorie";
import Patient from "../models/Patient";
import Resultat from "../models/Resultat";
import SousCategorie from "../models/SousCategorie";

Categorie.hasMany(SousCategorie, { foreignKey: 'categorieId', as: 'sousCategories' });

export class PatientRepository {
  static async getAll(){
    return Patient.findAll();
  }

  static async create(data: { nom: string, prenom: string, sexe: string, date_naissance: Date, telephone: string, adresse: string, email: string, numero_dossier: string}){
    return Patient.create(data)
  }

  static async getById(patientId: number) {
    return await Patient.findByPk(patientId);
  }

  static async getAllCategoriesWithSousCategories() {
    return await Categorie.findAll({
      include: [{ model: SousCategorie, as: 'sousCategories' }],
    });
  }

  static async getResultatsByPatient(patientId: number) {
    return await Resultat.findAll({ where: { patientId } });
  }
}