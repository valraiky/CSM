import { Request, Response } from "express";
import ExamenService from "../services/ExamenService";

export class ExamenController {
    static async create(req: Request, res: Response){
        try {
            const {nom, description} = req.body;
            const examen = await ExamenService.create({nom, description})
            res.status(201).json(examen);
        } catch (error) {
            res.status(500).json({ message: 'Erreur los de création de l\'exame', error })
        }
    }

    static async getAll(req:Request, res:Response){
        try {
            const examens = await ExamenService.getAll();
            res.status(200).json(examens);
        } catch (error) {
            res.status(500).json({ message: 'Erreurs lors de la recupération des Examens', error });
        }
    }
}