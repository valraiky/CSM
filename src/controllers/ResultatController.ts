import { Request, Response } from "express";
import { ResultatService } from "../services/ResultatService";

export class ResultatController{
    static async create(req:Request, res:Response){
        try {
            const {valeur, patientId, categorieId, sousCategorieId} = req.body;
            const resultat = await ResultatService.create({valeur, patientId, categorieId, sousCategorieId});
            res.status(201).json(resultat);
        } catch (error) {
            res.status(500).json({message: 'Erreur lors de l\'insertion du resultat', error});
        }
    }
}