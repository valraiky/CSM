import { Request, Response } from "express";
import PatientService from "../services/PatientService";

export class PatientController{
    static async create(req:Request, res:Response){
        try {
            const { nom, prenom, sexe, date_naissance, telephone, adresse, email, numero_dossier} = req.body;
            const patient =await PatientService.create({ nom, prenom, sexe, date_naissance, telephone, adresse, email, numero_dossier});
            res.status(201).json(patient)
        } catch (error) {
            res.status(500).json({mesage: 'Erreur lors de l\'insertion de patient', error})
        }
    }

    static async getAll(req:Request, res:Response){
        try {
            const patiens = await PatientService.getAll();
            res.status(200).json(patiens);
        } catch (error) {
            res.status(500).json({ message: 'Erreurs lors de la recupération des Examens', error });
        }
    }

    static async getPatientStructure (req: Request, res: Response): Promise<void> {
        try {
          const patientId = parseInt(req.params.id, 10);
          const data = await PatientService.getPatientWithResults(patientId);
      
          if (!data) {
            res.status(404).json({ message: 'Patient non trouvé' });
            return;
          }
      
          res.json(data);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Erreur interne du serveur' });
        }
    };
}