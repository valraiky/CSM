import { Request, Response } from "express";
import PatientService from "../services/PatientService";

export class PatientController{

    static async getAll(req:Request, res:Response){
        try {
            const patiens = await PatientService.getAll();
            res.status(200).json(patiens);
        } catch (error) {
            res.status(500).json({ message: 'Erreurs lors de la recupération des Examens', error });
        }
    }
}