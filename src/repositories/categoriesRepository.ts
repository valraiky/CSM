import Categorie from "../models/Categorie";

export class categoriesRepository {
    static async create(data: {nom: string, examenId: number, prix: number, description: string}){
        return Categorie.create(data);
    }
}