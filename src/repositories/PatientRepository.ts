import Patient from '../models/Patient';
import Categorie from '../models/Categorie';
import SousCategorie from '../models/SousCategorie';
import Resultat from '../models/Resultat';

Categorie.hasMany(SousCategorie, { foreignKey: 'categorieId', as: 'sousCategories' });

export default class PatientRepository {
    static async getAll(){
        return Patient.findAll();
    }

    static async getPatientWithResults(patientId: number) {

        const patient = await Patient.findByPk(patientId);

        if (!patient) return null;
        

        const categories = await Categorie.findAll({
        include: [{ model: SousCategorie, as: 'sousCategories' }],
        });

        const resultats = await Resultat.findAll({ where: { patientId } });

        const cliniques: any = { categorie: {} };

        for (const categorie of categories) {
        const catResult = resultats.find(r => r.categorieId === categorie.id);
        const sousCategories = (categorie as any).sousCategories.map((sous: any) => {
            const sousResult = resultats.find(r => r.sousCategorieId === sous.id);
            return {
            id: sous.id,
            nom: sous.nom,
            prix: sous.prix,
            resultat: sousResult ? { id: sousResult.id, valeur: sousResult.valeur } : null,
            };
        });

        cliniques.categorie[categorie.nom] = {
            id: categorie.id,
            prix: categorie.prix,
            resultat: catResult ? { id: catResult.id, valeur: catResult.valeur } : null,
            sousCategories,
        };
        }

        return {
        id: patient.id,
        nom: patient.nom,
        cliniques,
        };
    }
}

// import ExamenPatient from "../models/ExamenPatient";
// import Patient from "../models/Patient"

// class PatientRepository{
    // static async getAll(){
    //     return Patient.findAll({
    //         include:[
    //             {
    //                 model: ExamenPatient,
    //             }
    //         ]
    //     });
    // }
// }

// export default PatientRepository