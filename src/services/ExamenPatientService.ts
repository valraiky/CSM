import { ExamenPatientRepository } from "../repositories/ExamenPatientRepository";

export class ExamenPatientService{
    static async create(data: {nom: string, patientId: number, examenId: number, date: Date, valeur: string, categorieId: number}) {
        return ExamenPatientRepository.create(data);
    }
}