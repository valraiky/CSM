import { PatientRepository } from "../repositories/PatientRepository";

function getExamenNom(id: number): string {
  switch (id) {
    case 1: return 'clinique';
    case 2: return 'paraclinique';
    default: return `examen_${id}`;
  }
}

class PatientService {
  static async getAll() {
    return PatientRepository.getAll();
  }

  static async create(data: { nom: string, prenom: string, sexe: string, date_naissance: Date, telephone: string, adresse: string, email: string, numero_dossier: string}){
    return PatientRepository.create(data)
  }

  static async getPatientWithResults(patientId: number) {
    const patient = await PatientRepository.getById(patientId);
    if (!patient) return null;

    const categories = await PatientRepository.getAllCategoriesWithSousCategories();
    const resultats = await PatientRepository.getResultatsByPatient(patientId);

    const examensMap: { [examenId: number]: any } = {};

    for (const categorie of categories) {
      const catResult = resultats.find(r => r.categorieId === categorie.id);

      const sousCategoriesWithResults = (categorie as any).sousCategories
        .map((sous: any) => {
          const sousResult = resultats.find(r => r.sousCategorieId === sous.id);
          if (!sousResult) return null;
          return {
            id: sous.id,
            nom: sous.nom,
            prix: sous.prix,
            resultat: { id: sousResult.id, valeur: sousResult.valeur }
          };
        })
        .filter(Boolean);

      if (!catResult && sousCategoriesWithResults.length === 0) continue;

      const examenId = categorie.examenId;
      if (!examensMap[examenId]) {
        examensMap[examenId] = {
          nom: getExamenNom(examenId),
          categories: [],
        };
      }

      examensMap[examenId].categories.push({
        id: categorie.id,
        nom: categorie.nom,
        prix: categorie.prix,
        resultat: catResult ? { id: catResult.id, valeur: catResult.valeur } : null,
        sousCategories: sousCategoriesWithResults,
      });
    }

    const examens = Object.values(examensMap);

    return {
      id: patient.id,
      nom: patient.nom,
      examens,
    };
  }
}

export default PatientService;
