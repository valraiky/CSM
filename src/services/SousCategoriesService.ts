import { SousCategoriesRepository } from "../repositories/SousCategoriesRepository";

export class SousCategoriesService {
    static async create(data:{nom: string, categorieId: number, description:string, prix: number}){
        return SousCategoriesRepository.create(data);
    }
}