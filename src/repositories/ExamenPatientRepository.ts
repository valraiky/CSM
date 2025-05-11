import ExamenPatient from "../models/ExamenPatient";

export class ExamenPatientRepository {
    static async create(data: {nom: string, patientId: number, examenId: number, date: Date, valeur: string, categorieId: number}){
        return ExamenPatient.create(data);
    }
}


