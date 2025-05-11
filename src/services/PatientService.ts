import PatientRepository from "../repositories/PatientRepository";

class PatientService {
  static async getAll() {
    return PatientRepository.getAll();
  }
}

export default PatientService;
