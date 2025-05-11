import { categoriesRepository } from "../repositories/categoriesRepository";

export class CategoriesService {
    static async create(data: {nom: string, examenId: number, prix: number, description: string}) {
        return categoriesRepository.create(data);
    }
}