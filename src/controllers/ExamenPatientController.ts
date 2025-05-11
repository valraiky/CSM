import { Request, Response } from "express";
import { ExamenPatientService } from "../services/ExamenPatientService";

export class ExamenPatientController {
    static async create(req:Request, res:Response){
        try {
            const {nom, patientId, examenId, date, valeur, categorieId} = req.body;
            const examen_patients = await ExamenPatientService.create({nom, patientId, examenId, date, valeur, categorieId});
            res.status(201).json(examen_patients);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la création de la emen de patient', error });
        }
    }
}