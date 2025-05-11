import { Request, Response } from "express";
import { SousCategoriesService } from "../services/SousCategoriesService";

export class SousCategoriesController{
    static async create(req: Request, res:Response){
        try {
            const {nom, categorieId, description, prix} = req.body;
            const souscategories = await SousCategoriesService.create({nom, categorieId, description, prix});
            res.status(201).json(souscategories);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la création de sousCategories', error });
        }
    }
}