import SousCategorie from "../models/SousCategorie";

export class SousCategoriesRepository {
    static async create(data:{nom: string, categorieId: number, description:string, prix: number}){
       return SousCategorie.create(data);
    }
}