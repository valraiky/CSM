import { Request, Response } from "express";
import { CategoriesService } from "../services/CategoriesService";

export class CategoriesControler {
    static async create(req:Request, res:Response){
        try {
            const {nom, examenId, prix, description} = req.body;
            const categories = await CategoriesService.create({nom, examenId, prix, description});
            res.status(201).json(categories);
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la création de la catégorie', error });
        }
    }
}