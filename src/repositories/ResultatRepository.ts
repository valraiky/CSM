import Resultat from "../models/Resultat";

export class ResultatRepository{
    static async create(data: {valeur: string, patientId: number, categorieId:number, sousCategorieId:number}){
        return Resultat.create(data);
    }
}