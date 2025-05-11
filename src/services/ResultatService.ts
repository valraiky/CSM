import { ResultatRepository } from "../repositories/ResultatRepository";

export class ResultatService{
    static async create(data: {valeur: string, patientId: number, categorieId:number, sousCategorieId:number}){
        return ResultatRepository.create(data);
    }
}